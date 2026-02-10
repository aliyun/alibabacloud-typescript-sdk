// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveStreamMergeResponseBodyLiveStreamMergeListLiveStreamMerge extends $dara.Model {
  appName?: string;
  appUsing?: string;
  domainName?: string;
  endTime?: string;
  extraInAppStreams?: string;
  inAppName1?: string;
  inAppName2?: string;
  inStreamName1?: string;
  inStreamName2?: string;
  liveMerger?: string;
  mergeParameters?: string;
  protocol?: string;
  startTime?: string;
  streamName?: string;
  streamUsing?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appUsing: 'AppUsing',
      domainName: 'DomainName',
      endTime: 'EndTime',
      extraInAppStreams: 'ExtraInAppStreams',
      inAppName1: 'InAppName1',
      inAppName2: 'InAppName2',
      inStreamName1: 'InStreamName1',
      inStreamName2: 'InStreamName2',
      liveMerger: 'LiveMerger',
      mergeParameters: 'MergeParameters',
      protocol: 'Protocol',
      startTime: 'StartTime',
      streamName: 'StreamName',
      streamUsing: 'StreamUsing',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appUsing: 'string',
      domainName: 'string',
      endTime: 'string',
      extraInAppStreams: 'string',
      inAppName1: 'string',
      inAppName2: 'string',
      inStreamName1: 'string',
      inStreamName2: 'string',
      liveMerger: 'string',
      mergeParameters: 'string',
      protocol: 'string',
      startTime: 'string',
      streamName: 'string',
      streamUsing: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamMergeResponseBodyLiveStreamMergeList extends $dara.Model {
  liveStreamMerge?: DescribeLiveStreamMergeResponseBodyLiveStreamMergeListLiveStreamMerge[];
  static names(): { [key: string]: string } {
    return {
      liveStreamMerge: 'LiveStreamMerge',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveStreamMerge: { 'type': 'array', 'itemType': DescribeLiveStreamMergeResponseBodyLiveStreamMergeListLiveStreamMerge },
    };
  }

  validate() {
    if(Array.isArray(this.liveStreamMerge)) {
      $dara.Model.validateArray(this.liveStreamMerge);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamMergeResponseBody extends $dara.Model {
  liveStreamMergeList?: DescribeLiveStreamMergeResponseBodyLiveStreamMergeList;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      liveStreamMergeList: 'LiveStreamMergeList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveStreamMergeList: DescribeLiveStreamMergeResponseBodyLiveStreamMergeList,
      requestId: 'string',
    };
  }

  validate() {
    if(this.liveStreamMergeList && typeof (this.liveStreamMergeList as any).validate === 'function') {
      (this.liveStreamMergeList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

