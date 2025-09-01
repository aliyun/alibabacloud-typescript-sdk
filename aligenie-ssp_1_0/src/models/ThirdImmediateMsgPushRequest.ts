// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ThirdImmediateMsgPushRequest extends $dara.Model {
  /**
   * @example
   * FLIGHT
   */
  bizType?: string;
  /**
   * @example
   * changeDetail
   */
  changeDetail?: string;
  /**
   * @example
   * orderId
   */
  orderId?: string;
  /**
   * @example
   * psgIds
   */
  psgIds?: string;
  /**
   * @example
   * source
   */
  source?: string;
  /**
   * @example
   * trafficChangeType
   */
  trafficChangeType?: string;
  /**
   * @example
   * trafficChangeTypeDesc
   */
  trafficChangeTypeDesc?: string;
  /**
   * @example
   * trafficJourneyIds
   */
  trafficJourneyIds?: string;
  /**
   * @example
   * trafficSubOrderIds
   */
  trafficSubOrderIds?: string;
  /**
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

