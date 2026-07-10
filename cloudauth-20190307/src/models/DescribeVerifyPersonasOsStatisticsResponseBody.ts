// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVerifyPersonasOsStatisticsResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The total number of devices used for ID Verification.
   * 
   * @example
   * 24
   */
  allDeviceCnt?: number;
  /**
   * @remarks
   * The number of Android devices used for ID Verification.
   * 
   * @example
   * 14
   */
  deviceAndroidCnt?: number;
  /**
   * @remarks
   * The proportion of Android devices.
   * 
   * @example
   * 58.33
   */
  deviceAndroidRate?: string;
  /**
   * @remarks
   * The number of iOS devices used for ID Verification.
   * 
   * @example
   * 10
   */
  deviceIosCnt?: number;
  /**
   * @remarks
   * The proportion of iOS devices.
   * 
   * @example
   * 41.67
   */
  deviceIosRate?: string;
  static names(): { [key: string]: string } {
    return {
      allDeviceCnt: 'AllDeviceCnt',
      deviceAndroidCnt: 'DeviceAndroidCnt',
      deviceAndroidRate: 'DeviceAndroidRate',
      deviceIosCnt: 'DeviceIosCnt',
      deviceIosRate: 'DeviceIosRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allDeviceCnt: 'number',
      deviceAndroidCnt: 'number',
      deviceAndroidRate: 'string',
      deviceIosCnt: 'number',
      deviceIosRate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyPersonasOsStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 123906BE-752B-51E3-A8FF-52F53B659CE6
   */
  requestId?: string;
  /**
   * @remarks
   * The processing result.
   */
  resultObject?: DescribeVerifyPersonasOsStatisticsResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultObject: 'ResultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultObject: DescribeVerifyPersonasOsStatisticsResponseBodyResultObject,
    };
  }

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

