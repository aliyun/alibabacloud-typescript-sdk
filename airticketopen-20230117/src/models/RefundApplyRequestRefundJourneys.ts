// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RefundApplyRequestRefundJourneysSegmentList } from "./RefundApplyRequestRefundJourneysSegmentList";


export class RefundApplyRequestRefundJourneys extends $dara.Model {
  /**
   * @remarks
   * segment list
   * 
   * This parameter is required.
   */
  segmentList?: RefundApplyRequestRefundJourneysSegmentList[];
  static names(): { [key: string]: string } {
    return {
      segmentList: 'segment_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      segmentList: { 'type': 'array', 'itemType': RefundApplyRequestRefundJourneysSegmentList },
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

