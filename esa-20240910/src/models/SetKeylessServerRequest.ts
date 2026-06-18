// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetKeylessServerRequest extends $dara.Model {
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
   * The client certificate. This parameter must be used with the `ClientPrivateKey` parameter.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----****
   */
  clientCertificate?: string;
  /**
   * @remarks
   * The client private key. This parameter must be used with the `ClientCertificate` parameter.
   * 
   * @example
   * -----BEGIN RSA PRIVATE KEY-----****
   */
  clientPrivateKey?: string;
  /**
   * @remarks
   * The hostname of the keyless server. The value can be a domain name or an IP address.
   * 
   * This parameter is required.
   * 
   * @example
   * keyless.example.com
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
   * This parameter is required.
   * 
   * @example
   * example
   */
  name?: string;
  /**
   * @remarks
   * The keyless server port.
   * 
   * This parameter is required.
   * 
   * @example
   * 443
   */
  port?: number;
  /**
   * @remarks
   * The site ID. You can obtain this ID by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * Specifies whether to verify the server certificate of the keyless server. Default: false.
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
      host: 'Host',
      id: 'Id',
      name: 'Name',
      port: 'Port',
      siteId: 'SiteId',
      verify: 'Verify',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caCertificate: 'string',
      clientCertificate: 'string',
      clientPrivateKey: 'string',
      host: 'string',
      id: 'string',
      name: 'string',
      port: 'number',
      siteId: 'number',
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

