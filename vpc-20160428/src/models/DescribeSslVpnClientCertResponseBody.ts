// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSslVpnClientCertResponseBody extends $dara.Model {
  /**
   * @remarks
   * The CA certificate.
   * 
   * @example
   * CA certificate
   */
  caCert?: string;
  /**
   * @remarks
   * The client certificate.
   * 
   * @example
   * Client certificate
   */
  clientCert?: string;
  /**
   * @remarks
   * The client configuration.
   * 
   * @example
   * Client configuration
   */
  clientConfig?: string;
  /**
   * @remarks
   * The client key.
   * 
   * @example
   * The key of the client
   */
  clientKey?: string;
  /**
   * @remarks
   * The timestamp that indicates when the SSL client certificate was created. Unit: milliseconds.
   * 
   * This value is a UNIX timestamp representing the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1552550980000
   */
  createTime?: number;
  /**
   * @remarks
   * The timestamp that indicates when the SSL client certificate expires. Unit: milliseconds.
   * 
   * This value is a UNIX timestamp representing the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1647158980000
   */
  endTime?: number;
  /**
   * @remarks
   * The name of the SSL client certificate.
   * 
   * @example
   * nametest
   */
  name?: string;
  /**
   * @remarks
   * The ID of the region where the SSL client certificate is created.
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
   * 5BE01CD7-5A50-472D-AC14-CA181C5C03BE
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the SSL client certificate belongs.
   * 
   * The SSL client certificate and the SSL server associated with the SSL client certificate belong to the same resource group. You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html) operation to query resource groups.
   * 
   * @example
   * rg-acfmzs372yg****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the SSL client certificate.
   * 
   * @example
   * vsc-bp13k5mp4tg8v3z9b****
   */
  sslVpnClientCertId?: string;
  /**
   * @remarks
   * The ID of the SSL server.
   * 
   * @example
   * vss-bp155e9yclsg1xgq4****
   */
  sslVpnServerId?: string;
  /**
   * @remarks
   * The status of the SSL client certificate. Valid values:
   * 
   * *   **expiring-soon**
   * *   **normal**
   * *   **expired**
   * 
   * @example
   * normal
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      caCert: 'CaCert',
      clientCert: 'ClientCert',
      clientConfig: 'ClientConfig',
      clientKey: 'ClientKey',
      createTime: 'CreateTime',
      endTime: 'EndTime',
      name: 'Name',
      regionId: 'RegionId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      sslVpnClientCertId: 'SslVpnClientCertId',
      sslVpnServerId: 'SslVpnServerId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caCert: 'string',
      clientCert: 'string',
      clientConfig: 'string',
      clientKey: 'string',
      createTime: 'number',
      endTime: 'number',
      name: 'string',
      regionId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      sslVpnClientCertId: 'string',
      sslVpnServerId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

