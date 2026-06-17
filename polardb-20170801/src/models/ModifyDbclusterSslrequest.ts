// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterSSLRequest extends $dara.Model {
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
   * The ID of the endpoint.
   * 
   * > - This parameter is required for PolarDB for MySQL clusters.
   * >
   * > - This parameter is not required for PolarDB for PostgreSQL or PolarDB for PostgreSQL (Compatible with Oracle) clusters. By default, SSL encryption is enabled for all endpoints of the clusters.
   * >
   * > - You can call the [DescribeDBClusterSSL](https://help.aliyun.com/document_detail/2319159.html) operation to view the details of the endpoint.
   * 
   * @example
   * pe-******************
   */
  DBEndpointId?: string;
  /**
   * @remarks
   * The network type of the endpoint. The value must be the same as the network type of the endpoint specified by the **DBEndpointId** parameter. Valid values:
   * 
   * - **Public**
   * 
   * - **Private**
   * 
   * - **Inner**
   * 
   * > * This parameter is required for PolarDB for MySQL clusters.
   * >
   * > * This parameter is not required for PolarDB for PostgreSQL or PolarDB for PostgreSQL (Compatible with Oracle) clusters. By default, SSL encryption is enabled for all endpoints of the clusters.
   * 
   * @example
   * Public
   */
  netType?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether automatic rotation of SSL certificates is enabled.
   * 
   * - **Enable**
   * 
   * - **Disable**
   * 
   * @example
   * Enable
   */
  SSLAutoRotate?: string;
  /**
   * @remarks
   * The SSL encryption status. Valid values:
   * 
   * - **Disabled**
   * 
   * - **Enabled**
   * 
   * - **Update**: The SSL certificate is updated.
   * 
   * > After you enable SSL encryption or update the SSL certificate, you must download and configure the certificate. See [Configure SSL encryption](https://help.aliyun.com/document_detail/153182.html).
   * 
   * @example
   * Enable
   */
  SSLEnabled?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBEndpointId: 'DBEndpointId',
      netType: 'NetType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      SSLAutoRotate: 'SSLAutoRotate',
      SSLEnabled: 'SSLEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBEndpointId: 'string',
      netType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
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

