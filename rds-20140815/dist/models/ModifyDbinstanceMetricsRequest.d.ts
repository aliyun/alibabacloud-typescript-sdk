import * as $dara from '@darabonba/typescript';
export declare class ModifyDBInstanceMetricsRequest extends $dara.Model {
    /**
     * @remarks
     * Instance ID of the instance. You can call the DescribeDBInstances operation to query instance ID.
     *
     * This parameter is required.
     *
     * @example
     * pgm-bp1s1j103lo6****
     */
    DBInstanceName?: string;
    /**
     * @remarks
     * The monitoring metrics of the instance. You can specify multiple metric keys and separate them with commas (,). A maximum of 30 metric keys can be specified.
     *
     * You can call the DescribeAvailableMetrics operation to query the keys of enhanced monitoring metrics.
     *
     * This parameter is required.
     *
     * @example
     * os.cpu_usage.sys.avg,os.cpu_usage.user.avg
     */
    metricsConfig?: string;
    resourceOwnerId?: number;
    /**
     * @remarks
     * The scope of the modification. Valid values:
     * * **instance**: instance level. The modification applies only to cloud disk instance.
     * * **region**: region level. The modification applies to all ApsaraDB RDS for PostgreSQL instances that use the same storage type as cloud disk instance in the current region. For example, if cloud disk instance uses cloud disks, the modification applies to all ApsaraDB RDS for PostgreSQL instances that use cloud disks in the current region.
     *
     * This parameter is required.
     *
     * @example
     * instance
     */
    scope?: string;
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
