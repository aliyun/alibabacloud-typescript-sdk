import * as $dara from '@darabonba/typescript';
export declare class DescribePolarClawMCPServersRequest extends $dara.Model {
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
     * A list of MCP server names. If this parameter is empty, the configurations of all MCP servers are returned.
     */
    serverList?: string[];
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
