// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveSnapshotConfigResponseBodyLiveStreamSnapshotConfigListLiveStreamSnapshotConfig extends $dara.Model {
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
   * The callback URL that is used to receive notifications about snapshot capture.
   * 
   * @example
   * https://learn.aliyundoc.com
   */
  callback?: string;
  /**
   * @remarks
   * The time when the configuration was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2016-05-20T01:33:38Z
   */
  createTime?: string;
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
   * The name of the Object Storage Service (OSS) bucket.
   * 
   * @example
   * liveBucket****
   */
  ossBucket?: string;
  /**
   * @remarks
   * The endpoint of the OSS bucket.
   * 
   * @example
   * cn-oss-****.aliyuncs.com
   */
  ossEndpoint?: string;
  /**
   * @remarks
   * The naming format of snapshots that are stored in the overwrite mode, which means that a new snapshot overwrites the previous snapshot.
   * 
   * @example
   * {liveApp****}/{liveStream****}.jpg
   */
  overwriteOssObject?: string;
  /**
   * @remarks
   * The naming format of snapshots that are stored in sequence, which means that a new snapshot does not overwrite the previous snapshot.
   * 
   * @example
   * snapshot/{liveApp****}/{liveStream****}/{UnixTimestamp}.jpg
   */
  sequenceOssObject?: string;
  /**
   * @remarks
   * The interval at which snapshots are captured. Unit: seconds.
   * 
   * @example
   * 10
   */
  timeInterval?: number;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      callback: 'Callback',
      createTime: 'CreateTime',
      domainName: 'DomainName',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
      overwriteOssObject: 'OverwriteOssObject',
      sequenceOssObject: 'SequenceOssObject',
      timeInterval: 'TimeInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      callback: 'string',
      createTime: 'string',
      domainName: 'string',
      ossBucket: 'string',
      ossEndpoint: 'string',
      overwriteOssObject: 'string',
      sequenceOssObject: 'string',
      timeInterval: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveSnapshotConfigResponseBodyLiveStreamSnapshotConfigList extends $dara.Model {
  liveStreamSnapshotConfig?: DescribeLiveSnapshotConfigResponseBodyLiveStreamSnapshotConfigListLiveStreamSnapshotConfig[];
  static names(): { [key: string]: string } {
    return {
      liveStreamSnapshotConfig: 'LiveStreamSnapshotConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveStreamSnapshotConfig: { 'type': 'array', 'itemType': DescribeLiveSnapshotConfigResponseBodyLiveStreamSnapshotConfigListLiveStreamSnapshotConfig },
    };
  }

  validate() {
    if(Array.isArray(this.liveStreamSnapshotConfig)) {
      $dara.Model.validateArray(this.liveStreamSnapshotConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveSnapshotConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The snapshot configurations.
   */
  liveStreamSnapshotConfigList?: DescribeLiveSnapshotConfigResponseBodyLiveStreamSnapshotConfigList;
  /**
   * @remarks
   * The sort order.
   * 
   * @example
   * asc
   */
  order?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 2
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 11
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A3136B58-5876-4168-83CA-B562781981A0
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries that meet the specified conditions.
   * 
   * @example
   * 6
   */
  totalNum?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 10
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      liveStreamSnapshotConfigList: 'LiveStreamSnapshotConfigList',
      order: 'Order',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveStreamSnapshotConfigList: DescribeLiveSnapshotConfigResponseBodyLiveStreamSnapshotConfigList,
      order: 'string',
      pageNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalNum: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(this.liveStreamSnapshotConfigList && typeof (this.liveStreamSnapshotConfigList as any).validate === 'function') {
      (this.liveStreamSnapshotConfigList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

