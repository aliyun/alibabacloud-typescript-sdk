// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnterpriseAccountUpdateAccountBizRoleGrantRequest extends $dara.Model {
  bizRoleCodeListJson?: string;
  encryptTicket?: string;
  orientedEcId?: string;
  orientedLeId?: string;
  orientedNbId?: string;
  pk?: string;
  static names(): { [key: string]: string } {
    return {
      bizRoleCodeListJson: 'BizRoleCodeListJson',
      encryptTicket: 'EncryptTicket',
      orientedEcId: 'OrientedEcId',
      orientedLeId: 'OrientedLeId',
      orientedNbId: 'OrientedNbId',
      pk: 'Pk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizRoleCodeListJson: 'string',
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

