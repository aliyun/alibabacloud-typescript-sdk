// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveSnapshotConfigResponseBodyLiveStreamSnapshotConfigListLiveStreamSnapshotConfig extends $dara.Model {
  appName?: string;
  callback?: string;
  createTime?: string;
  domainName?: string;
  ossBucket?: string;
  ossEndpoint?: string;
  overwriteOssObject?: string;
  sequenceOssObject?: string;
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

