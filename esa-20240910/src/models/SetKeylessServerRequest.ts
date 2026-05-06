// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetKeylessServerRequest extends $dara.Model {
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * keyless.example.com
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
   * This parameter is required.
   * 
   * @example
   * example
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 443
   */
  port?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
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

