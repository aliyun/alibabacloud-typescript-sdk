// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResendEmailRequest extends $dara.Model {
  /**
   * @remarks
   * Invitation ID, from interface InviteSubAccount </br>
   * Note: This field type is Long, which may result in precision loss in serialization/deserialization process. Please ensure the value does not exceed 9007199254740991.
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

