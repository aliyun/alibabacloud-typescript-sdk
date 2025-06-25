// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceStoreInfoResponseBody extends $dara.Model {
  /**
   * @example
   * 102400
   */
  max?: number;
  /**
   * @example
   * 5EAB922E-F476-5DFA-9290-313C608E724B
   */
  requestId?: string;
  /**
   * @example
   * 1024
   */
  usage?: number;
  static names(): { [key: string]: string } {
    return {
      max: 'Max',
      requestId: 'RequestId',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      max: 'number',
      requestId: 'string',
      usage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

