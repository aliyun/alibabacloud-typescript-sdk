// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifySendMessageRequest extends $dara.Model {
  /**
   * @remarks
   * The message body.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The message key.
   * 
   * @example
   * xx
   */
  messageKey?: string;
  /**
   * @remarks
   * The message tag.
   * 
   * @example
   * xx
   */
  messageTag?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'message',
      messageKey: 'messageKey',
      messageTag: 'messageTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      messageKey: 'string',
      messageTag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

