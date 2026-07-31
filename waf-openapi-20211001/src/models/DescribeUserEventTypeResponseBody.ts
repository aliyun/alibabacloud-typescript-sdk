// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserEventTypeResponseBodyEvent extends $dara.Model {
  /**
   * @remarks
   * The event code.
   * 
   * @example
   * Event_LoginCollision
   */
  eventCode?: string;
  /**
   * @remarks
   * The number of events.
   * 
   * @example
   * 0
   */
  eventCount?: number;
  /**
   * @remarks
   * The parent event type.
   * 
   * @example
   * EventType_Account
   */
  eventParentType?: string;
  /**
   * @remarks
   * The event type.
   * 
   * > You can call [DescribeApisecRules](https://help.aliyun.com/document_detail/2859155.html) to obtain the supported event types.
   * 
   * @example
   * Event_LoginCollision
   */
  eventType?: string;
  static names(): { [key: string]: string } {
    return {
      eventCode: 'EventCode',
      eventCount: 'EventCount',
      eventParentType: 'EventParentType',
      eventType: 'EventType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventCode: 'string',
      eventCount: 'number',
      eventParentType: 'string',
      eventType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserEventTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of security event types and statistics.
   */
  event?: DescribeUserEventTypeResponseBodyEvent[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 177BA739-6512-5470-98C6-E***0BAA3D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      event: 'Event',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      event: { 'type': 'array', 'itemType': DescribeUserEventTypeResponseBodyEvent },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.event)) {
      $dara.Model.validateArray(this.event);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

