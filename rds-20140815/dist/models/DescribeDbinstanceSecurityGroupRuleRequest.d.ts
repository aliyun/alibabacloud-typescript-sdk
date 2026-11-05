import * as $dara from '@darabonba/typescript';
export declare class DescribeDBInstanceSecurityGroupRuleRequest extends $dara.Model {
    /**
     * @remarks
     * The instance ID. You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/2628785.html) operation to query the ID.
     *
     * This parameter is required.
     *
     * @example
     * rm-2ze202******
     */
    DBInstanceId?: string;
    ownerAccount?: string;
    ownerId?: string;
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
