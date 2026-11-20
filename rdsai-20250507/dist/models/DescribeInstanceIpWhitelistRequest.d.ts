import * as $dara from '@darabonba/typescript';
export declare class DescribeInstanceIpWhitelistRequest extends $dara.Model {
    /**
     * @remarks
     * The name of the branch to be operated on. If this parameter is not specified, the operation is performed on the original instance.
     *
     * @example
     * ra-branch-123456789012abcd
     */
    branchName?: string;
    /**
     * @remarks
     * The name of the group.
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
