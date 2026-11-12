import * as $dara from '@darabonba/typescript';
export declare class DescribeDBClusterPriceRequestDBNodes extends $dara.Model {
    /**
     * @remarks
     * The target node specifications.
     *
     * @example
     * polar.mysql.x4.large
     */
    DBNodeClass?: string;
    /**
     * @remarks
     * The node ID.
     *
     * @example
     * pi-**************
     */
    DBNodeId?: string;
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
export declare class DescribeDBClusterPriceRequest extends $dara.Model {
    /**
     * @remarks
     * The cluster edition. Valid values: Normal (Cluster Edition), Basic (Single Node Edition), ArchiveNormal (Archive Database Cluster Edition), SENormal (Standard Edition), and NormalMultimaster (Multi-master Cluster).
     *
     * @example
     * Normal
     */
    creationCategory?: string;
    /**
     * @remarks
     * The cluster ID. Required for non-BUY scenarios.
     *
     * @example
     * pc-**************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The node specifications. Required for the BUY scenario. Example format: polar.mysql.x4.large.
     *
     * @example
     * polar.mysql.x4.large
     */
    DBNodeClass?: string;
    /**
     * @remarks
     * The list of node IDs to delete. Used when ModifyType is set to DELETE.
     *
     * @example
     * ["pi-***************"]
     */
    DBNodeIds?: string[];
    /**
     * @remarks
     * The number of nodes. Valid for the BUY scenario. This number includes read/write nodes. Minimum value: 1. Default value: 1.
     *
     * @example
     * 2
     */
    DBNodeNum?: number;
    /**
     * @remarks
     * The list of nodes for heterogeneous specification changes. Used in specification change scenarios to specify the target specifications for each node.
     */
    DBNodes?: DescribeDBClusterPriceRequestDBNodes[];
    /**
     * @remarks
     * The database engine type. Required for the BUY scenario. Valid values: MySQL, PostgreSQL, and Oracle.
     *
     * @example
     * MySQL
     */
    DBType?: string;
    /**
     * @remarks
     * The database engine version. Required for the BUY scenario. Valid values for MySQL: 5.6, 5.7, and 8.0. Valid values for PostgreSQL: 11 and 14. Valid values for Oracle: 11 and 14.
     *
     * @example
     * 8.0
     */
    DBVersion?: string;
    /**
     * @remarks
     * Specifies whether to enable the hot standby cluster. Valid values: ON and OFF. Valid for the BUY and specification change scenarios.
     *
     * @example
     * ON
     */
    hotStandbyCluster?: string;
    /**
     * @remarks
     * The modification type. Valid values: ADD (add nodes), DELETE (remove nodes), UPGRADE (upgrade), DOWNGRADE (downgrade), HOT_STANDBY (hot standby change), STORAGE (storage space change), and STORAGE_TYPE (storage type change).
     *
     * @example
     * UPGRADE
     */
    modifyType?: string;
    /**
     * @remarks
     * The order type. Valid values: BUY (new purchase), CONVERT (billing method change), RENEW (renewal), UPGRADE (upgrade or add nodes), and DOWNGRADE (downgrade or remove nodes).
     *
     * This parameter is required.
     *
     * @example
     * BUY
     */
    orderType?: string;
    /**
     * @remarks
     * The billing method. Required for the BUY and CONVERT scenarios. Valid values: Prepaid (subscription) and Postpaid (pay-as-you-go).
     *
     * @example
     * Prepaid
     */
    payType?: string;
    /**
     * @remarks
     * The subscription period. Valid values: Month and Year.
     *
     * @example
     * Month
     */
    period?: string;
    /**
     * @remarks
     * The provisioned IOPS. Used for the Standard Edition (SENormal) scenario.
     *
     * @example
     * 1000
     */
    provisionedIops?: string;
    /**
     * @remarks
     * The region ID.
     *
     * This parameter is required.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The Serverless type. Valid value: AgileServerless.
     *
     * @example
     * AgileServerless
     */
    serverlessType?: string;
    /**
     * @remarks
     * The storage billing method. Valid values: Prepaid (subscription) and Postpaid (pay-as-you-go).
     *
     * @example
     * Prepaid
     */
    storageChargeType?: string;
    /**
     * @remarks
     * The storage space. Unit: GB. Used for prepaid storage or storage specification change scenarios.
     *
     * @example
     * 50
     */
    storageSpace?: string;
    /**
     * @remarks
     * The storage type. Valid values: PSL5 (premium performance), PSL4 (standard performance), ESSDPL0, ESSDPL1, ESSDPL2, ESSDPL3, and ESSDAUTOPL.
     *
     * @example
     * PSL5
     */
    storageType?: string;
    /**
     * @remarks
     * The purchase duration. Used in combination with Period. Valid for the BUY, CONVERT, and RENEW scenarios when the billing method is Prepaid.
     *
     * @example
     * 1
     */
    usedTime?: string;
    /**
     * @remarks
     * The zone ID. Recommended for the BUY scenario.
     *
     * @example
     * cn-hangzhou-h
     */
    zoneId?: string;
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
