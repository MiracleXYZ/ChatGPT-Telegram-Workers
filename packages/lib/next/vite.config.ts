import { createShareConfig } from '../../../vite.config.shared';

export default createShareConfig({
    root: __dirname,
    types: true,
    nodeExternals: true,
});
