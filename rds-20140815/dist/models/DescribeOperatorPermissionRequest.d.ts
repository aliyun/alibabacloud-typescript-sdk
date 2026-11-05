import * as $dara from '@darabonba/typescript';
export declare class DescribeOperatorPermissionRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the ApsaraDB RDS instance. You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/26232.html) operation to query the ID.
     *
     * This parameter is required.
     *
     * @example
     * rm-bp1*******
     */
    DBInstanceId?: string;
    ownerAccount?: string;
    ownerId?: number;
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
