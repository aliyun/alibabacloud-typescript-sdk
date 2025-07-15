// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryLiveDomainMultiStreamListResponseBodyOnlineStreamsChangeLogs extends $dara.Model {
  /**
   * @remarks
   * The reason for the switchover.
   * 
   * *   merge cut manually: You proactively switched the stream.
   * *   master stream no data: No data is available in the active stream.
   * *   master stream low quality: The quality of the active stream deteriorated.
   * 
   * @example
   * merge cut manually
   */
  changeReason?: string;
  /**
   * @remarks
   * The switchover time.
   * 
   * @example
   * 2024-11-13T09:20:47Z
   */
  changeTime?: string;
  /**
   * @remarks
   * The stream used after the switchover.
   * 
   * @example
   * rtmp://118.178.168.35:1936/wwMultitest/pull.livetest2.aliyunlive.com_wwMultitest428_AliRewrite_2?vhost=pull.livetest2.aliyunlive.com&live_rtmp_test=on
   */
  masterUpstream?: string;
  /**
   * @remarks
   * The IP address used after the switchover.
   * 
   * @example
   * 1.1.1.1
   */
  upstreamIp?: string;
  /**
   * @remarks
   * The identifier of the stream after the switchover.
   * 
   * @example
   * ***test_AliRewrite_2
   */
  upstreamSequence?: string;
  static names(): { [key: string]: string } {
    return {
      changeReason: 'ChangeReason',
      changeTime: 'ChangeTime',
      masterUpstream: 'MasterUpstream',
      upstreamIp: 'UpstreamIp',
      upstreamSequence: 'UpstreamSequence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeReason: 'string',
      changeTime: 'string',
      masterUpstream: 'string',
      upstreamIp: 'string',
      upstreamSequence: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLiveDomainMultiStreamListResponseBodyOnlineStreamsUpstreamList extends $dara.Model {
  /**
   * @remarks
   * The active/standby tag.
   * 
   * >  This parameter indicates whether the active or standby stream is being distributed.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  masterFlag?: boolean;
  /**
   * @remarks
   * The IP address of the stream ingest client.
   * 
   * @example
   * 1.1.1.1
   */
  upstreamIp?: string;
  /**
   * @remarks
   * The unique identifier of the stream ingest.
   * 
   * @example
   * ***test_Alirewrite1
   */
  upstreamSequence?: string;
  /**
   * @remarks
   * The stream ingest time.
   * 
   * @example
   * 2024-11-13T09:20:47Z
   */
  upstreamTime?: string;
  static names(): { [key: string]: string } {
    return {
      masterFlag: 'MasterFlag',
      upstreamIp: 'UpstreamIp',
      upstreamSequence: 'UpstreamSequence',
      upstreamTime: 'UpstreamTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      masterFlag: 'boolean',
      upstreamIp: 'string',
      upstreamSequence: 'string',
      upstreamTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLiveDomainMultiStreamListResponseBodyOnlineStreams extends $dara.Model {
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * apptest
   */
  appName?: string;
  /**
   * @remarks
   * The switchover records.
   */
  changeLogs?: QueryLiveDomainMultiStreamListResponseBodyOnlineStreamsChangeLogs[];
  /**
   * @remarks
   * The main streaming domain.
   * 
   * @example
   * play.***.com
   */
  domain?: string;
  /**
   * @remarks
   * Indicates whether the dual-stream disaster recovery feature is enabled. Valid values:
   * 
   * *   **on**: enabled
   * *   **off**: disabled
   * 
   * @example
   * on
   */
  optimalMode?: string;
  /**
   * @remarks
   * The name of the live stream.
   * 
   * @example
   * teststream
   */
  streamName?: string;
  /**
   * @remarks
   * The standby streams.
   */
  upstreamList?: QueryLiveDomainMultiStreamListResponseBodyOnlineStreamsUpstreamList[];
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      changeLogs: 'ChangeLogs',
      domain: 'Domain',
      optimalMode: 'OptimalMode',
      streamName: 'StreamName',
      upstreamList: 'UpstreamList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      changeLogs: { 'type': 'array', 'itemType': QueryLiveDomainMultiStreamListResponseBodyOnlineStreamsChangeLogs },
      domain: 'string',
      optimalMode: 'string',
      streamName: 'string',
      upstreamList: { 'type': 'array', 'itemType': QueryLiveDomainMultiStreamListResponseBodyOnlineStreamsUpstreamList },
    };
  }

  validate() {
    if(Array.isArray(this.changeLogs)) {
      $dara.Model.validateArray(this.changeLogs);
    }
    if(Array.isArray(this.upstreamList)) {
      $dara.Model.validateArray(this.upstreamList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLiveDomainMultiStreamListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The online streams returned.
   */
  onlineStreams?: QueryLiveDomainMultiStreamListResponseBodyOnlineStreams[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CF60DB6A-7FD6-426E-9288-122CC1A5****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 19
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      onlineStreams: 'OnlineStreams',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onlineStreams: { 'type': 'array', 'itemType': QueryLiveDomainMultiStreamListResponseBodyOnlineStreams },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.onlineStreams)) {
      $dara.Model.validateArray(this.onlineStreams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

