// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRtcMPUEventSubRecordResponseBodyLogs extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * yourAppId
   */
  appId?: string;
  /**
   * @remarks
   * The callback URL.
   * 
   * @example
   * http://testcallback***.com/callback
   */
  callbackUrl?: string;
  /**
   * @remarks
   * The callback duration. Unit: milliseconds.
   * 
   * @example
   * 22
   */
  cost?: number;
  /**
   * @remarks
   * For more information about the callback, see [CreateRtcMPUEventSub](https://help.aliyun.com/document_detail/2804583.html).
   * 
   * @example
   * {\\"EventType\\":1,\\"MsgId\\":\\"42bba8b5-94ab-468c-9dae-9b501dd6c***\\",\\"AppId\\":\\"rtcdev\\",\\"SubId\\":\\"Sub-9799B2C45009799B2C4***\\",\\"TaskId\\":\\"mpucallbacktest\\",\\"CallbackTs\\":1712656430***,\\"Payload\\":{\\"DstUrl\\":\\"rtmp://domain/app/stream?auth\\",\\"EventTs\\":1712656430***,\\"EventCode\\":1,\\"ErrorCode\\":0,\\"ErrorMessage\\":\\"\\"}}
   */
  data?: string;
  /**
   * @remarks
   * The HTTP status code. 200 indicates that the callback is successful.
   * 
   * @example
   * 200
   */
  HTTPCode?: string;
  /**
   * @remarks
   * The ID of the callback record.
   * 
   * @example
   * 42bba8b5-********-9b501dd6cb6e
   */
  msgId?: string;
  /**
   * @remarks
   * The ID of the subscription.
   * 
   * @example
   * Sub-******9799B2C4500******
   */
  subId?: string;
  /**
   * @remarks
   * The time when the callback was invoked. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 1970-01-01T00:00:00Z
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      callbackUrl: 'CallbackUrl',
      cost: 'Cost',
      data: 'Data',
      HTTPCode: 'HTTPCode',
      msgId: 'MsgId',
      subId: 'SubId',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      callbackUrl: 'string',
      cost: 'number',
      data: 'string',
      HTTPCode: 'string',
      msgId: 'string',
      subId: 'string',
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

export class ListRtcMPUEventSubRecordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * Indicates whether the current page is followed by a page.
   * 
   * @example
   * false
   */
  hasMore?: boolean;
  /**
   * @remarks
   * The callback records.
   */
  logs?: ListRtcMPUEventSubRecordResponseBodyLogs[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ******3B-0E1A-586A-AC29-742247******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      hasMore: 'HasMore',
      logs: 'Logs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      hasMore: 'boolean',
      logs: { 'type': 'array', 'itemType': ListRtcMPUEventSubRecordResponseBodyLogs },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.logs)) {
      $dara.Model.validateArray(this.logs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

