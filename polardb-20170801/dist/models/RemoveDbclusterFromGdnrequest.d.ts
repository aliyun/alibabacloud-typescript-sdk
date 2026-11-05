import * as $dara from '@darabonba/typescript';
export declare class RemoveDBClusterFromGDNRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the secondary cluster that you want to remove from the GDN.
     *
     * > You can call the [DescribeGlobalDatabaseNetwork](https://help.aliyun.com/document_detail/264580.html) operation to query the IDs of clusters in the GDN.
     *
     * This parameter is required.
     *
     * @example
     * pc-wz9fb5nn44u1d****
     */
    DBClusterId?: string;
    /**
     * @remarks
     * Specifies whether to forcibly remove the cluster.
     *
     * @example
     * false
     */
    force?: boolean;
    /**
     * @remarks
     * The ID of the GDN.
     *
     * This parameter is required.
     *
     * @example
     * gdn-bp1fttxsrmv*****
     */
    GDNId?: string;
    ownerAccount?: string;
    ownerId?: number;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    securityToken?: string;
    /**
     * @remarks
     * The ID of the target cluster.
     *
     * @example
     * pc-wz9fb5nn44u1d****
     */
    targetDBClusterId?: string;
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
