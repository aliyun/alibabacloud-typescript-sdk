// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVerifyPersonasDeviceModelStatisticsResponseBodyResultObjectItems extends $dara.Model {
  /**
   * @remarks
   * Number of devices.
   * 
   * @example
   * 5
   */
  deviceCnt?: number;
  /**
   * @remarks
   * Device model
   * 
   * @example
   * iPhone15,2
   */
  deviceModel?: string;
  /**
   * @remarks
   * The ratio of this device model to the total number of devices.
   * 
   * @example
   * 16.13
   */
  deviceRate?: string;
  static names(): { [key: string]: string } {
    return {
      deviceCnt: 'DeviceCnt',
      deviceModel: 'DeviceModel',
      deviceRate: 'DeviceRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceCnt: 'number',
      deviceModel: 'string',
      deviceRate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyPersonasDeviceModelStatisticsResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Total number of devices.
   * 
   * @example
   * 31
   */
  allDeviceCnt?: number;
  /**
   * @remarks
   * List of data for different phone models.
   */
  items?: DescribeVerifyPersonasDeviceModelStatisticsResponseBodyResultObjectItems[];
  static names(): { [key: string]: string } {
    return {
      allDeviceCnt: 'AllDeviceCnt',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allDeviceCnt: 'number',
      items: { 'type': 'array', 'itemType': DescribeVerifyPersonasDeviceModelStatisticsResponseBodyResultObjectItems },
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyPersonasDeviceModelStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * ID of this request.
   * 
   * @example
   * 026828A3-CC7E-5D85-85B6-08DF245C5A53
   */
  requestId?: string;
  /**
   * @remarks
   * Query result.
   */
  resultObject?: DescribeVerifyPersonasDeviceModelStatisticsResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultObject: 'ResultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultObject: DescribeVerifyPersonasDeviceModelStatisticsResponseBodyResultObject,
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

