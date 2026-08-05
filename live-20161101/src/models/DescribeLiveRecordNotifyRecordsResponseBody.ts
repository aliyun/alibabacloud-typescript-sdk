// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveRecordNotifyRecordsResponseBodyCallbackList extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the stream belongs.
   * 
   * @example
   * liveApp****
   */
  appName?: string;
  /**
   * @remarks
   * The result description. The value is success if the callback was successful. Otherwise, an error message is returned.
   * 
   * @example
   * success
   */
  description?: string;
  /**
   * @remarks
   * The streamer\\"s streaming domain.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The specific content of the callback.
   * 
   * @example
   * 7月26日 16:14{"domain":"al.xxxx.com","stream":"livestream01","pull _stream_result":true,"cdn":"al"}
   */
  notifyContent?: string;
  /**
   * @remarks
   * The callback request header.
   * 
   * @example
   * {
   *   "Content-Type": [
   *     "application/json; charset=utf-8"
   *   ]
   * }
   */
  notifyHeader?: string;
  /**
   * @remarks
   * The response returned by the user after receiving the callback.
   * 
   * @example
   * {"Code":0,"Msg":"Success"}
   */
  notifyResponse?: string;
  /**
   * @remarks
   * The callback result. Valid values:
   * - success: The callback was successful.
   * - failed: The callback failed.
   * 
   * @example
   * success
   */
  notifyResult?: string;
  /**
   * @remarks
   * The callback time. Format: yyyy-MM-ddTHH:mm:ssZ (UTC).
   * 
   * @example
   * 2022-10-19T19:09:28Z
   */
  notifyTime?: string;
  /**
   * @remarks
   * The callback type. Valid values:
   * - file_created: The recording was created.
   * - record_error: A recording error occurred.
   * - record_started: The recording started.
   * - record_paused: The recording was paused.
   * - record_resumed: The recording was resumed.
   * - record_force_transcode_fail: The recording task failed to trigger transcoding.
   * - transformat_error: An error occurred while parsing the live stream content.
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
   * The recording storage type. Valid values:
   * 
   * - oss: recorded to OSS
   * - vod: recorded to ApsaraVideo VOD
   * - all: all storage types
   * 
   * @example
   * oss
   */
  storageType?: string;
  /**
   * @remarks
   * The stream name.
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
      storageType: 'StorageType',
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
      storageType: 'string',
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
   * The prompt message.
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
   * The total number of entries that meet the conditions.
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

