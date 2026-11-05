import * as $dara from '@darabonba/typescript';
export declare class DisableDBClusterOrcaRequest extends $dara.Model {
    /**
     * @remarks
     * Specifies whether to clean up data. Valid values:
     * - **Enable**: Enables data cleanup.
     * - **Disable**: Disables data cleanup.
     *
     * @example
     * Enable
     */
    cleanData?: string;
    /**
     * @remarks
     * The cluster ID.
     * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to query all clusters in the specified region, including the cluster ID.
     *
     * This parameter is required.
     *
     * @example
     * pc-**************
     */
    DBClusterId?: string;
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
