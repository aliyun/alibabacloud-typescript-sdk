// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CompleteResourceTokenAuthResponseBody extends $dara.Model {
  /**
   * @example
   * 6A3344F3-BFA1-5BCB-B5F5-17572C0D5586
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

