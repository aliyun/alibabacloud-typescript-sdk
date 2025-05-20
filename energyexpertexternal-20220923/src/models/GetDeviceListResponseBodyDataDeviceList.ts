// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDeviceListResponseBodyDataDeviceListInfo } from "./GetDeviceListResponseBodyDataDeviceListInfo";


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

