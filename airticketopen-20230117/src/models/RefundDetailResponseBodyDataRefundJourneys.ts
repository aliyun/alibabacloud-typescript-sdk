// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RefundDetailResponseBodyDataRefundJourneysSegmentList } from "./RefundDetailResponseBodyDataRefundJourneysSegmentList";


export class RefundDetailResponseBodyDataRefundJourneys extends $dara.Model {
  /**
   * @remarks
   * segment list
   */
  segmentList?: RefundDetailResponseBodyDataRefundJourneysSegmentList[];
  /**
   * @remarks
   * number of transfer
   * 
   * @example
   * 0
   */
  transferCount?: number;
  static names(): { [key: string]: string } {
    return {
      segmentList: 'segment_list',
      transferCount: 'transfer_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      segmentList: { 'type': 'array', 'itemType': RefundDetailResponseBodyDataRefundJourneysSegmentList },
      transferCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.segmentList)) {
      $dara.Model.validateArray(this.segmentList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

