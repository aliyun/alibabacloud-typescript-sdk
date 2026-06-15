// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelPushRequest extends $dara.Model {
  /**
   * @remarks
   * Your AppKey.
   * 
   * This parameter is required.
   * 
   * @example
   * 23267207
   */
  appKey?: number;
  /**
   * @remarks
   * The message ID of the push task to cancel.
   * 
   * This parameter is required.
   * 
   * @example
   * 501029
   */
  messageId?: number;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      messageId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

