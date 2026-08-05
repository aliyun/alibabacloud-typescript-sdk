// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRtcMPUEventSubResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******3B-0E1A-586A-AC29-742247******
   */
  requestId?: string;
  /**
   * @remarks
   * The subscription ID.
   * 
   * @example
   * Sub-******9799B2C4500******
   */
  subId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      subId: 'SubId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      subId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

