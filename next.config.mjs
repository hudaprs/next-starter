/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	output: process.env.NODE_ENV === 'development' ? undefined : 'standalone'
}

export default nextConfig
