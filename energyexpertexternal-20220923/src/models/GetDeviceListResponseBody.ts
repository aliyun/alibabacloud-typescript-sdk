// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeviceListResponseBodyDataDeviceListInfo extends $dara.Model {
  /**
   * @remarks
   * The rated capacity.
   * Unit is kVA.
   * 
   * @example
   * 100
   */
  constKva?: number;
  /**
   * @remarks
   * The transformation ratio of current.
   * 
   * @example
   * 1
   */
  ct?: number;
  /**
   * @remarks
   * The magnification ratio.
   * 
   * @example
   * 80
   */
  magnification?: number;
  /**
   * @remarks
   * The high and low voltage.
   * 
   * @example
   * 0
   */
  pressure?: number;
  /**
   * @remarks
   * The transformation ratio of voltage.
   * 
   * @example
   * 80
   */
  pt?: number;
  static names(): { [key: string]: string } {
    return {
      constKva: 'constKva',
      ct: 'ct',
      magnification: 'magnification',
      pressure: 'pressure',
      pt: 'pt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constKva: 'number',
      ct: 'number',
      magnification: 'number',
      pressure: 'number',
      pt: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceListResponseBodyDataDeviceList extends $dara.Model {
  /**
   * @remarks
   * The device ID.
   * 
   * @example
   * pn_69873
   */
  deviceId?: string;
  /**
   * @remarks
   * The device name.
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
   * The device information.
   */
  info?: GetDeviceListResponseBodyDataDeviceListInfo;
  /**
   * @remarks
   * The ID of the parent device.
   * 
   * @example
   * pn_6987
   */
  parentDevice?: string;
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
      info: 'info',
      parentDevice: 'parentDevice',
      secondTypeName: 'secondTypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      deviceName: 'string',
      firstTypeName: 'string',
      info: GetDeviceListResponseBodyDataDeviceListInfo,
      parentDevice: 'string',
      secondTypeName: 'string',
    };
  }

  validate() {
    if(this.info && typeof (this.info as any).validate === 'function') {
      (this.info as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The code returned for the request.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The devices.
   */
  deviceList?: GetDeviceListResponseBodyDataDeviceList[];
  /**
   * @remarks
   * The ID of the site.
   * 
   * @example
   * pn_95
   */
  factoryId?: string;
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
   * Indicates whether the request was successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      deviceList: 'deviceList',
      factoryId: 'factoryId',
      httpCode: 'httpCode',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      deviceList: { 'type': 'array', 'itemType': GetDeviceListResponseBodyDataDeviceList },
      factoryId: 'string',
      httpCode: 'number',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.deviceList)) {
      $dara.Model.validateArray(this.deviceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: GetDeviceListResponseBodyData;
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
   * true
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
      data: GetDeviceListResponseBodyData,
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

