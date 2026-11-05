import * as $dara from '@darabonba/typescript';
export declare class RestartDBLinkRequest extends $dara.Model {
    /**
     * @remarks
     * The cluster ID.
     *
     * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to query the IDs of all clusters in an Alibaba Cloud account.
     *
     * This parameter is required.
     *
     * @example
     * pc-****************
     */
    DBClusterId?: string;
    ownerAccount?: string;
    ownerId?: number;
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
