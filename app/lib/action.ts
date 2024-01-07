'use server';
export async function createInvoice(formData: FormData) {
  const rawFormData = {
    customerID: formData.get('customerID'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  };
  console.log(rawFormData);
}
