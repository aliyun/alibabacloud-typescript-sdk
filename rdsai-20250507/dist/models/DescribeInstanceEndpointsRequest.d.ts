import * as $dara from '@darabonba/typescript';
export declare class DescribeInstanceEndpointsRequest extends $dara.Model {
    /**
     * @remarks
     * Reserved parameter.
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
     * The region.
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
