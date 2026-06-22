// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOssBucketScanInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The bucket name.
   * 
   * @example
   * hz-new02****
   */
  bucketName?: string;
  /**
   * @remarks
   * The enabling status of the bucket scan configuration. Valid values:
   * - **0**: Not configured.
   * - **1**: Configured and enabled.
   * - **2**: Configured but not enabled.
   * 
   * @example
   * 0
   */
  configStatus?: number;
  /**
   * @remarks
   * The enabling status of the bucket decompression configuration. Valid values:
   * 
   * - **0**: Decompression not configured.
   * - **1**: Decompression configured.
   * 
   * @example
   * 0
   */
  decompressStatus?: number;
  /**
   * @remarks
   * The number of high-risk files.
   * 
   * @example
   * 0
   */
  highRisk?: number;
  /**
   * @remarks
   * The end timestamp of the latest scan, in milliseconds.
   * 
   * @example
   * 1698388233883
   */
  lastScanEndTime?: number;
  /**
   * @remarks
   * The timestamp of the latest scan, in milliseconds.
   * 
   * @example
   * 1698388233883
   */
  lastScanTime?: number;
  /**
   * @remarks
   * The number of low-risk files.
   * 
   * @example
   * 0
   */
  lowRisk?: number;
  /**
   * @remarks
   * The number of medium-risk files.
   * 
   * @example
   * 0
   */
  mediumRisk?: number;
  /**
   * @remarks
   * The reason why scanning is not supported.
   * 
   * @example
   * Unsupported Region。
   */
  message?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The number of scanned files.
   * 
   * @example
   * 100
   */
  scanObject?: number;
  /**
   * @remarks
   * Indicates whether the bucket has been scanned. Valid values:
   * 
   * - **true**: Scanned.
   * - **false**: Not scanned.
   * 
   * @example
   * false
   */
  scanned?: boolean;
  /**
   * @remarks
   * The detection status. Valid values:
   * 
   * - **1**: Not scanned.
   * - **2**: Full scan in progress.
   * - **3**: Incremental scan in progress.
   * - **4**: Scanned.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The storage class of the bucket. Valid values:
   * 
   * - **Standard**: Standard LRS
   * - **IA**: Infrequent Access LRS
   * - **Archive**: Archive LRS
   * - **ColdArchive**: Cold Archive LRS.
   * 
   * @example
   * Archive
   */
  storageClass?: string;
  /**
   * @remarks
   * Indicates whether scanning is supported. Valid values:
   * 
   * - true: Supported.
   * - false: Not supported.
   * 
   * @example
   * true
   */
  support?: boolean;
  /**
   * @remarks
   * The total number of files in the bucket.
   * 
   * >This parameter is obtained through the OSS GetBucketStat operation.
   * 
   * @example
   * 100
   */
  totalObject?: number;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      configStatus: 'ConfigStatus',
      decompressStatus: 'DecompressStatus',
      highRisk: 'HighRisk',
      lastScanEndTime: 'LastScanEndTime',
      lastScanTime: 'LastScanTime',
      lowRisk: 'LowRisk',
      mediumRisk: 'MediumRisk',
      message: 'Message',
      regionId: 'RegionId',
      scanObject: 'ScanObject',
      scanned: 'Scanned',
      status: 'Status',
      storageClass: 'StorageClass',
      support: 'Support',
      totalObject: 'TotalObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      configStatus: 'number',
      decompressStatus: 'number',
      highRisk: 'number',
      lastScanEndTime: 'number',
      lastScanTime: 'number',
      lowRisk: 'number',
      mediumRisk: 'number',
      message: 'string',
      regionId: 'string',
      scanObject: 'number',
      scanned: 'boolean',
      status: 'number',
      storageClass: 'string',
      support: 'boolean',
      totalObject: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOssBucketScanInfoResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page in a paging query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of entries returned per page in a paging query.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 165
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOssBucketScanInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data details.
   */
  data?: ListOssBucketScanInfoResponseBodyData[];
  /**
   * @remarks
   * The paging information in a paging query.
   */
  pageInfo?: ListOssBucketScanInfoResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request. The China value is a unique identifier generated by Alibaba Cloud for the request and can be used for troubleshooting.
   * 
   * @example
   * 6C578F36-92D2-552C-8AA0-86EB1AC2****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListOssBucketScanInfoResponseBodyData },
      pageInfo: ListOssBucketScanInfoResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

