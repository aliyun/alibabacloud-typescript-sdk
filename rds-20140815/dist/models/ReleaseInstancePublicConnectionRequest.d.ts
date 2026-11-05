import * as $dara from '@darabonba/typescript';
export declare class ReleaseInstancePublicConnectionRequest extends $dara.Model {
    /**
     * @remarks
     * The public endpoint. You can call DescribeDBInstanceNetInfo to query the public endpoint.
     *
     * This parameter is required.
     *
     * @example
     * rm-uf6wjk5****.mysql.rds.aliyuncs.com
     */
    currentConnectionString?: string;
    /**
     * @remarks
     * The instance ID. You can call DescribeDBInstances to query the instance ID.
     *
     * This parameter is required.
     *
     * @example
     * rm-uf6wjk5****
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
