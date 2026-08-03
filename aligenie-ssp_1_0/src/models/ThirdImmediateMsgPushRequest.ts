// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ThirdImmediateMsgPushRequest extends $dara.Model {
  /**
   * @remarks
   * Business type (FLIGHT: flight, TRAIN: train)
   * 
   * @example
   * FLIGHT
   */
  bizType?: string;
  /**
   * @remarks
   * Change details (JSON-formatted change data)
   * 
   * @example
   * {}
   */
  changeDetail?: string;
  /**
   * @remarks
   * Order ID
   * 
   * @example
   * orderId
   */
  orderId?: string;
  /**
   * @remarks
   * Passenger IDs to change
   * 
   * @example
   * psgIds
   */
  psgIds?: string;
  /**
   * @remarks
   * Request source
   * 
   * @example
   * source
   */
  source?: string;
  /**
   * @remarks
   * change type (TRAIN_ISSUED, FLIGHT_CHANGED)
   * 
   * @example
   * TRAIN_ISSUED
   */
  trafficChangeType?: string;
  /**
   * @remarks
   * change type description (ticket issued, rebooked)
   * 
   * @example
   * 已出票
   */
  trafficChangeTypeDesc?: string;
  /**
   * @remarks
   * Journey IDs to change
   * 
   * @example
   * trafficJourneyIds
   */
  trafficJourneyIds?: string;
  /**
   * @remarks
   * sub-order ID of the changed train request
   * 
   * @example
   * trafficSubOrderIds
   */
  trafficSubOrderIds?: string;
  /**
   * @remarks
   * user ID
   * 
   * @example
   * userId
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      changeDetail: 'ChangeDetail',
      orderId: 'OrderId',
      psgIds: 'PsgIds',
      source: 'Source',
      trafficChangeType: 'TrafficChangeType',
      trafficChangeTypeDesc: 'TrafficChangeTypeDesc',
      trafficJourneyIds: 'TrafficJourneyIds',
      trafficSubOrderIds: 'TrafficSubOrderIds',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      changeDetail: 'string',
      orderId: 'string',
      psgIds: 'string',
      source: 'string',
      trafficChangeType: 'string',
      trafficChangeTypeDesc: 'string',
      trafficJourneyIds: 'string',
      trafficSubOrderIds: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

