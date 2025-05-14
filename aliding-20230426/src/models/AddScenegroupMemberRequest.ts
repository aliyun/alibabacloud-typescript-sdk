// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddScenegroupMemberRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cidt*****Xa4K10w==
   */
  openConversationId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123xx,224xx
   */
  userIds?: string;
  static names(): { [key: string]: string } {
    return {
      openConversationId: 'OpenConversationId',
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openConversationId: 'string',
      userIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

