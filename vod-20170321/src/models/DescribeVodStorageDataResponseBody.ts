// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodStorageDataResponseBodyStorageDataStorageDataItem extends $dara.Model {
  /**
   * @remarks
   * The outbound traffic. Unit: bytes. The outbound traffic is generated when videos are directly downloaded or played from OSS buckets without Alibaba Cloud CDN acceleration.
   * 
   * @example
   * 111111
   */
  networkOut?: string;
  /**
   * @remarks
   * The detailed usage data of storage-related resources. Unit: bytes.
   * 
   * @example
   * 111111
   */
  storageUtilization?: string;
  /**
   * @remarks
   * The timestamp of the returned data. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2019-02-01T15:00:00Z
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      networkOut: 'NetworkOut',
      storageUtilization: 'StorageUtilization',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkOut: 'string',
      storageUtilization: 'string',
      timeStamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodStorageDataResponseBodyStorageData extends $dara.Model {
  storageDataItem?: DescribeVodStorageDataResponseBodyStorageDataStorageDataItem[];
  static names(): { [key: string]: string } {
    return {
      storageDataItem: 'StorageDataItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storageDataItem: { 'type': 'array', 'itemType': DescribeVodStorageDataResponseBodyStorageDataStorageDataItem },
    };
  }

  validate() {
    if(Array.isArray(this.storageDataItem)) {
      $dara.Model.validateArray(this.storageDataItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodStorageDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time granularity at which the data was queried. Valid values:
   * 
   * *   **hour**
   * *   **day**
   * 
   * @example
   * day
   */
  dataInterval?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C370DAF1-C838-4288-****-9A87633D248E
   */
  requestId?: string;
  /**
   * @remarks
   * The storage usage data returned.
   */
  storageData?: DescribeVodStorageDataResponseBodyStorageData;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      requestId: 'RequestId',
      storageData: 'StorageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      requestId: 'string',
      storageData: DescribeVodStorageDataResponseBodyStorageData,
    };
  }

  validate() {
    if(this.storageData && typeof (this.storageData as any).validate === 'function') {
      (this.storageData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

