// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveRecordNotifyRecordsResponseBodyCallbackList extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the live stream belongs.
   * 
   * @example
   * liveApp****
   */
  appName?: string;
  /**
   * @remarks
   * The description of the result. A value of success indicates that the request is successful. If the request fails, an error message is returned.
   * 
   * @example
   * success
   */
  description?: string;
  /**
   * @remarks
   * The main streaming domain.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The callback content.
   * 
   * @example
   * July 26,  16:14{"domain":"al.xxxx.com","stream":"livestream01","pull _stream_result":true,"cdn":"al"}
   */
  notifyContent?: string;
  notifyHeader?: string;
  notifyResponse?: string;
  /**
   * @remarks
   * The callback result. Valid values:
   * 
   * *   success
   * *   failed
   * 
   * @example
   * success
   */
  notifyResult?: string;
  /**
   * @remarks
   * The time when the callback was returned. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-10-19T19:09:28Z
   */
  notifyTime?: string;
  /**
   * @remarks
   * The callback type. Valid values:
   * 
   * *   file_created: The recording file is created.
   * *   record_error: A recording error occurs.
   * *   record_started: Recording is started.
   * *   record_paused: Recording is paused.
   * *   record_resumed: Recording is resumed.
   * *   record_force_transcode_fail: The recording task fails to trigger transcoding.
   * *   transformat_error: An error occurs when the live stream is parsed.
   * 
   * @example
   * record_started
   */
  notifyType?: string;
  /**
   * @remarks
   * The recording callback URL.
   * 
   * @example
   * http://learn.aliyundoc.com/examplecallback.action
   */
  notifyUrl?: string;
  /**
   * @remarks
   * The name of the live stream.
   * 
   * @example
   * liveStream****
   */
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      description: 'Description',
      domainName: 'DomainName',
      notifyContent: 'NotifyContent',
      notifyHeader: 'NotifyHeader',
      notifyResponse: 'NotifyResponse',
      notifyResult: 'NotifyResult',
      notifyTime: 'NotifyTime',
      notifyType: 'NotifyType',
      notifyUrl: 'NotifyUrl',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      description: 'string',
      domainName: 'string',
      notifyContent: 'string',
      notifyHeader: 'string',
      notifyResponse: 'string',
      notifyResult: 'string',
      notifyTime: 'string',
      notifyType: 'string',
      notifyUrl: 'string',
      streamName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveRecordNotifyRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The callback records.
   */
  callbackList?: DescribeLiveRecordNotifyRecordsResponseBodyCallbackList[];
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * ok
   */
  msg?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 180FA0D2-1A02-5158-A36B-115DBF7B218D
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries that meet the specified conditions.
   * 
   * @example
   * 20
   */
  totalNum?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 20
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      callbackList: 'CallbackList',
      code: 'Code',
      msg: 'Msg',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackList: { 'type': 'array', 'itemType': DescribeLiveRecordNotifyRecordsResponseBodyCallbackList },
      code: 'number',
      msg: 'string',
      pageNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalNum: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.callbackList)) {
      $dara.Model.validateArray(this.callbackList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

