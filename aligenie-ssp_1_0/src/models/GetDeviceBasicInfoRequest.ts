// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeviceBasicInfoRequestDeviceInfo extends $dara.Model {
  /**
   * @remarks
   * The value corresponding to the encoding type. Enter the Project ID of the project to which this product belongs. You can view it in the Tmall Genie AI Platform console.
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
   * Device ID. Enter the value of either deviceOpenId or deviceUnionId.
   * 
   * This parameter is required.
   * 
   * @example
   * DAFE****ce3ej=
   */
  id?: string;
  /**
   * @remarks
   * Type of device ID:  
   * - OPEN_ID: The default device ID.  
   * - UNION_ID: The organization-dimension device ID. You must request an organization in the Open Platform in advance.
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
   * 1
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

export class GetDeviceBasicInfoRequest extends $dara.Model {
  /**
   * @remarks
   * List of device identity information.
   * 
   * This parameter is required.
   */
  deviceInfo?: GetDeviceBasicInfoRequestDeviceInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: GetDeviceBasicInfoRequestDeviceInfo,
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

