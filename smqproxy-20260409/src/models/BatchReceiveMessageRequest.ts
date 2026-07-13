// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchReceiveMessageRequest extends $dara.Model {
  /**
   * @example
   * 10
   */
  numOfMessages?: number;
  /**
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

