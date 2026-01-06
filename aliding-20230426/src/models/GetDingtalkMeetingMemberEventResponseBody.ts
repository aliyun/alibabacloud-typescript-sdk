// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDingtalkMeetingMemberEventResponseBodyData extends $dara.Model {
  /**
   * @example
   * event123
   */
  eventId?: string;
  /**
   * @example
   * join
   */
  eventName?: string;
  /**
   * @example
   * member
   */
  eventType?: string;
  /**
   * @example
   * 1638360000000
   */
  ts?: number;
  static names(): { [key: string]: string } {
    return {
      eventId: 'eventId',
      eventName: 'eventName',
      eventType: 'eventType',
      ts: 'ts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      eventName: 'string',
      eventType: 'string',
      ts: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDingtalkMeetingMemberEventResponseBody extends $dara.Model {
  /**
   * @example
   * []
   */
  data?: GetDingtalkMeetingMemberEventResponseBodyData[];
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  vendorRequestId?: string;
  /**
   * @example
   * dingtalk
   */
  vendorType?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetDingtalkMeetingMemberEventResponseBodyData },
      requestId: 'string',
      vendorRequestId: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

