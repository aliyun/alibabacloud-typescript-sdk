// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RequestPayDemandResponseBody extends $dara.Model {
  /**
   * @example
   * 497F7522-82B0-4BD4-84FE-AE8749E4C2F9
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

