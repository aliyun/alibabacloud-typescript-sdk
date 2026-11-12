import * as $dara from '@darabonba/typescript';
export declare class DescribePolarClawMCPServersResponseBody extends $dara.Model {
    /**
     * @remarks
     * The application ID.
     *
     * @example
     * pa-**************
     */
    applicationId?: string;
    /**
     * @remarks
     * The status code.
     *
     * @example
     * 200
     */
    code?: number;
    /**
     * @remarks
     * The response message.
     *
     * @example
     * successful
     */
    message?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 2281C6C9-CBAB-1AFD-8400-670750CF6025_2212
     */
    requestId?: string;
    /**
     * @remarks
     * The MCP server configurations.
     *
     * @example
     * {
     *     "dev-mcp-server": "{\\"args\\":[\\"-y\\",\\"@polarclaw/mcp-dev\\"],\\"command\\":\\"node\\"}"
     * }
     */
    servers?: {
        [key: string]: any;
    };
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
