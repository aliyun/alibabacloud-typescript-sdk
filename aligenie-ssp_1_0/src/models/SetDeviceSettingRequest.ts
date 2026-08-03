// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDeviceSettingRequestDeviceInfo extends $dara.Model {
  /**
   * @remarks
   * Value corresponding to the encoding type. Enter the Project ID of the project where the product resides. You can view it in the Tmall Genie AI platform console.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  encodeKey?: string;
  /**
   * @remarks
   * Encoding type. Enter PROJECT_ID here.
   * 
   * This parameter is required.
   * 
   * @example
   * PROJECT_ID
   */
  encodeType?: string;
  /**
   * @remarks
   * Device ID. Enter the value of deviceOpenId or deviceUnionId.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  id?: string;
  /**
   * @remarks
   * The type of Device ID:  
   * OPEN_ID: The default device identity.  
   * UNION_ID: The organization-dimension device identity. You must request an organization in advance on the Open Platform.
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

export class SetDeviceSettingRequest extends $dara.Model {
  /**
   * @remarks
   * List of user identifier information.
   * 
   * This parameter is required.
   */
  deviceInfo?: SetDeviceSettingRequestDeviceInfo;
  /**
   * @remarks
   * The collection of keys specified for device settings:  
   * Do Not Disturb mode: nightMode
   * 
   * This parameter is required.
   * 
   * @example
   * nightMode
   */
  key?: string;
  /**
   * @remarks
   * Attribute Value
   * 
   * @example
   * {"enable":true}
   */
  value?: any;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: SetDeviceSettingRequestDeviceInfo,
      key: 'string',
      value: 'any',
    };
  }

  validate() {
    if(this.deviceInfo && typeof (this.deviceInfo as any).validate === 'function') {
      (this.deviceInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

