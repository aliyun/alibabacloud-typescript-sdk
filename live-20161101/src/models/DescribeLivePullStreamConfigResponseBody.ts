// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLivePullStreamConfigResponseBodyLiveAppRecordListLiveAppRecord extends $dara.Model {
  appName?: string;
  domainName?: string;
  endTime?: string;
  sourceUrl?: string;
  sourceUsing?: string;
  startTime?: string;
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

