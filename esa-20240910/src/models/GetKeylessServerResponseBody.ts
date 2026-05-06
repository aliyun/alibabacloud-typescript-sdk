// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKeylessServerResponseBody extends $dara.Model {
  /**
   * @example
   * -----BEGIN CERTIFICATE-----****
   */
  caCertificate?: string;
  /**
   * @example
   * -----BEGIN CERTIFICATE-----****
   */
  clientCertificate?: string;
  /**
   * @example
   * -----BEGIN RSA PRIVATE KEY-----****
   */
  clientPrivateKey?: string;
  /**
   * @example
   * 2024-03-11T01:23:21Z
   */
  createTime?: string;
  /**
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
   * @example
   * example
   */
  name?: string;
  /**
   * @example
   * 443
   */
  port?: number;
  /**
   * @example
   * 3558df77-8a7a-4060-a900-2d794940****
   */
  requestId?: string;
  /**
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @example
   * example.com
   */
  siteName?: string;
  /**
   * @example
   * 2025-03-13T02:13:28Z
   */
  updateTime?: string;
  /**
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

