'use server';
import { z } from 'zod';

const FormSchema = z.object({
  id: z.string(),
  customerID: z.string(),
  amount: z.coerce.number(),
  status: z.enum(['pending', 'paid']),
  date: z.string(),
});
const CreateInvoice = FormSchema.omit({ id: true, date: true });

export async function createInvoice(formData: FormData) {
  const { customerID, amount, status } = CreateInvoice.parse({
    customerID: formData.get('customerID'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
  console.log(rawFormData);
}
