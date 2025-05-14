// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVideoConferenceShrinkRequest extends $dara.Model {
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
  inviteUserIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      confTitle: 'ConfTitle',
      inviteCaller: 'InviteCaller',
      inviteUserIdsShrink: 'InviteUserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confTitle: 'string',
      inviteCaller: 'boolean',
      inviteUserIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

