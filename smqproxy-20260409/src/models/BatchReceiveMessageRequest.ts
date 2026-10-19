// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchReceiveMessageRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of messages to receive in this request.
   * 
   * @example
   * 10
   */
  numOfMessages?: number;
  /**
   * @remarks
   * The maximum polling wait time for this request, in seconds. Set to 0 for an immediate return.
   * 
   * @example
   * 0
   */
  waitseconds?: number;
  static names(): { [key: string]: string } {
    return {
      numOfMessages: 'numOfMessages',
      waitseconds: 'waitseconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      numOfMessages: 'number',
      waitseconds: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

