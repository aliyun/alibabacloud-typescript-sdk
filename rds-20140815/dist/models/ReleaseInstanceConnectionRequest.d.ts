import * as $dara from '@darabonba/typescript';
export declare class ReleaseInstanceConnectionRequest extends $dara.Model {
    /**
     * @remarks
     * The current public endpoint.
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
    /**
     * @remarks
     * The network type of the instance. Valid values:
     * - **0**: VPC
     * - **1**: classic network
     *
     * This parameter is required.
     *
     * @example
     * 0
     */
    instanceNetworkType?: string;
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
