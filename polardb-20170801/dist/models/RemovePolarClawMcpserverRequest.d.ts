import * as $dara from '@darabonba/typescript';
export declare class RemovePolarClawMCPServerRequest extends $dara.Model {
    /**
     * @remarks
     * The PolarClaw application ID.
     *
     * This parameter is required.
     *
     * @example
     * pa-**************
     */
    applicationId?: string;
    /**
     * @remarks
     * The ID of the MCP server to delete.
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
