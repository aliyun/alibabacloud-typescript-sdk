// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLivePullStreamConfigResponseBodyLiveAppRecordListLiveAppRecord extends $dara.Model {
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
   * The main streaming domain.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range for which the configurations were queried. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2016-05-20T01:33:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The origin server of the live stream.
   * 
   * @example
   * guide.aliyundoc.com
   */
  sourceUrl?: string;
  /**
   * @remarks
   * The live stream origin server that you are using.
   * 
   * @example
   * guide.aliyundoc.com
   */
  sourceUsing?: string;
  /**
   * @remarks
   * The beginning of the time range for which the configurations were queried. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2016-05-15T01:30:00Z
   */
  startTime?: string;
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
      domainName: 'DomainName',
      endTime: 'EndTime',
      sourceUrl: 'SourceUrl',
      sourceUsing: 'SourceUsing',
      startTime: 'StartTime',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      domainName: 'string',
      endTime: 'string',
      sourceUrl: 'string',
      sourceUsing: 'string',
      startTime: 'string',
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

export class DescribeLivePullStreamConfigResponseBodyLiveAppRecordList extends $dara.Model {
  liveAppRecord?: DescribeLivePullStreamConfigResponseBodyLiveAppRecordListLiveAppRecord[];
  static names(): { [key: string]: string } {
    return {
      liveAppRecord: 'LiveAppRecord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveAppRecord: { 'type': 'array', 'itemType': DescribeLivePullStreamConfigResponseBodyLiveAppRecordListLiveAppRecord },
    };
  }

  validate() {
    if(Array.isArray(this.liveAppRecord)) {
      $dara.Model.validateArray(this.liveAppRecord);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLivePullStreamConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the stream pulling configurations.
   */
  liveAppRecordList?: DescribeLivePullStreamConfigResponseBodyLiveAppRecordList;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A3136B58-5876-4168-83CA-B562781981A0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      liveAppRecordList: 'LiveAppRecordList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveAppRecordList: DescribeLivePullStreamConfigResponseBodyLiveAppRecordList,
      requestId: 'string',
    };
  }

  validate() {
    if(this.liveAppRecordList && typeof (this.liveAppRecordList as any).validate === 'function') {
      (this.liveAppRecordList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

