// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckUserIsGroupMemberRequest extends $dara.Model {
  /**
   * @example
   * cidB8Pz*******FIWPv2PMA==
   */
  openConversationId?: string;
  static names(): { [key: string]: string } {
    return {
      openConversationId: 'OpenConversationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openConversationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

