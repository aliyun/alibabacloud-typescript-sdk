import * as $dara from '@darabonba/typescript';
export declare class DescribePolarClawAgentToolsRequest extends $dara.Model {
    /**
     * @remarks
     * Agent ID
     *
     * This parameter is required.
     *
     * @example
     * main
     */
    agentId?: string;
    /**
     * @remarks
     * The application ID.
     *
     * This parameter is required.
     *
     * @example
     * pa-xxx
     */
    applicationId?: string;
    /**
     * @remarks
     * Specifies whether to include plugin tools.
     *
     * @example
     * true
     */
    includePlugins?: boolean;
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
