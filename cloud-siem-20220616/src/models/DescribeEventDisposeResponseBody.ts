// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventDisposeResponseBodyDataReceiverInfo extends $dara.Model {
  /**
   * @remarks
   * The channel to send the notification. Valid values:
   * 
   * - message: text message
   * 
   * - mail: email
   * 
   * @example
   * message
   */
  channel?: string;
  /**
   * @remarks
   * The time when the record was created.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the record was last modified.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  gmtModified?: string;
  /**
   * @remarks
   * The record ID of the recipient for the event handling result.
   * 
   * @example
   * 123
   */
  id?: number;
  /**
   * @remarks
   * The globally unique UUID of the event.
   * 
   * @example
   * 85ea4241-798f-4684-a876-65d4f0c3****
   */
  incidentUuid?: string;
  /**
   * @remarks
   * The title of the message.
   * 
   * @example
   * siem event dealed message
   */
  messageTitle?: string;
  /**
   * @remarks
   * The contact information of the recipient.
   * 
   * @example
   * 138xxxxxx
   */
  receiver?: string;
  /**
   * @remarks
   * The sending status of the notification. Valid values:
   * 
   * - 0: not sent
   * 
   * - 1: sent
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      incidentUuid: 'IncidentUuid',
      messageTitle: 'MessageTitle',
      receiver: 'Receiver',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      incidentUuid: 'string',
      messageTitle: 'string',
      receiver: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventDisposeResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The JSON object of the event handling configuration.
   * 
   * @example
   * { playbookName: "使用安全组封禁入方向IP", sophonTaskId: "400442a5-4f98-45ed-97db-5ab117eb0b8f", … }
   */
  eventDispose?: any[];
  /**
   * @remarks
   * The JSON object of the alert recipient configuration.
   */
  receiverInfo?: DescribeEventDisposeResponseBodyDataReceiverInfo;
  /**
   * @remarks
   * The remarks on the event.
   * 
   * @example
   * dealed
   */
  remark?: string;
  /**
   * @remarks
   * The status of the event. Valid values:
   * 
   * - 0: unhandled
   * 
   * - 1: handling
   * 
   * - 5: failed
   * 
   * - 10: handled
   * 
   * @example
   * 0
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      eventDispose: 'EventDispose',
      receiverInfo: 'ReceiverInfo',
      remark: 'Remark',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventDispose: { 'type': 'array', 'itemType': 'any' },
      receiverInfo: DescribeEventDisposeResponseBodyDataReceiverInfo,
      remark: 'string',
      status: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.eventDispose)) {
      $dara.Model.validateArray(this.eventDispose);
    }
    if(this.receiverInfo && typeof (this.receiverInfo as any).validate === 'function') {
      (this.receiverInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventDisposeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code of the request.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * 123456
   */
  data?: DescribeEventDisposeResponseBodyData;
  /**
   * @remarks
   * The message returned for the request.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - true
   * 
   * - false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeEventDisposeResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

