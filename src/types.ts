import { z } from 'zod';

export const Form = z.enum([
    "short story",
    "novel",
    "novella",
    "novelette",
    "flash fiction", 
    "serialized fiction",
    "play",
    "screen play"
]);

export const Genre = z.enum([ 
    "literary", 
    "science fiction",
    "fantasy",
    "romance",
    "horror",
    "mystery",
    "historical",
    "poem"
]);

export const IntendedAudience = z.enum(["children", "YA", "adult", "crossover"]);

export const Medium = z.enum(["print", "digital", "audiobook", "web serial", "interactive fiction"]);

export const SubType = z.enum(["full-length", "one act", "ten minute", "comedy sketch"]);

export const SubGenre = z.enum(["cyberpunk", "gothic horror", "historical fantasy"]);

export const PdfItem = z.object({
  id: z.string(),          // stable key
  src: z.string(),
  visible: z.boolean(),
  title: z.string().optional(),
  zoom: z.enum(["page-fit", "page-width"]).optional()
});

export const WorkSchema = z.object({
    id: z.string(),
    title: z.string(),
    fileName: z.string(),
    description: z.string(),
    form: Form,
    wordCount: z.number(),
    pageCount: z.number(),
    genre: Genre,
    subType: SubType.optional(),
    estimatedReadingTime: z.number().optional(), //minutes
    intendedAudience: IntendedAudience.optional(),
    medium: Medium.optional(),
    subGenre: SubGenre.optional(),
    narrativePointOfView: z.string().optional(),
    tense: z.string().optional(),
    voice: z.string().optional(),
    structure: z.string().optional(),
    tone: z.string().optional(),
    motifs: z.string().optional(),
    setting: z.string().optional(),
    manuscriptIsVisible: z.boolean().default(false)
});

export type Work = z.infer<typeof WorkSchema>;

export interface WorkInput extends Work {};