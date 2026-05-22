// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetCertificateRequest extends $dara.Model {
  casId?: number;
  certificate?: string;
  id?: string;
  keyServerId?: string;
  name?: string;
  privateKey?: string;
  region?: string;
  securityToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  siteId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      casId: 'CasId',
      certificate: 'Certificate',
      id: 'Id',
      keyServerId: 'KeyServerId',
      name: 'Name',
      privateKey: 'PrivateKey',
      region: 'Region',
      securityToken: 'SecurityToken',
      siteId: 'SiteId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casId: 'number',
      certificate: 'string',
      id: 'string',
      keyServerId: 'string',
      name: 'string',
      privateKey: 'string',
      region: 'string',
      securityToken: 'string',
      siteId: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

