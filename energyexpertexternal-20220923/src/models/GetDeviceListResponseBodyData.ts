// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDeviceListResponseBodyDataDeviceList } from "./GetDeviceListResponseBodyDataDeviceList";


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

