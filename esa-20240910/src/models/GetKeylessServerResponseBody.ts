// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKeylessServerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The CA certificate used to verify the Keyless server certificate. This parameter takes effect only when Verify is set to true.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----****
   */
  caCertificate?: string;
  /**
   * @remarks
   * The client certificate. This parameter must be used together with the client private key.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----****
   */
  clientCertificate?: string;
  /**
   * @remarks
   * The client private key. This parameter must be used together with the client certificate.
   * 
   * @example
   * -----BEGIN RSA PRIVATE KEY-----****
   */
  clientPrivateKey?: string;
  /**
   * @remarks
   * The creation time. The time follows the format YYYY-MM-DDTHH:MM:SS+08:00 in the UTC/GMT time zone.
   * 
   * @example
   * 2025-07-18T20:33:31+08:00
   */
  createTime?: string;
  /**
   * @remarks
   * The Keyless server hostname.
   * 
   * @example
   * example.com
   */
  host?: string;
  /**
   * @remarks
   * Keyless server ID。
   * 
   * @example
   * baba39055622c008b90285a8838e****
   */
  id?: string;
  /**
   * @remarks
   * The Keyless server name.
   * 
   * @example
   * example
   */
  name?: string;
  /**
   * @remarks
   * The Keyless server port. Valid values: **1** to **65535**.
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
   * The modification time. The time follows the format YYYY-MM-DDTHH:MM:SS+08:00 in the UTC/GMT time zone.
   * 
   * @example
   * 2025-07-18T20:33:31+08:00
   */
  updateTime?: string;
  /**
   * @remarks
   * Indicates whether to verify the Keyless server certificate. Default value: false.
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

