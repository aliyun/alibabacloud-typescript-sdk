import * as $dara from '@darabonba/typescript';
export declare class DescribeDBClusterSSLResponseBodyItems extends $dara.Model {
    /**
     * @remarks
     * The cluster endpoint ID.
     *
     * @example
     * pe-************
     */
    DBEndpointId?: string;
    /**
     * @remarks
     * Indicates whether automatic SSL certificate rotation is enabled. Valid values:
     *
     * - **Enable**: Enabled.
     *
     * - **Disable**: Disabled.
     *
     * > This parameter is supported only when the database engine is PostgreSQL-compatible or Oracle syntax-compatible.
     *
     * @example
     * Enable
     */
    SSLAutoRotate?: string;
    /**
     * @remarks
     * The SSL connection address.
     *
     * @example
     * pc-************.mysql.polardb.rds.aliyuncs.com
     */
    SSLConnectionString?: string;
    /**
     * @remarks
     * Indicates whether Secure Sockets Layer (SSL) encryption is enabled. Valid values:
     *
     * - **Enabled**: Enabled.
     * - **Disabled**: Shutdown.
     *
     * @example
     * Enabled
     */
    SSLEnabled?: string;
    /**
     * @remarks
     * The expiration time of the SSL certificate. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format (UTC).
     *
     * @example
     * 2021-11-13T07:14:22Z
     */
    SSLExpireTime?: string;
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
export declare class DescribeDBClusterSSLResponseBody extends $dara.Model {
    /**
     * @remarks
     * The list of SSL connection information.
     */
    items?: DescribeDBClusterSSLResponseBodyItems[];
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * C890995A-CF06-4F4D-8DB8-DD26C2******
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether automatic SSL certificate rotation is enabled. Valid values:
     *
     * - **Enable**: Enabled.
     *
     * - **Disable**: Disabled.
     *
     * > This parameter is supported only for PolarDB for MySQL.
     *
     * @example
     * Enable
     */
    SSLAutoRotate?: string;
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
