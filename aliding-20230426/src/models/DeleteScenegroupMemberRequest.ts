// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteScenegroupMemberRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cidvkLfbOyIiSYqjgvAiWwFow==
   */
  openConversationId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123xxx,223xxx
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

