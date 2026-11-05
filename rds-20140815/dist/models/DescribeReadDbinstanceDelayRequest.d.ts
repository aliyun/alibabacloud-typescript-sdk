import * as $dara from '@darabonba/typescript';
export declare class DescribeReadDBInstanceDelayRequest extends $dara.Model {
    /**
     * @remarks
     * The primary instance ID. You can invoke DescribeDBInstances to obtain this value.
     *
     * This parameter is required.
     *
     * @example
     * rm-bp****
     */
    DBInstanceId?: string;
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The read-only instance ID. You can invoke DescribeDBInstances to obtain this value.
     *
     * This parameter is required.
     *
     * @example
     * rr-bp****
     */
    readInstanceId?: string;
    /**
     * @remarks
     * The region ID. You can call DescribeRegions to obtain this value.
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
