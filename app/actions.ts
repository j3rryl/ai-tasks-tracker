"use server";

import { z } from "zod";

const taskSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
});
export async function createTask(formData: unknown) {
  const parse = taskSchema.safeParse(formData);
  if (!parse.success) {
    let errorMessage = "";
    parse.error?.issues.forEach((issue) => {
      errorMessage = errorMessage + issue.message + "\n";
    });
    return { success: false, message: errorMessage };
  }
  return { success: true, message: "Task created successfully!" };
}
