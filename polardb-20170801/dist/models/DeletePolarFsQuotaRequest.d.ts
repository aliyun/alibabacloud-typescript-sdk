import * as $dara from '@darabonba/typescript';
export declare class DeletePolarFsQuotaRequestQuotas extends $dara.Model {
    /**
     * @remarks
     * The ID of the quota.
     *
     * This parameter is required.
     *
     * @example
     * 73
     */
    id?: string;
    /**
     * @remarks
     * The name of the quota.
     *
     * This parameter is required.
     *
     * @example
     * sftest
     */
    name?: string;
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
export declare class DeletePolarFsQuotaRequest extends $dara.Model {
    /**
     * @remarks
     * The cluster ID.
     *
     * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to view the details of all clusters under your account, including the cluster ID.
     *
     * @example
     * pc-************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The ID of the Polarlakebase instance.
     *
     * This parameter is required.
     *
     * @example
     * pfs-2ze0i74ka607*****
     */
    polarFsInstanceId?: string;
    /**
     * @remarks
     * The details of the quota rules.
     *
     * This parameter is required.
     */
    quotas?: DeletePolarFsQuotaRequestQuotas[];
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
