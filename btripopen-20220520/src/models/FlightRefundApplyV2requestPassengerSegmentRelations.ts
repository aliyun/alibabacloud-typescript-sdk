// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightRefundApplyV2RequestPassengerSegmentRelations extends $dara.Model {
  /**
   * @example
   * 1075004
   */
  passengerId?: string;
  segmentIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      passengerId: 'passenger_id',
      segmentIdList: 'segment_id_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passengerId: 'string',
      segmentIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.segmentIdList)) {
      $dara.Model.validateArray(this.segmentIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

