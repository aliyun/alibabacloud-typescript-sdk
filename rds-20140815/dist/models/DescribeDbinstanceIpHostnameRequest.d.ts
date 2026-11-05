import * as $dara from '@darabonba/typescript';
export declare class DescribeDBInstanceIpHostnameRequest extends $dara.Model {
    /**
     * @remarks
     * The instance ID. You can call [DescribeDBInstances](https://help.aliyun.com/document_detail/2628785.html) to query the instance ID.
     *
     * This parameter is required.
     *
     * @example
     * rm-uf6wjk5****
     */
    DBInstanceId?: string;
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The region ID. You can call [DescribeDBInstanceAttribute](https://help.aliyun.com/document_detail/2628783.html) to query the region ID.
     *
     * This parameter is required.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    securityToken?: string;
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
