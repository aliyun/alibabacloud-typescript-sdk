// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnbindOutputBucketResponseBody extends $dara.Model {
  /**
   * @remarks
   * The operation that you want to perform. Set the value to **UnbindOutputBucket**.
   * 
   * @example
   * 4AEA0480-32F4-1656-92B3-F4D4CDE6BBB3
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

