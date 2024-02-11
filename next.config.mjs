/** @type {import('next').NextConfig} */
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const nextConfig = {
    sassOptions: {
      includePaths: [join(__dirname, 'styles')],
    },
};

export default nextConfig;