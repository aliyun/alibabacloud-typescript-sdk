// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFaqResponseBody extends $dara.Model {
  /**
   * @example
   * 736994BD-AA35-4742-88C9-E64BE4BAA14B
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

