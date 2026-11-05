import * as $dara from '@darabonba/typescript';
export declare class ReceiveDBInstanceRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the primary instance. You can call [DescribeDBInstances](https://help.aliyun.com/document_detail/26232.html) to query the instance ID.
     *
     * This parameter is required.
     *
     * @example
     * rm-uf6wjk5*****
     */
    DBInstanceId?: string;
    /**
     * @remarks
     * The ID of the disaster recovery instance. You can call [DescribeDBInstances](https://help.aliyun.com/document_detail/26232.html) to query the instance ID.
     *
     * This parameter is required.
     *
     * @example
     * rm-tr2whku*****
     */
    guardDBInstanceId?: string;
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
