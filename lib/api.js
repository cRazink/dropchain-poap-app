const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;

async function fetchWithToken(url, body) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${currentUserIdToken}`
        },
        body: JSON.stringify(body),
    });

    if (!response.ok) {
        const errorMsg = await response.text();
        throw new Error(`Request failed: ${errorMsg}`);
    }

    return await response.json();
}

export const redeemSessionToken = async (body) => {
    return await fetchWithToken(`${backendURL}/redeemSessionToken`, body);
};

export const handleFreeNftClaim = async (body) => {
    return await fetchWithToken(`${backendURL}/handleFreeNftClaim`, body);
};

export const grabUserPoapAssets = async (body) => {
    return await fetchWithToken(`${backendURL}/grabUserPoapAssets`, body);
};

export const grabUserPoapAssetsFull = async (body) => {
    return await fetchWithToken(`${backendURL}/grabUserPoapAssetsFull`, body);
};