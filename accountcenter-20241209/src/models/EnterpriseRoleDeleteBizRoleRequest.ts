// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnterpriseRoleDeleteBizRoleRequest extends $dara.Model {
  bizRoleCode?: string;
  encryptTicket?: string;
  orientedEcId?: string;
  orientedLeId?: string;
  orientedNbId?: string;
  static names(): { [key: string]: string } {
    return {
      bizRoleCode: 'BizRoleCode',
      encryptTicket: 'EncryptTicket',
      orientedEcId: 'OrientedEcId',
      orientedLeId: 'OrientedLeId',
      orientedNbId: 'OrientedNbId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizRoleCode: 'string',
      encryptTicket: 'string',
      orientedEcId: 'string',
      orientedLeId: 'string',
      orientedNbId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

