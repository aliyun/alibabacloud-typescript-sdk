// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSlotsResponseBodySlots } from "./DescribeSlotsResponseBodySlots";


export class DescribeSlotsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 76AF0609-4195-5DFC-BC78-3AD76FF872BB
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the replication slot.
   */
  slots?: DescribeSlotsResponseBodySlots[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      slots: 'Slots',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      slots: { 'type': 'array', 'itemType': DescribeSlotsResponseBodySlots },
    };
  }

  validate() {
    if(Array.isArray(this.slots)) {
      $dara.Model.validateArray(this.slots);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

