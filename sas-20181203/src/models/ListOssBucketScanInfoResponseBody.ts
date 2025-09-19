// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOssBucketScanInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The name of the bucket.
   * 
   * @example
   * hz-new02****
   */
  bucketName?: string;
  /**
   * @remarks
   * Configuration status, valid values:
   * 
   * - **0**: No Configuration.
   * - **1**: Not Open.
   * - **2**: Open.
   * 
   * @example
   * 1
   */
  configStatus?: number;
  /**
   * @remarks
   * Bucket decompression configuration status, valid values:
   * - **0**: Decompression not configured.
   * - **1**: Decompression configured.
   * 
   * @example
   * 0
   */
  decompressStatus?: number;
  /**
   * @remarks
   * The number of high-risk objects.
   * 
   * @example
   * 0
   */
  highRisk?: number;
  /**
   * @remarks
   * The time when the most recent check ended. Unit: milliseconds.
   * 
   * @example
   * 1698388233883
   */
  lastScanEndTime?: number;
  /**
   * @remarks
   * The time when the bucket was last checked. Unit: milliseconds.
   * 
   * @example
   * 1698388233883
   */
  lastScanTime?: number;
  /**
   * @remarks
   * The number of low-risk objects.
   * 
   * @example
   * 0
   */
  lowRisk?: number;
  /**
   * @remarks
   * The number of medium-risk objects.
   * 
   * @example
   * 0
   */
  mediumRisk?: number;
  /**
   * @remarks
   * The reason why the bucket cannot be checked.
   * 
   * @example
   * Unsupported Region.
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
   * The number of objects that are checked.
   * 
   * @example
   * 100
   */
  scanObject?: number;
  /**
   * @remarks
   * Indicates whether the bucket is checked. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  scanned?: boolean;
  /**
   * @remarks
   * The check status of the bucket. Valid values:
   * 
   * *   **1**: The bucket is not checked.
   * *   **2**: All objects in the bucket are being checked.
   * *   **3**: Only new objects are being checked.
   * *   **4**: The bucket is checked.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The storage class of the bucket. Valid values:
   * 
   * *   **Standard**
   * *   **IA**
   * *   **Archive**
   * *   **ColdArchive**
   * 
   * @example
   * Archive
   */
  storageClass?: string;
  /**
   * @remarks
   * Indicates whether the bucket can be checked. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  support?: boolean;
  /**
   * @remarks
   * The total number of objects in the bucket.
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
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
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
   * The data returned.
   */
  data?: ListOssBucketScanInfoResponseBodyData[];
  /**
   * @remarks
   * The page information.
   */
  pageInfo?: ListOssBucketScanInfoResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID.
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

