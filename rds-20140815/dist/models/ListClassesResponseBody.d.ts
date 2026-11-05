import * as $dara from '@darabonba/typescript';
export declare class ListClassesResponseBodyItems extends $dara.Model {
    /**
     * @remarks
     * The instance type code. For more information, see [Primary instance types](https://help.aliyun.com/document_detail/26312.html) and [Read-only instance types](https://help.aliyun.com/document_detail/145759.html).
     *
     * @example
     * mysql.n1.micro.1
     */
    classCode?: string;
    /**
     * @remarks
     * The instance family. For more information, see [Instance families](https://help.aliyun.com/document_detail/57184.html).
     *
     * @example
     * general-purpose
     */
    classGroup?: string;
    /**
     * @remarks
     * The number of CPU cores for the instance type. Unit: cores.
     *
     * @example
     * 1
     */
    cpu?: string;
    /**
     * @remarks
     * The encrypted memory size of the security-enhanced instance family. Unit: GB.
     *
     * @example
     * 4
     */
    encryptedMemory?: string;
    /**
     * @remarks
     * The architecture type of the instance type. Valid values:
     *
     * - If the instance uses the **x86** architecture, this parameter is left empty by default.
     * - If the instance uses the **arm** architecture, **arm** is returned.
     *
     * @example
     * arm
     */
    instructionSetArch?: string;
    /**
     * @remarks
     * The maximum number of connections for the instance type.
     *
     * @example
     * 2000
     */
    maxConnections?: string;
    /**
     * @remarks
     * The maximum I/O bandwidth for the instance type. Unit: Mbps.
     *
     * @example
     * 1024Mbps
     */
    maxIOMBPS?: string;
    /**
     * @remarks
     * The maximum IOPS for the instance type. Unit: operations per second.
     *
     * @example
     * 10000
     */
    maxIOPS?: string;
    /**
     * @remarks
     * The memory capacity for the instance type. Unit: GB.
     *
     * @example
     * 1GB
     */
    memoryClass?: string;
    /**
     * @remarks
     * The price of the instance type.
     *
     * <props="china">
     * * Unit: cents (CNY).
     *
     * <props="intl">
     * * Unit: cents (USD).
     *
     *
     * > * If you specify a pay-as-you-go commodity code for the **CommodityCode** parameter, this parameter displays the hourly price.
     * > * If you specify a subscription commodity code for the **CommodityCode** parameter, this parameter displays the monthly price.
     *
     * @example
     * 2500
     */
    referencePrice?: string;
    /**
     * @remarks
     * The instance edition. Valid values:
     * * Regular instances
     *     * **Basic**: Basic Edition.
     *     * **HighAvailability**: High-availability Edition.
     *     * **cluster**: Cluster Edition for MySQL or PostgreSQL.
     *     * **AlwaysOn**: Cluster Edition for SQL Server.
     *     * **Finance**: RDS Enterprise Edition.
     * * Serverless instances
     *     * **serverless_basic**: Serverless Basic Edition. (Applicable only to MySQL and PostgreSQL)
     *     * **serverless_standard**: Serverless High-availability Edition. (Applicable only to MySQL and PostgreSQL)
     *     * **serverless_ha**: Serverless High-availability Edition for SQL Server.
     *
     * @example
     * Basic
     */
    category?: string;
    /**
     * @remarks
     * The instance storage type.
     *
     * @example
     * cloud_essd
     */
    storageType?: string;
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
export declare class ListClassesResponseBody extends $dara.Model {
    /**
     * @remarks
     * The list of instance type information.
     */
    items?: ListClassesResponseBodyItems[];
    /**
     * @remarks
     * The region ID.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * CF8D35BF-263D-4F7B-883A-1163B79A9EC6
     */
    requestId?: string;
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
