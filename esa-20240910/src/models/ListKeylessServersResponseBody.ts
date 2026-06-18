// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKeylessServersResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The CA certificate used to verify the server certificate of the keyless server. This parameter applies only when `Verify` is set to `true`.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----****
   */
  caCertificate?: string;
  /**
   * @remarks
   * The client certificate. This parameter must be provided with `ClientPrivateKey`.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----****
   */
  clientCertificate?: string;
  /**
   * @remarks
   * The client private key. This parameter must be provided with `ClientCertificate`.
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
   * 2024-06-24 07:48:51
   */
  createTime?: string;
  /**
   * @remarks
   * The keyless server host name.
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
   * babab9db65ee5efcca9f3d41d4b5****
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
   * The keyless server port. Valid values: 1 to 65535.
   * 
   * @example
   * 443
   */
  port?: number;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2024-07-20 06:18:42
   */
  updateTime?: string;
  /**
   * @remarks
   * Specifies whether to verify the server certificate of the keyless server. Defaults to false.
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
   * A list of keyless server configurations.
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
   * The total count.
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

