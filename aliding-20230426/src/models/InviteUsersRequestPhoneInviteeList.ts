// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InviteUsersRequestPhoneInviteeList extends $dara.Model {
  inviteClient?: boolean;
  nick?: string;
  phoneNumber?: string;
  statusCode?: string;
  static names(): { [key: string]: string } {
    return {
      inviteClient: 'InviteClient',
      nick: 'Nick',
      phoneNumber: 'PhoneNumber',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inviteClient: 'boolean',
      nick: 'string',
      phoneNumber: 'string',
      statusCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

