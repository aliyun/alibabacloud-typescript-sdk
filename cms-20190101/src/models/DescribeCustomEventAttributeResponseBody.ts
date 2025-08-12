// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomEventAttributeResponseBodyCustomEventsCustomEvent extends $dara.Model {
  /**
   * @remarks
   * The content of the event.
   * 
   * @example
   * requestId:4975A6F3-19AC-4C01-BAD2-034DA07FEBB5, info:{"autoPay":false,"autoUseCoupon":false,"bid":"26842","buyerId":118935342242****,"commodities":[{"aliyunProduceCode":"cms","chargeType":"PREPAY","commodityCode":"cms_call_num","components":[{"componentCode":"phone_count","instanceProperty":[{"code":"phone_count","value":"500"}],"moduleAttrStatus":1}],"duration":6,"free":false,"orderParams":{"aliyunProduceCode":"cms"},"orderType":"BUY","prePayPostCharge":false,"pricingCycle":"Month","quantity":1,"refundSpecCode":"","renewChange":false,"specCode":"cms_call_num","specUpdate":false,"syncToSubscription":false,"upgradeInquireFinancialValue":true}],"fromApp":"commonbuy","orderParams":{"priceCheck":"true"},"payerId":118935342242****,"requestId":"ade3ad32-f58b-45d7-add4-ac542be3d8ec","skipChannel":false,"userId":118935342242****}
   */
  content?: string;
  /**
   * @remarks
   * The ID of the application group.
   * 
   * @example
   * 12345
   */
  groupId?: string;
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * 123
   */
  id?: string;
  /**
   * @remarks
   * The event name.
   * 
   * @example
   * BABEL_CHECK
   */
  name?: string;
  /**
   * @remarks
   * The time when the event occurred.
   * 
   * This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1552199984000
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      groupId: 'GroupId',
      id: 'Id',
      name: 'Name',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      groupId: 'string',
      id: 'string',
      name: 'string',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomEventAttributeResponseBodyCustomEvents extends $dara.Model {
  customEvent?: DescribeCustomEventAttributeResponseBodyCustomEventsCustomEvent[];
  static names(): { [key: string]: string } {
    return {
      customEvent: 'CustomEvent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customEvent: { 'type': 'array', 'itemType': DescribeCustomEventAttributeResponseBodyCustomEventsCustomEvent },
    };
  }

  validate() {
    if(Array.isArray(this.customEvent)) {
      $dara.Model.validateArray(this.customEvent);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomEventAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * >  The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The event details.
   */
  customEvents?: DescribeCustomEventAttributeResponseBodyCustomEvents;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * userId:173651113438**** and name:"BABEL_CHECK"
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 60912C8D-B340-4253-ADE7-61ACDFD25CFC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values: Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      customEvents: 'CustomEvents',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      customEvents: DescribeCustomEventAttributeResponseBodyCustomEvents,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    if(this.customEvents && typeof (this.customEvents as any).validate === 'function') {
      (this.customEvents as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

