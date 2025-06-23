// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSlaEventListResponseBodySlaEvent } from "./DescribeSlaEventListResponseBodySlaEvent";


export class DescribeSlaEventListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  /**
   * @remarks
   * The destination rate limit events.
   */
  slaEvent?: DescribeSlaEventListResponseBodySlaEvent[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      slaEvent: 'SlaEvent',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      slaEvent: { 'type': 'array', 'itemType': DescribeSlaEventListResponseBodySlaEvent },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.slaEvent)) {
      $dara.Model.validateArray(this.slaEvent);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

