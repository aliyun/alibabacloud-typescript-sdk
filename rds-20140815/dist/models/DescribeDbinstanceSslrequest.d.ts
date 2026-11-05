import * as $dara from '@darabonba/typescript';
export declare class DescribeDBInstanceSSLRequest extends $dara.Model {
    /**
     * @remarks
     * The instance ID. You can call [DescribeDBInstances](https://help.aliyun.com/document_detail/610396.html) to query the instance ID.
     *
     * This parameter is required.
     *
     * @example
     * rm-bp162dfr55g47****
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
