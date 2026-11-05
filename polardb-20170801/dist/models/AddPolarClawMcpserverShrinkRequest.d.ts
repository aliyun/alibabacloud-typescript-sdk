import * as $dara from '@darabonba/typescript';
export declare class AddPolarClawMCPServerShrinkRequest extends $dara.Model {
    /**
     * @remarks
     * The application ID.
     *
     * This parameter is required.
     *
     * @example
     * pa-**************
     */
    applicationId?: string;
    /**
     * @remarks
     * The MCP server configuration object.
     *
     * @example
     * {
     *     "command": "node",
     *     "args": [
     *         "-y",
     *         "@polarclaw/mcp-dev"
     *     ]
     * }
     */
    serverConfigShrink?: string;
    /**
     * @remarks
     * The unique identifier of the MCP server.
     *
     * This parameter is required.
     *
     * @example
     * test-v1
     */
    serverName?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
