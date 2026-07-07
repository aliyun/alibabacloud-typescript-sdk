// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKeylessServersResponseBodyResult extends $dara.Model {
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
   * babab9db65ee5efcca9f3d41d4b5****
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
   * The Keyless server port. Valid values: 1 to 65535.
   * 
   * @example
   * 443
   */
  port?: number;
  /**
   * @remarks
   * The update time. The time follows the format YYYY-MM-DDTHH:MM:SS+08:00 in the UTC/GMT time zone.
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

export class ListKeylessServersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CB1A380B-09F0-41BB-280B-72F8FD6DA2FE
   */
  requestId?: string;
  /**
   * @remarks
   * The result array.
   */
  result?: ListKeylessServersResponseBodyResult[];
  /**
   * @remarks
   * The site ID.
   * 
   * @example
   * 54362329990032
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
   * The total number of records.
   * 
   * @example
   * 90
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      result: 'Result',
      siteId: 'SiteId',
      siteName: 'SiteName',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListKeylessServersResponseBodyResult },
      siteId: 'number',
      siteName: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

