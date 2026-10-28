// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResendEmailRequest extends $dara.Model {
  /**
   * @remarks
   * The invitation ID, obtained from the InviteSbuAccount operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 176
   */
  inviteId?: number;
  static names(): { [key: string]: string } {
    return {
      inviteId: 'InviteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inviteId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

