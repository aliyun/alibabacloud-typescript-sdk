import * as $dara from '@darabonba/typescript';
export declare class DescribeDBClusterSSLRequest extends $dara.Model {
    /**
     * @remarks
     * The cluster ID.
     * >You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to query the details of all clusters under your account, including cluster IDs.
     *
     * This parameter is required.
     *
     * @example
     * pc-************
     */
    DBClusterId?: string;
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The PFS instance ID.
     *
     * @example
     * pfs-xxx
     */
    pfsInstanceId?: string;
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
