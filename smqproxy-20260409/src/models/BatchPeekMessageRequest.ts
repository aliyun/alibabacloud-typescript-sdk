// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchPeekMessageRequest extends $dara.Model {
  /**
   * @example
   * 16
   */
  numOfMessages?: number;
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

