// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserByDeviceIdRequestDeviceInfo extends $dara.Model {
  /**
   * @remarks
   * The value corresponding to the encoding type. Set this parameter to the Project ID of the product’s ProductKey in the Tmall Genie AI platform.
   * 
   * This parameter is required.
   * 
   * @example
   * 12**45
   */
  encodeKey?: string;
  /**
   * @remarks
   * Encoding type. Set this parameter to **PROJECT_ID**.
   * 
   * This parameter is required.
   * 
   * @example
   * PROJECT_ID
   */
  encodeType?: string;
  /**
   * @remarks
   * Device identifier, configured as either deviceOpenId or deviceUnionId.
   * 
   * This parameter is required.
   * 
   * @example
   * DAFE****ce3ej=
   */
  id?: string;
  /**
   * @remarks
   * Type of the device ID:  
   * - OPEN_ID: The default device ID.  
   * - UNION_ID: The organization-dimension device ID. You must request an organization on the Open Platform in advance.
   * 
   * This parameter is required.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @remarks
   * Organization ID. Required if IdType is set to UNION_ID.
   * 
   * @example
   * 1**2
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

export class GetUserByDeviceIdRequest extends $dara.Model {
  /**
   * @remarks
   * List of device identity information.
   * 
   * This parameter is required.
   */
  deviceInfo?: GetUserByDeviceIdRequestDeviceInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: GetUserByDeviceIdRequestDeviceInfo,
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

