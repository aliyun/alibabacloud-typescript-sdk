// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnterpriseAccountSeparateEaRequest extends $dara.Model {
  encryptTicket?: string;
  orientedEcId?: string;
  orientedLeId?: string;
  orientedNbId?: string;
  pk?: string;
  static names(): { [key: string]: string } {
    return {
      encryptTicket: 'EncryptTicket',
      orientedEcId: 'OrientedEcId',
      orientedLeId: 'OrientedLeId',
      orientedNbId: 'OrientedNbId',
      pk: 'Pk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptTicket: 'string',
      orientedEcId: 'string',
      orientedLeId: 'string',
      orientedNbId: 'string',
      pk: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

