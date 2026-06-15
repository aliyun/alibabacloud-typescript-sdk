// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CompleteContinuouslyPushRequest extends $dara.Model {
  /**
   * @remarks
   * The AppKey value.
   * 
   * This parameter is required.
   * 
   * @example
   * 23267207
   */
  appKey?: number;
  /**
   * @remarks
   * The message ID.
   * 
   * This ID is returned after you call the Push operation and set Target to TBD. It identifies a message saved in the push system.
   * 
   * This parameter is required.
   * 
   * @example
   * 500131
   */
  messageId?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      messageId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

