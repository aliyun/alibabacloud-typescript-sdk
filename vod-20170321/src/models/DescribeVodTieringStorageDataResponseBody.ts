// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodTieringStorageDataResponseBodyStorageData extends $dara.Model {
  /**
   * @remarks
   * The size of data stored for less than one month. Unit: bytes.
   * 
   * @example
   * 123
   */
  lessthanMonthDatasize?: number;
  /**
   * @remarks
   * The storage region.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * The storage class.
   * 
   * @example
   * IA
   */
  storageClass?: string;
  /**
   * @remarks
   * The storage usage. Unit: bytes.
   * 
   * @example
   * 1234
   */
  storageUtilization?: number;
  /**
   * @remarks
   * The start time of the time interval. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * @example
   * 2023-05-29T01:00:00Z
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      lessthanMonthDatasize: 'LessthanMonthDatasize',
      region: 'Region',
      storageClass: 'StorageClass',
      storageUtilization: 'StorageUtilization',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lessthanMonthDatasize: 'number',
      region: 'string',
      storageClass: 'string',
      storageUtilization: 'number',
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

export class DescribeVodTieringStorageDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 25818875-5F78-4AF6-D7393642CA58****
   */
  requestId?: string;
  /**
   * @remarks
   * The storage usage data.
   */
  storageData?: DescribeVodTieringStorageDataResponseBodyStorageData[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      storageData: 'StorageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      storageData: { 'type': 'array', 'itemType': DescribeVodTieringStorageDataResponseBodyStorageData },
    };
  }

  validate() {
    if(Array.isArray(this.storageData)) {
      $dara.Model.validateArray(this.storageData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

