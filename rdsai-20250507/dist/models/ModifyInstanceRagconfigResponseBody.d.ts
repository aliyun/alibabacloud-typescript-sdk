import * as $dara from '@darabonba/typescript';
export declare class ModifyInstanceRAGConfigResponseBody extends $dara.Model {
    /**
     * @remarks
     * The reserved parameter.
     *
     * @example
     * Reserved parameter
     */
    branchName?: string;
    /**
     * @remarks
     * The instance ID of the AI application.
     *
     * @example
     * ra-supabase-8moov5lxba****
     */
    instanceName?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * FE9C65D7-930F-57A5-A207-8C396329241C
     */
    requestId?: string;
    /**
     * @remarks
     * The status of the RAG Agent.
     *
     * - **true**: Enabled.
     * - **false**: Disabled.
     *
     * @example
     * true
     */
    status?: string;
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
