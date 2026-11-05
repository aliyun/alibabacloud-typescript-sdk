import * as $dara from '@darabonba/typescript';
export declare class DescribeInstanceCrossBackupPolicyRequest extends $dara.Model {
    /**
     * @remarks
     * The instance ID.
     *
     * This parameter is required.
     *
     * @example
     * rm-uf6wjk5****
     */
    DBInstanceId?: string;
    ownerId?: number;
    /**
     * @remarks
     * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
     *
     * This parameter is required.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
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
