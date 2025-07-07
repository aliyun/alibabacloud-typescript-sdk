// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnterpriseAccountUpdateAccountAliasRequest extends $dara.Model {
  alias?: string;
  appName?: string;
  encryptTicket?: string;
  orientedEcId?: string;
  orientedLeId?: string;
  orientedNbId?: string;
  pk?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      appName: 'AppName',
      encryptTicket: 'EncryptTicket',
      orientedEcId: 'OrientedEcId',
      orientedLeId: 'OrientedLeId',
      orientedNbId: 'OrientedNbId',
      pk: 'Pk',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      appName: 'string',
      encryptTicket: 'string',
      orientedEcId: 'string',
      orientedLeId: 'string',
      orientedNbId: 'string',
      pk: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

