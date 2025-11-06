// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelTaskResponseBody extends $dara.Model {
  /**
   * @example
   * 010E55C9-C64C-4C85-9BB2-7C225ADA6C86
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

