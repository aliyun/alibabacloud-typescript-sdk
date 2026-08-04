// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserDevicesSharingStatusRequest extends $dara.Model {
  /**
   * @remarks
   * Collection of device IDs.
   * 
   * This parameter is required.
   */
  deviceTags?: string[];
  /**
   * @remarks
   * Indicates whether device sharing is enabled. Values:
   * 
   * - **true**: Enable sharing.
   * 
   * - **false**: Disable sharing.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  sharingStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      deviceTags: 'DeviceTags',
      sharingStatus: 'SharingStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceTags: { 'type': 'array', 'itemType': 'string' },
      sharingStatus: 'boolean',
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

