// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopEaisEiResponseBody extends $dara.Model {
  /**
   * @example
   * F23AEEC7-4D98-4657-A104-02692701****
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

