// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserDevicesStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The action to perform on the endpoint device status. Valid values:
   * 
   * - **Locked**: Lock the device.
   * 
   * - **Lost**: Report the device as lost.
   * 
   * - **Unbound**: Detach the device. You can detach only offline or long-term offline devices.
   * 
   * - **Unlocked**: Unlock the device. You can unlock only locked devices.
   * 
   * - **Found**: Mark the device as found. You can mark only lost devices as found.
   * 
   * This parameter is required.
   * 
   * @example
   * Unbound
   */
  deviceAction?: string;
  /**
   * @remarks
   * A list of endpoint device IDs.
   * 
   * This parameter is required.
   */
  deviceTags?: string[];
  static names(): { [key: string]: string } {
    return {
      deviceAction: 'DeviceAction',
      deviceTags: 'DeviceTags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceAction: 'string',
      deviceTags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.deviceTags)) {
      $dara.Model.validateArray(this.deviceTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

