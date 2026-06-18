// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHotlineRecordResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Session ID. This corresponds to the acid in WebSocket after an inbound call.
   * 
   * @example
   * 100365558
   */
  callId?: string;
  /**
   * @remarks
   * Connection ID.
   * 
   * @example
   * 100365548
   */
  connectionId?: string;
  /**
   * @remarks
   * Recording end UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 16128694810
   */
  endTime?: number;
  /**
   * @remarks
   * Recording start UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 16128694110
   */
  startTime?: number;
  /**
   * @remarks
   * Recording file URL.
   * 
   * @example
   * http://aliccrec-shvpc.oss-cn-shanghai.aliyuncs.com
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      connectionId: 'ConnectionId',
      endTime: 'EndTime',
      startTime: 'StartTime',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      connectionId: 'string',
      endTime: 'number',
      startTime: 'number',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotlineRecordResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code. A return value of Success indicates that the request succeeded.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Hotline session information.
   */
  data?: ListHotlineRecordResponseBodyData[];
  /**
   * @remarks
   * Description of the status code.
   * 
   * @example
   * xxxx
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the API call succeeded.
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
      code: 'string',
      data: { 'type': 'array', 'itemType': ListHotlineRecordResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

