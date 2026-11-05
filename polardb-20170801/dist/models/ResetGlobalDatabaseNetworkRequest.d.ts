import * as $dara from '@darabonba/typescript';
export declare class ResetGlobalDatabaseNetworkRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the cluster in the GDN.
     *
     * > Call the [DescribeGlobalDatabaseNetwork](https://help.aliyun.com/document_detail/264580.html) operation to query the IDs of clusters in the GDN.
     *
     * This parameter is required.
     *
     * @example
     * pc-wz9fb5nn44u1d****
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The ID of the Global Database Network (GDN).
     *
     * This parameter is required.
     *
     * @example
     * gdn-bp1fttxsrmv*****
     */
    GDNId?: string;
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The ID of the region.
     *
     * @example
     * cn-qingdao
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
