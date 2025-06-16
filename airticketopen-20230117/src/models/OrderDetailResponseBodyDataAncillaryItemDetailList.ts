// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OrderDetailResponseBodyDataAncillaryItemDetailListAncillary } from "./OrderDetailResponseBodyDataAncillaryItemDetailListAncillary";
import { OrderDetailResponseBodyDataAncillaryItemDetailListPassenger } from "./OrderDetailResponseBodyDataAncillaryItemDetailListPassenger";


export class OrderDetailResponseBodyDataAncillaryItemDetailList extends $dara.Model {
  /**
   * @remarks
   * the ancillary buyer booked
   */
  ancillary?: OrderDetailResponseBodyDataAncillaryItemDetailListAncillary;
  /**
   * @remarks
   * passenger
   */
  passenger?: OrderDetailResponseBodyDataAncillaryItemDetailListPassenger;
  /**
   * @remarks
   * segment ID list, these segments share the same ancillary
   */
  segmentIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      ancillary: 'ancillary',
      passenger: 'passenger',
      segmentIdList: 'segment_id_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ancillary: OrderDetailResponseBodyDataAncillaryItemDetailListAncillary,
      passenger: OrderDetailResponseBodyDataAncillaryItemDetailListPassenger,
      segmentIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.ancillary && typeof (this.ancillary as any).validate === 'function') {
      (this.ancillary as any).validate();
    }
    if(this.passenger && typeof (this.passenger as any).validate === 'function') {
      (this.passenger as any).validate();
    }
    if(Array.isArray(this.segmentIdList)) {
      $dara.Model.validateArray(this.segmentIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

