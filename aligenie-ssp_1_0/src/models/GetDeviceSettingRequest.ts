// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeviceSettingRequestDeviceInfo extends $dara.Model {
  /**
   * @remarks
   * The value corresponding to the encoding type. Enter the Project ID of the project that contains the ProductKey of this product in the Tmall Genie AI Platform.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  encodeKey?: string;
  /**
   * @remarks
   * Encoding type. Set this parameter to PROJECT_ID.
   * 
   * This parameter is required.
   * 
   * @example
   * PROJECT_ID
   */
  encodeType?: string;
  /**
   * @remarks
   * Device ID. Configure this parameter as deviceOpenId or deviceUnionId.
   * 
   * This parameter is required.
   * 
   * @example
   * DAFE****ce3ej=
   */
  id?: string;
  /**
   * @remarks
   * The type of Device ID.  
   * OPEN_ID: The default device identity.  
   * UNION_ID: The device identity at the organization dimension. You must request an organization in advance on the Open Platform.
   * 
   * This parameter is required.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @remarks
   * Organization ID. Required if IdType is UNION_ID.
   * 
   * @example
   * 122
   */
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceSettingRequest extends $dara.Model {
  /**
   * @remarks
   * List of device identity information.
   */
  deviceInfo?: GetDeviceSettingRequestDeviceInfo;
  /**
   * @remarks
   * Set of specified keys for device Settings,  
   * Do Not Disturb mode: nightMode
   * 
   * This parameter is required.
   */
  keys?: string[];
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      keys: 'Keys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: GetDeviceSettingRequestDeviceInfo,
      keys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.deviceInfo && typeof (this.deviceInfo as any).validate === 'function') {
      (this.deviceInfo as any).validate();
    }
    if(Array.isArray(this.keys)) {
      $dara.Model.validateArray(this.keys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

