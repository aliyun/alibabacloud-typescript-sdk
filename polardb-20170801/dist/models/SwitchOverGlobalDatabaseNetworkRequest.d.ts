import * as $dara from '@darabonba/typescript';
export declare class SwitchOverGlobalDatabaseNetworkRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the cluster to be switched to the primary cluster in the GDN.
     * You can call the [DescribeGlobalDatabaseNetwork](https://help.aliyun.com/document_detail/264580.html) operation to view the cluster IDs in the GDN.
     *
     * @example
     * pc-wz9fb5nn44u1d****
     */
    DBClusterId?: string;
    /**
     * @remarks
     * Specifies whether to forcibly switch the primary and secondary clusters in the GDN. Valid values:
     *
     * - **true**: Forcibly switches the primary and secondary clusters in the GDN.
     *
     * - **false**: Does not forcibly switch the primary and secondary clusters in the GDN.
     *
     * @example
     * false
     */
    forced?: boolean;
    /**
     * @remarks
     * The ID of the global database network (GDN).
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
     * The region ID.
     *
     * @example
     * cn-qingdao
     */
    regionId?: string;
    /**
     * @remarks
     * The ID of the resource group.
     *
     * @example
     * rg-************
     */
    resourceGroupId?: string;
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
