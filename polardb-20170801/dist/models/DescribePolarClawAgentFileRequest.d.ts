import * as $dara from '@darabonba/typescript';
export declare class DescribePolarClawAgentFileRequest extends $dara.Model {
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
     * The file name.
     *
     * This parameter is required.
     *
     * @example
     * SOUL.md
     */
    fileName?: string;
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
