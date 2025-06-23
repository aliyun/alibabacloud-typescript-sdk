// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDDosAllEventListResponseBodyAttackEvents } from "./DescribeDdosAllEventListResponseBodyAttackEvents";


export class DescribeDDosAllEventListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The DDoS attack events.
   */
  attackEvents?: DescribeDDosAllEventListResponseBodyAttackEvents[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 25D83ED5-28CB-5683-9CF7-AECE521F3005
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of DDoS attack events.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      attackEvents: 'AttackEvents',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackEvents: { 'type': 'array', 'itemType': DescribeDDosAllEventListResponseBodyAttackEvents },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.attackEvents)) {
      $dara.Model.validateArray(this.attackEvents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

