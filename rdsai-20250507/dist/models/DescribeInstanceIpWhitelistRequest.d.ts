import * as $dara from '@darabonba/typescript';
export declare class DescribeInstanceIpWhitelistRequest extends $dara.Model {
    branchName?: string;
    /**
     * @remarks
     * The group name.
     *
     * @example
     * default
     */
    groupName?: string;
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
