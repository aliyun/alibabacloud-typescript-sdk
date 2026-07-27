// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterSSLRequest extends $dara.Model {
  /**
   * @example
   * 1095
   */
  certValidDays?: string;
  /**
   * @example
   * xxx
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
   * >* If the cluster is a PolarDB for MySQL cluster, this parameter is required.
   * >* If the cluster is a PolarDB for PostgreSQL cluster or a PolarDB for PostgreSQL (Compatible with Oracle) cluster, you do not need to specify this parameter. Secure Sockets Layer (SSL) encryption is enabled for all endpoints by default.
   * >* You can call the [DescribeDBClusterSSL](https://help.aliyun.com/document_detail/2319159.html) operation to query endpoint details.
   * 
   * @example
   * pe-******************
   */
  DBEndpointId?: string;
  /**
   * @remarks
   * The network type of the endpoint. The value must be consistent with the network type of the endpoint specified by the **DBEndpointId** parameter. Valid values:
   * * **Public**: public network
   * * **Private**: private network
   * * **Inner**: private network (classic network)
   * 
   * >* If the cluster is a PolarDB for MySQL cluster, this parameter is required.
   * >* If the cluster is a PolarDB for PostgreSQL cluster or a PolarDB for PostgreSQL (Compatible with Oracle) cluster, you do not need to specify this parameter. Secure Sockets Layer (SSL) encryption is enabled for all endpoints by default.
   * 
   * @example
   * Public
   */
  netType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @example
   * pfs-xxx
   */
  pfsInstanceId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether to enable automatic SSL certificate rotation. Valid values:
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
   * The SSL status. Valid values:
   * * **Disable**: Shutdown of Secure Sockets Layer (SSL) encryption.
   * * **Enable**: Enables Secure Sockets Layer (SSL) encryption.
   * * **Update**: Updates the CA certificate.
   * 
   * > After you enable Secure Sockets Layer (SSL) encryption or update the CA certificate, you must download and configure the certificate. For details, see [Settings for SSL encryption](https://help.aliyun.com/document_detail/153182.html).
   * 
   * @example
   * Enable
   */
  SSLEnabled?: string;
  static names(): { [key: string]: string } {
    return {
      certValidDays: 'CertValidDays',
      connectionString: 'ConnectionString',
      DBClusterId: 'DBClusterId',
      DBEndpointId: 'DBEndpointId',
      netType: 'NetType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pfsInstanceId: 'PfsInstanceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      SSLAutoRotate: 'SSLAutoRotate',
      SSLEnabled: 'SSLEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certValidDays: 'string',
      connectionString: 'string',
      DBClusterId: 'string',
      DBEndpointId: 'string',
      netType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pfsInstanceId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      SSLAutoRotate: 'string',
      SSLEnabled: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

