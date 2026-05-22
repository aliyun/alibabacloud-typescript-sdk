// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetKeylessServerRequest extends $dara.Model {
  caCertificate?: string;
  clientCertificate?: string;
  clientPrivateKey?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  host?: string;
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  port?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  siteId?: number;
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

