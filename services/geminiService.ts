
import { GoogleGenAI } from "@google/genai";
import { resumeData } from "../data/resumeData";

// Always use a named parameter for the API key and use process.env.API_KEY directly.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const askAI = async (userQuestion: string) => {
  try {
    const systemInstruction = `
      You are a professional AI Assistant for the DevOps Engineer Md. Touhidi Hasan Mondol Nishat. 
      Your goal is to answer questions about Touhidi's professional background, skills, projects, and availability based on the following data:
      
      NAME: ${resumeData.name}
      TITLE: ${resumeData.title}
      ABOUT: ${resumeData.about}
      EXPERIENCE_YEARS: 4 Years
      SKILLS: ${JSON.stringify(resumeData.skills)}
      EXPERIENCE: ${JSON.stringify(resumeData.experience)}
      PROJECTS: ${JSON.stringify(resumeData.projects)}
      EDUCATION: ${JSON.stringify(resumeData.education)}
      CERTIFICATIONS: ${JSON.stringify(resumeData.certifications)}
      CONTACT: LinkedIn (${resumeData.contact.linkedin}), WhatsApp (available on portfolio).

      Rules:
      1. Be professional, concise, and helpful.
      2. If you don't know the answer, politely suggest contacting Touhidi via LinkedIn or WhatsApp.
      3. Focus on his DevOps, Cloud, Oracle Database, and Kubernetes expertise.
      4. Do not make up information.
      5. Format responses using Markdown for clarity.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userQuestion,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
    });

    // The text property returns the generated content.
    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently offline. Please reach out to Touhidi on LinkedIn!";
  }
};