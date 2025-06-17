// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeFCTriggerResponseBodyFCTrigger } from "./DescribeFctriggerResponseBodyFctrigger";


export class DescribeFCTriggerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Function Compute trigger that you want to query.
   */
  FCTrigger?: DescribeFCTriggerResponseBodyFCTrigger;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EC046C5D-8CB4-4B6B-B7F8-B335E51EF90E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      FCTrigger: 'FCTrigger',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      FCTrigger: DescribeFCTriggerResponseBodyFCTrigger,
      requestId: 'string',
    };
  }

  validate() {
    if(this.FCTrigger && typeof (this.FCTrigger as any).validate === 'function') {
      (this.FCTrigger as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

