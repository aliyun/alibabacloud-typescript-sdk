// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLivePackageConfigResponseBodyLivePackageConfigListLivePackageConfig extends $dara.Model {
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * AppName
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
   * Indicates whether the transcoded stream is ignored. Valid values:
   * 
   * *   **true** (default)
   * *   **false**
   * 
   * @example
   * true
   */
  ignoreTranscode?: boolean;
  /**
   * @remarks
   * The part length. Unit: milliseconds.
   * 
   * @example
   * 0
   */
  partDuration?: number;
  /**
   * @remarks
   * The streaming protocol and encapsulation format.
   * 
   * @example
   * HLS_CMAF
   */
  protocol?: string;
  /**
   * @remarks
   * The segment length. Unit: seconds.
   * 
   * @example
   * 5
   */
  segmentDuration?: number;
  /**
   * @remarks
   * The number of segments.
   * 
   * @example
   * 3
   */
  segmentNum?: number;
  /**
   * @remarks
   * The stream name.
   * 
   * @example
   * StreamName
   */
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      domainName: 'DomainName',
      ignoreTranscode: 'IgnoreTranscode',
      partDuration: 'PartDuration',
      protocol: 'Protocol',
      segmentDuration: 'SegmentDuration',
      segmentNum: 'SegmentNum',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      domainName: 'string',
      ignoreTranscode: 'boolean',
      partDuration: 'number',
      protocol: 'string',
      segmentDuration: 'number',
      segmentNum: 'number',
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

export class DescribeLivePackageConfigResponseBodyLivePackageConfigList extends $dara.Model {
  livePackageConfig?: DescribeLivePackageConfigResponseBodyLivePackageConfigListLivePackageConfig[];
  static names(): { [key: string]: string } {
    return {
      livePackageConfig: 'LivePackageConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      livePackageConfig: { 'type': 'array', 'itemType': DescribeLivePackageConfigResponseBodyLivePackageConfigListLivePackageConfig },
    };
  }

  validate() {
    if(Array.isArray(this.livePackageConfig)) {
      $dara.Model.validateArray(this.livePackageConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLivePackageConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The live stream encapsulation configurations.
   */
  livePackageConfigList?: DescribeLivePackageConfigResponseBodyLivePackageConfigList;
  /**
   * @remarks
   * The sorting order. Valid values:
   * 
   * *   **asc** (default): ascending order
   * *   **desc**: descending order
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
   * 1
   */
  pageNum?: number;
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
   * 1FEDCFD8-4C5D-5CB3-A5A1-0B59E5AE57B0
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of live stream encapsulation configurations.
   * 
   * @example
   * 1
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
      livePackageConfigList: 'LivePackageConfigList',
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
      livePackageConfigList: DescribeLivePackageConfigResponseBodyLivePackageConfigList,
      order: 'string',
      pageNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalNum: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(this.livePackageConfigList && typeof (this.livePackageConfigList as any).validate === 'function') {
      (this.livePackageConfigList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

