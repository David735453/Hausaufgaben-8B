import { verifyAccess } from '@vercel/flags';
 
export async function handler(request, response) {
  const access = await verifyAccess(request.headers.get('Authorization'));
  if (!access) return response.json(null, { status: 401 });
 
  return response.status(200).json({
    definitions: {
      newFeature: {
        description: 'Controls whether the new feature is visible',
        origin: 'https://example.com/#new-feature',
        options: [
          { value: false, label: 'Off' },
          { value: true, label: 'On' },
        ],
      },
    },
  });
}