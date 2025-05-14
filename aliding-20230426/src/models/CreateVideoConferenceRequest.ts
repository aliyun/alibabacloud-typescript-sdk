// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVideoConferenceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  confTitle?: string;
  /**
   * @example
   * true
   */
  inviteCaller?: boolean;
  inviteUserIds?: string[];
  static names(): { [key: string]: string } {
    return {
      confTitle: 'ConfTitle',
      inviteCaller: 'InviteCaller',
      inviteUserIds: 'InviteUserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confTitle: 'string',
      inviteCaller: 'boolean',
      inviteUserIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.inviteUserIds)) {
      $dara.Model.validateArray(this.inviteUserIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

