// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EditUnfavorableAreaDevicesRequestHvacDeviceConfigVOList } from "./EditUnfavorableAreaDevicesRequestHvacDeviceConfigVolist";


export class EditUnfavorableAreaDevicesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ***
   */
  factoryId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  hvacDeviceConfigVOList?: EditUnfavorableAreaDevicesRequestHvacDeviceConfigVOList[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * system1
   */
  systemId?: string;
  static names(): { [key: string]: string } {
    return {
      factoryId: 'factoryId',
      hvacDeviceConfigVOList: 'hvacDeviceConfigVOList',
      systemId: 'systemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      factoryId: 'string',
      hvacDeviceConfigVOList: { 'type': 'array', 'itemType': EditUnfavorableAreaDevicesRequestHvacDeviceConfigVOList },
      systemId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.hvacDeviceConfigVOList)) {
      $dara.Model.validateArray(this.hvacDeviceConfigVOList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

