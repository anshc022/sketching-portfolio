export interface IGPost {
	id: string;
	caption?: string;
	media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
	media_url: string;
	permalink: string;
	timestamp: string;
}

export async function getInstagramFeed(): Promise<IGPost[]> {
	const token = import.meta.env.INSTAGRAM_ACCESS_TOKEN;

	if (!token) {
		console.warn('No Instagram access token configured. Using placeholders.');
		return [];
	}

	const fields = 'id,caption,media_type,media_url,permalink,timestamp';
	const url = `https://graph.instagram.com/me/media?fields=${fields}&access_token=${token}&limit=30`;

	try {
		const res = await fetch(url);
		if (!res.ok) throw new Error(`IG API error: ${res.status}`);
		const json = await res.json();
		return (json.data || []) as IGPost[];
	} catch (err) {
		console.error('Failed to fetch Instagram feed:', err);
		return [];
	}
}
