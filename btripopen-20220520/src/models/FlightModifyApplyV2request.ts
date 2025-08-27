// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightModifyApplyV2RequestPassengerSegmentRelations extends $dara.Model {
  /**
   * @example
   * 3243028
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

export class FlightModifyApplyV2Request extends $dara.Model {
  /**
   * @example
   * 72e961f8-930b-43c1-a4ca-18a6f28349c6distributionModifyCacheInfo
   */
  cacheKey?: string;
  /**
   * @example
   * 17816963077
   */
  contactPhone?: string;
  /**
   * @example
   * name
   */
  isvName?: string;
  /**
   * @example
   * fa2fb23a859a4e78b5ddb87a6a23094b_0
   */
  itemId?: string;
  /**
   * @example
   * 1017002195370467138
   */
  orderId?: number;
  /**
   * @example
   * 1017002195370467137
   */
  outOrderId?: string;
  /**
   * @example
   * 1019195786853020
   */
  outSubOrderId?: string;
  passengerSegmentRelations?: FlightModifyApplyV2RequestPassengerSegmentRelations[];
  reason?: string;
  /**
   * @remarks
   * sessionId
   * 
   * @example
   * a2ffebfe733742aab5c491d960ba3d59
   */
  sessionId?: string;
  /**
   * @example
   * true
   */
  voluntary?: boolean;
  static names(): { [key: string]: string } {
    return {
      cacheKey: 'cache_key',
      contactPhone: 'contact_phone',
      isvName: 'isv_name',
      itemId: 'item_id',
      orderId: 'order_id',
      outOrderId: 'out_order_id',
      outSubOrderId: 'out_sub_order_id',
      passengerSegmentRelations: 'passenger_segment_relations',
      reason: 'reason',
      sessionId: 'session_id',
      voluntary: 'voluntary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheKey: 'string',
      contactPhone: 'string',
      isvName: 'string',
      itemId: 'string',
      orderId: 'number',
      outOrderId: 'string',
      outSubOrderId: 'string',
      passengerSegmentRelations: { 'type': 'array', 'itemType': FlightModifyApplyV2RequestPassengerSegmentRelations },
      reason: 'string',
      sessionId: 'string',
      voluntary: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.passengerSegmentRelations)) {
      $dara.Model.validateArray(this.passengerSegmentRelations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

