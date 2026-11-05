import * as $dara from '@darabonba/typescript';
export declare class DescribeInstanceRAGConfigRequest extends $dara.Model {
    /**
     * @remarks
     * The reserved parameter.
     */
    branchName?: string;
    /**
     * @remarks
     * The instance ID of the AI application.
     *
     * This parameter is required.
     *
     * @example
     * ra-supabase-8moov5lxba****
     */
    instanceName?: string;
    /**
     * @remarks
     * The region ID.
     *
     * @example
     * cn-beijing
     */
    regionId?: string;
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
