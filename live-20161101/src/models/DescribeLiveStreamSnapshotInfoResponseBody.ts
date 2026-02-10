// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveStreamSnapshotInfoResponseBodyLiveStreamSnapshotInfoListLiveStreamSnapshotInfo extends $dara.Model {
  createTime?: string;
  createTimestamp?: number;
  isOverlay?: boolean;
  ossBucket?: string;
  ossEndpoint?: string;
  ossObject?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      isOverlay: 'IsOverlay',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
      ossObject: 'OssObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createTimestamp: 'number',
      isOverlay: 'boolean',
      ossBucket: 'string',
      ossEndpoint: 'string',
      ossObject: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamSnapshotInfoResponseBodyLiveStreamSnapshotInfoList extends $dara.Model {
  liveStreamSnapshotInfo?: DescribeLiveStreamSnapshotInfoResponseBodyLiveStreamSnapshotInfoListLiveStreamSnapshotInfo[];
  static names(): { [key: string]: string } {
    return {
      liveStreamSnapshotInfo: 'LiveStreamSnapshotInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveStreamSnapshotInfo: { 'type': 'array', 'itemType': DescribeLiveStreamSnapshotInfoResponseBodyLiveStreamSnapshotInfoListLiveStreamSnapshotInfo },
    };
  }

  validate() {
    if(Array.isArray(this.liveStreamSnapshotInfo)) {
      $dara.Model.validateArray(this.liveStreamSnapshotInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamSnapshotInfoResponseBody extends $dara.Model {
  liveStreamSnapshotInfoList?: DescribeLiveStreamSnapshotInfoResponseBodyLiveStreamSnapshotInfoList;
  /**
   * @remarks
   * The time when the next call occurred. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * >  If the number of snapshots that were captured within the specified time period exceeds the value of the Limit parameter, this parameter is returned. It indicates the time when the DescribeLiveStreamSnapshotInfo operation was called again. If this parameter is not returned, the number of snapshots that are captured within the specified time period does not exceed the specified limit.
   * 
   * @example
   * 2015-12-01T17:36:00Z
   */
  nextStartTime?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 62136AE6-7793-45ED-B14A-60D19A9486D3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      liveStreamSnapshotInfoList: 'LiveStreamSnapshotInfoList',
      nextStartTime: 'NextStartTime',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveStreamSnapshotInfoList: DescribeLiveStreamSnapshotInfoResponseBodyLiveStreamSnapshotInfoList,
      nextStartTime: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.liveStreamSnapshotInfoList && typeof (this.liveStreamSnapshotInfoList as any).validate === 'function') {
      (this.liveStreamSnapshotInfoList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

