// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnterpriseUninvitedAdminInviteJoinEnterpriseRequest extends $dara.Model {
  ecId?: string;
  encryptTicket?: string;
  inviteePk?: string;
  leId?: string;
  nbId?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      ecId: 'EcId',
      encryptTicket: 'EncryptTicket',
      inviteePk: 'InviteePk',
      leId: 'LeId',
      nbId: 'NbId',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecId: 'string',
      encryptTicket: 'string',
      inviteePk: 'string',
      leId: 'string',
      nbId: 'string',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

