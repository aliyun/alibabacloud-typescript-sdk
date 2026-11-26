// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHotlineRecordResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The session ID. This is the acid value in the WebSocket after an inbound call.
   * 
   * @example
   * 100365558
   */
  callId?: string;
  /**
   * @remarks
   * The connection ID.
   * 
   * @example
   * 100365548
   */
  connectionId?: string;
  /**
   * @remarks
   * The timestamp when the recording ended. Unit: milliseconds.
   * 
   * @example
   * 16128694810
   */
  endTime?: number;
  /**
   * @remarks
   * The timestamp when the recording started. Unit: milliseconds.
   * 
   * @example
   * 16128694110
   */
  startTime?: number;
  /**
   * @remarks
   * The URL of the recording file.
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
   * The status code. A value of Success indicates that the request is successful.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The hotline session information.
   */
  data?: ListHotlineRecordResponseBodyData[];
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call was successful. Valid values:
   * - **true**: Successful.
   * - **false**: Failed.
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

