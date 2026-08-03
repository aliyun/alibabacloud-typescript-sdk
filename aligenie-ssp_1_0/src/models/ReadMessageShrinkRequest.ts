// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadMessageShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Message ID
   * 
   * @example
   * 12345
   */
  messageId?: number;
  /**
   * @remarks
   * User information
   * 
   * This parameter is required.
   */
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      messageId: 'MessageId',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageId: 'number',
      userInfoShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

