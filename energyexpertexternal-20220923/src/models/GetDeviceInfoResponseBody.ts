// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeviceInfoResponseBodyDataRecordList extends $dara.Model {
  /**
   * @remarks
   * The device identifier.
   * 
   * @example
   * Ia
   */
  identifier?: string;
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * Phase A current
   */
  paramName?: string;
  /**
   * @remarks
   * The date on which the statistics were collected.
   * 
   * @example
   * 2022-07-26 00:00:00
   */
  statisticsDate?: string;
  /**
   * @remarks
   * The type of the measuring point.
   * 
   * @example
   * DOUBLE
   */
  type?: string;
  /**
   * @remarks
   * The unit of the parameter value.
   * 
   * @example
   * A
   */
  unit?: string;
  /**
   * @remarks
   * The value of the measuring point.
   * 
   * @example
   * 20.00
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      identifier: 'identifier',
      paramName: 'paramName',
      statisticsDate: 'statisticsDate',
      type: 'type',
      unit: 'unit',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifier: 'string',
      paramName: 'string',
      statisticsDate: 'string',
      type: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the device.
   * 
   * @example
   * pn_69873
   */
  deviceId?: string;
  /**
   * @remarks
   * The name of the device.
   * 
   * @example
   * Main transformer 4#
   */
  deviceName?: string;
  /**
   * @remarks
   * The level 1 meter type.
   * 
   * @example
   * Electric meter
   */
  firstTypeName?: string;
  /**
   * @remarks
   * The device parameters.
   */
  recordList?: GetDeviceInfoResponseBodyDataRecordList[];
  /**
   * @remarks
   * The level 2 meter type.
   * 
   * @example
   * Gateway meter
   */
  secondTypeName?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'deviceId',
      deviceName: 'deviceName',
      firstTypeName: 'firstTypeName',
      recordList: 'recordList',
      secondTypeName: 'secondTypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      deviceName: 'string',
      firstTypeName: 'string',
      recordList: { 'type': 'array', 'itemType': GetDeviceInfoResponseBodyDataRecordList },
      secondTypeName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.recordList)) {
      $dara.Model.validateArray(this.recordList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The code returned for the request. A value of Success indicates that the request was successful. Other values indicate that the request failed. You can troubleshoot the error by viewing the error message returned.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: GetDeviceInfoResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 83A5A7DD-8974-5769-952E-590A97BEA34E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetDeviceInfoResponseBodyData,
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

