// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKeylessServersResponseBodyResult extends $dara.Model {
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
   * 2024-06-24 07:48:51
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
   * babab9db65ee5efcca9f3d41d4b5****
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
   * 2024-07-20 06:18:42
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
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * CB1A380B-09F0-41BB-280B-72F8FD6DA2FE
   */
  requestId?: string;
  result?: ListKeylessServersResponseBodyResult[];
  /**
   * @example
   * 54362329990032
   */
  siteId?: number;
  /**
   * @example
   * example.com
   */
  siteName?: string;
  /**
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

