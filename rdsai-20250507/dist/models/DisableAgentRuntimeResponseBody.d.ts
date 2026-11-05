import * as $dara from '@darabonba/typescript';
export declare class DisableAgentRuntimeResponseBody extends $dara.Model {
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
     * Id of the request
     *
     * @example
     * D984FD38-6C2D-55DF-B0D7-8BCAC2E1F8C2
     */
    requestId?: string;
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
