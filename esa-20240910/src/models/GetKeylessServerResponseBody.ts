// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKeylessServerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The CA certificate used to verify the server certificate of the keyless server. This parameter applies only when Verify is set to true.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----****
   */
  caCertificate?: string;
  /**
   * @remarks
   * The client certificate. Must be provided as a pair with the client private key.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----****
   */
  clientCertificate?: string;
  /**
   * @remarks
   * The client private key. Must be provided as a pair with the client certificate.
   * 
   * @example
   * -----BEGIN RSA PRIVATE KEY-----****
   */
  clientPrivateKey?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-03-11T01:23:21Z
   */
  createTime?: string;
  /**
   * @remarks
   * The hostname of the keyless server.
   * 
   * @example
   * example.com
   */
  host?: string;
  /**
   * @remarks
   * The keyless server ID.
   * 
   * @example
   * baba39055622c008b90285a8838e****
   */
  id?: string;
  /**
   * @remarks
   * The keyless server name.
   * 
   * @example
   * example
   */
  name?: string;
  /**
   * @remarks
   * The port of the keyless server. Valid values: **1** to **65535**.
   * 
   * @example
   * 443
   */
  port?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3558df77-8a7a-4060-a900-2d794940****
   */
  requestId?: string;
  /**
   * @remarks
   * The site ID.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * The site name.
   * 
   * @example
   * example.com
   */
  siteName?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2025-03-13T02:13:28Z
   */
  updateTime?: string;
  /**
   * @remarks
   * Indicates whether to verify the server certificate of the keyless server. The default value is false.
   * 
   * @example
   * true
   */
  verify?: boolean;
  static names(): { [key: string]: string } {
    return {
      caCertificate: 'CaCertificate',
      clientCertificate: 'ClientCertificate',
      clientPrivateKey: 'ClientPrivateKey',
      createTime: 'CreateTime',
      host: 'Host',
      id: 'Id',
      name: 'Name',
      port: 'Port',
      requestId: 'RequestId',
      siteId: 'SiteId',
      siteName: 'SiteName',
      updateTime: 'UpdateTime',
      verify: 'Verify',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caCertificate: 'string',
      clientCertificate: 'string',
      clientPrivateKey: 'string',
      createTime: 'string',
      host: 'string',
      id: 'string',
      name: 'string',
      port: 'number',
      requestId: 'string',
      siteId: 'number',
      siteName: 'string',
      updateTime: 'string',
      verify: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

