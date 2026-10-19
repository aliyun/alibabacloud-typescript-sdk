// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchPeekMessageRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of messages to peek at in this BatchPeekMessage request.
   * 
   * @example
   * 16
   */
  numOfMessages?: number;
  /**
   * @remarks
   * Indicates that this request only peeks at messages at the top of the queue without changing the message status. Fixed value: true.
   */
  peekonly?: boolean;
  static names(): { [key: string]: string } {
    return {
      numOfMessages: 'numOfMessages',
      peekonly: 'peekonly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      numOfMessages: 'number',
      peekonly: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

