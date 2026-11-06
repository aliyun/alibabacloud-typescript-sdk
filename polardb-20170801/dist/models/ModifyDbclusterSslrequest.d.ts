import * as $dara from '@darabonba/typescript';
export declare class ModifyDBClusterSSLRequest extends $dara.Model {
    /**
     * @remarks
     * The validity period of the SSL certificate. Unit: days. Valid values: 365 and 1095.
     *
     * @example
     * 1095
     */
    certValidDays?: string;
    /**
     * @remarks
     * The connection string.
     *
     * @example
     * example.cluster.rds.aliyuncs.com
     */
    connectionString?: string;
    /**
     * @remarks
     * The cluster ID.
     *
     * This parameter is required.
     *
     * @example
     * pc-************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The endpoint ID.
     *
     * >* This parameter is required if the target cluster is a PolarDB for MySQL cluster.
     * >* This parameter is not required if the target cluster is a PolarDB for PostgreSQL cluster or a PolarDB for PostgreSQL (Compatible with Oracle) cluster. By default, Secure Sockets Layer (SSL) encryption is enabled for all endpoints.
     * >* You can call the [DescribeDBClusterSSL](https://help.aliyun.com/document_detail/2319159.html) operation to query endpoint details.
     *
     * @example
     * pe-******************
     */
    DBEndpointId?: string;
    /**
     * @remarks
     * The network type of the endpoint. The value must be the same as the network type of the endpoint specified by the **DBEndpointId** parameter. Valid values:
     * * **Public**: Internet
     * * **Private**: Private network
     * * **Inner**: Private network (classic network)
     *
     * >* This parameter is required if the target cluster is a PolarDB for MySQL cluster.
     * >* This parameter is not required if the target cluster is a PolarDB for PostgreSQL cluster or a PolarDB for PostgreSQL (Compatible with Oracle) cluster. By default, Secure Sockets Layer (SSL) encryption is enabled for all endpoints.
     *
     * @example
     * Public
     */
    netType?: string;
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The PFS instance ID.
     *
     * @example
     * pfs-xxx
     */
    pfsInstanceId?: string;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    /**
     * @remarks
     * Specifies whether to enable automatic rotation for SSL certificates. Valid values:
     *
     * - **Enable**: Enables automatic rotation.
     *
     * - **Disable**: Disables automatic rotation.
     *
     * @example
     * Enable
     */
    SSLAutoRotate?: string;
    /**
     * @remarks
     * Modifies the Secure Sockets Layer (SSL) encryption status. Valid values:
     * * **Disable**: Performs a shutdown of Secure Sockets Layer (SSL) encryption.
     * * **Enable**: Enables Secure Sockets Layer (SSL) encryption.
     * * **Update**: Updates the CA certificate.
     *
     * > After you enable Secure Sockets Layer (SSL) encryption or update the CA certificate, you must download and configure the certificate. For details, see [Configure SSL encryption](https://help.aliyun.com/document_detail/153182.html).
     *
     * @example
     * Enable
     */
    SSLEnabled?: string;
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
