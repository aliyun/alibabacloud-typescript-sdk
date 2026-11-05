import * as $dara from '@darabonba/typescript';
export declare class DescribeUpgradeReportRequest extends $dara.Model {
    /**
     * @remarks
     * The edition. Valid values:
     * * **Normal**: Cluster Edition (default).
     * * **SENormal**: Standard Edition.
     *
     * For more information about editions, see [Product editions](https://help.aliyun.com/document_detail/183258.html).
     *
     * @example
     * Normal
     */
    creationCategory?: string;
    /**
     * @remarks
     * The database type. Valid values:
     *
     * - **MySQL**.
     * - **Oracle**.
     *
     * @example
     * MySQL
     */
    DBType?: string;
    /**
     * @remarks
     * The compatible database version.
     *
     * @example
     * 8.0
     */
    DBVersion?: string;
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The page number.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of entries per page.
     *
     * @example
     * 30
     */
    pageSize?: number;
    /**
     * @remarks
     * The region ID.
     * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query available regions.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    /**
     * @remarks
     * The source instance ID.
     *
     * @example
     * rm-2zen5pe5vi56447d0
     */
    sourceDBClusterId?: string;
    /**
     * @remarks
     * The task status.
     *
     * @example
     * Running
     */
    status?: string;
    /**
     * @remarks
     * The task ID.
     *
     * @example
     * 2321321
     */
    taskId?: string;
    /**
     * @remarks
     * The special metric. Currently, only tair (PolarTair architecture) is supported.
     *
     * @example
     * orca
     */
    type?: string;
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
