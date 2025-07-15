// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveSnapshotDetectPornConfigResponseBodyLiveSnapshotDetectPornConfigListLiveSnapshotDetectPornConfigScenes extends $dara.Model {
  scene?: string[];
  static names(): { [key: string]: string } {
    return {
      scene: 'scene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scene: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.scene)) {
      $dara.Model.validateArray(this.scene);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveSnapshotDetectPornConfigResponseBodyLiveSnapshotDetectPornConfigListLiveSnapshotDetectPornConfig extends $dara.Model {
  /**
   * @remarks
   * The application name.
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
   * The interval at which snapshots are captured from the live stream. Unit: seconds.
   * 
   * @example
   * 80
   */
  interval?: number;
  /**
   * @remarks
   * The name of the OSS bucket.
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
   * The name of the storage file in Object Storage Service (OSS).
   * 
   * @example
   * {liveApp****}/{liveStream****}/{Date}/{Hour}/{Minute}_{Second}.jpg
   */
  ossObject?: string;
  /**
   * @remarks
   * The moderation scenario array.
   */
  scenes?: DescribeLiveSnapshotDetectPornConfigResponseBodyLiveSnapshotDetectPornConfigListLiveSnapshotDetectPornConfigScenes;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      domainName: 'DomainName',
      interval: 'Interval',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
      ossObject: 'OssObject',
      scenes: 'Scenes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      domainName: 'string',
      interval: 'number',
      ossBucket: 'string',
      ossEndpoint: 'string',
      ossObject: 'string',
      scenes: DescribeLiveSnapshotDetectPornConfigResponseBodyLiveSnapshotDetectPornConfigListLiveSnapshotDetectPornConfigScenes,
    };
  }

  validate() {
    if(this.scenes && typeof (this.scenes as any).validate === 'function') {
      (this.scenes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveSnapshotDetectPornConfigResponseBodyLiveSnapshotDetectPornConfigList extends $dara.Model {
  liveSnapshotDetectPornConfig?: DescribeLiveSnapshotDetectPornConfigResponseBodyLiveSnapshotDetectPornConfigListLiveSnapshotDetectPornConfig[];
  static names(): { [key: string]: string } {
    return {
      liveSnapshotDetectPornConfig: 'LiveSnapshotDetectPornConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveSnapshotDetectPornConfig: { 'type': 'array', 'itemType': DescribeLiveSnapshotDetectPornConfigResponseBodyLiveSnapshotDetectPornConfigListLiveSnapshotDetectPornConfig },
    };
  }

  validate() {
    if(Array.isArray(this.liveSnapshotDetectPornConfig)) {
      $dara.Model.validateArray(this.liveSnapshotDetectPornConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveSnapshotDetectPornConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of video moderation configurations.
   */
  liveSnapshotDetectPornConfigList?: DescribeLiveSnapshotDetectPornConfigResponseBodyLiveSnapshotDetectPornConfigList;
  /**
   * @remarks
   * The sort order.
   * 
   * @example
   * Asc
   */
  order?: string;
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
   * 2
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
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
   * 11
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      liveSnapshotDetectPornConfigList: 'LiveSnapshotDetectPornConfigList',
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
      liveSnapshotDetectPornConfigList: DescribeLiveSnapshotDetectPornConfigResponseBodyLiveSnapshotDetectPornConfigList,
      order: 'string',
      pageNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalNum: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(this.liveSnapshotDetectPornConfigList && typeof (this.liveSnapshotDetectPornConfigList as any).validate === 'function') {
      (this.liveSnapshotDetectPornConfigList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

