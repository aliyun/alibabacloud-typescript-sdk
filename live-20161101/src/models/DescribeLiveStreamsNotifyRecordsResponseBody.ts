// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveStreamsNotifyRecordsResponseBodyNotifyRecordsInfoLiveStreamNotifyRecordsInfo extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the live stream belongs.
   * 
   * @example
   * app
   */
  appName?: string;
  /**
   * @remarks
   * The result of the request. If success is returned, the request is successful. If an error message is returned, the request failed.
   * 
   * @example
   * success
   */
  description?: string;
  /**
   * @remarks
   * The ingest domain.
   * 
   * @example
   * push.example1.com
   */
  domainName?: string;
  /**
   * @remarks
   * The callback content.
   * 
   * @example
   * {\\"action\\":\\"publish_done\\",\\"app\\":\\"push.example1.com\\"}
   */
  notifyContent?: string;
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
   * The time when the callback was invoked. The time is displayed in UTC.
   * 
   * @example
   * 2022-10-19T19:09:28Z
   */
  notifyTime?: string;
  /**
   * @remarks
   * The event. Valid values:
   * 
   * *   publish: The stream ingest starts.
   * *   publish_done: The stream ingest is interrupted.
   * 
   * @example
   * publish_done
   */
  notifyType?: string;
  /**
   * @remarks
   * The callback URL.
   * 
   * @example
   * http://xx.xx.xx.xx/callbacks
   */
  notifyUrl?: string;
  /**
   * @remarks
   * The name of the live stream.
   * 
   * @example
   * stream
   */
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      description: 'Description',
      domainName: 'DomainName',
      notifyContent: 'NotifyContent',
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

export class DescribeLiveStreamsNotifyRecordsResponseBodyNotifyRecordsInfo extends $dara.Model {
  liveStreamNotifyRecordsInfo?: DescribeLiveStreamsNotifyRecordsResponseBodyNotifyRecordsInfoLiveStreamNotifyRecordsInfo[];
  static names(): { [key: string]: string } {
    return {
      liveStreamNotifyRecordsInfo: 'LiveStreamNotifyRecordsInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveStreamNotifyRecordsInfo: { 'type': 'array', 'itemType': DescribeLiveStreamsNotifyRecordsResponseBodyNotifyRecordsInfoLiveStreamNotifyRecordsInfo },
    };
  }

  validate() {
    if(Array.isArray(this.liveStreamNotifyRecordsInfo)) {
      $dara.Model.validateArray(this.liveStreamNotifyRecordsInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamsNotifyRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The stream ingest callback records.
   */
  notifyRecordsInfo?: DescribeLiveStreamsNotifyRecordsResponseBodyNotifyRecordsInfo;
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
   * F675E4B4-125D-1533-901B-11A724644285
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
      notifyRecordsInfo: 'NotifyRecordsInfo',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notifyRecordsInfo: DescribeLiveStreamsNotifyRecordsResponseBodyNotifyRecordsInfo,
      pageNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalNum: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(this.notifyRecordsInfo && typeof (this.notifyRecordsInfo as any).validate === 'function') {
      (this.notifyRecordsInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

