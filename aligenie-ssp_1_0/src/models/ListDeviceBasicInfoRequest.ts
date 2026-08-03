// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeviceBasicInfoRequestDeviceInfos extends $dara.Model {
  /**
   * @remarks
   * Value corresponding to the encoding type. Enter the Project ID of the project where the product resides. You can view this in the Tmall Genie AI Platform console.
   * 
   * This parameter is required.
   * 
   * @example
   * 12**45
   */
  encodeKey?: string;
  /**
   * @remarks
   * Encoding type. Enter **PROJECT_ID** here.
   * 
   * This parameter is required.
   * 
   * @example
   * PROJECT_ID
   */
  encodeType?: string;
  /**
   * @remarks
   * Type of device ID:
   * - OPEN_ID: Default device ID identity.
   * - UNION_ID: Organization-dimension device ID identity. You must request an organization in advance on the Open Platform.
   * 
   * This parameter is required.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @remarks
   * List of device identity information.
   */
  ids?: string[];
  /**
   * @remarks
   * Organization ID of the device. Required if IdType is UNION_ID.
   * 
   * @example
   * 1
   */
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      idType: 'IdType',
      ids: 'Ids',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      idType: 'string',
      ids: { 'type': 'array', 'itemType': 'string' },
      organizationId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ids)) {
      $dara.Model.validateArray(this.ids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceBasicInfoRequest extends $dara.Model {
  /**
   * @remarks
   * List of device identity information.
   */
  deviceInfos?: ListDeviceBasicInfoRequestDeviceInfos;
  static names(): { [key: string]: string } {
    return {
      deviceInfos: 'DeviceInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfos: ListDeviceBasicInfoRequestDeviceInfos,
    };
  }

  validate() {
    if(this.deviceInfos && typeof (this.deviceInfos as any).validate === 'function') {
      (this.deviceInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

