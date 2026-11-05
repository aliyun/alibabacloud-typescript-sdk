import * as $dara from '@darabonba/typescript';
export declare class DescribeDBInstanceEncryptionKeyRequest extends $dara.Model {
    /**
     * @remarks
     * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
     *
     * @example
     * rm-uf6wjk5****
     */
    DBInstanceId?: string;
    /**
     * @remarks
     * The ID of the custom key.
     *
     * @example
     * 749c1df7-****-****-****-****
     */
    encryptionKey?: string;
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The region ID of the instance. You can call the DescribeRegions operation to query the region ID.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    securityToken?: string;
    /**
     * @remarks
     * The ID of the destination region. You can call the DescribeRegions operation to query the region ID.
     *
     * @example
     * cn-qingdao
     */
    targetRegionId?: string;
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
