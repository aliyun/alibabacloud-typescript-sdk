// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnbindDeviceRequestDeviceInfo extends $dara.Model {
  /**
   * @remarks
   * The value corresponding to the encoding type, which is the Project ID of the project where the product resides. You can view it in the Tmall Genie AI platform console.
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
   * Device identifier. Enter the value of deviceOpenId or deviceUnionId.
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
   * - OPEN_ID: The default device ID identity.  
   * - UNION_ID: The organization-dimension device ID identity. You must request an organization in advance on the Open Platform.
   * 
   * This parameter is required.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @remarks
   * Organization ID. This parameter is required if IdType is set to UNION_ID.
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

export class UnbindDeviceRequestUserInfo extends $dara.Model {
  /**
   * @remarks
   * The value corresponding to the encoding type, which is the Project ID of the project where this product resides. You can view it in the Tmall Genie AI Platform console.
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
   * User identifier. Enter the value of userOpenId or userUnionId.
   * 
   * This parameter is required.
   * 
   * @example
   * HOFF****my7Iw=
   */
  id?: string;
  /**
   * @remarks
   * The type of User ID:  
   * - OPEN_ID: The default user ID identity.  
   * - UNION_ID: The organization-dimension user ID identity. You must request an organization in advance on the Open Platform.
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

export class UnbindDeviceRequest extends $dara.Model {
  /**
   * @remarks
   * List of device identity information.
   * 
   * This parameter is required.
   */
  deviceInfo?: UnbindDeviceRequestDeviceInfo;
  /**
   * @remarks
   * List of user identifier information.
   * 
   * This parameter is required.
   */
  userInfo?: UnbindDeviceRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: UnbindDeviceRequestDeviceInfo,
      userInfo: UnbindDeviceRequestUserInfo,
    };
  }

  validate() {
    if(this.deviceInfo && typeof (this.deviceInfo as any).validate === 'function') {
      (this.deviceInfo as any).validate();
    }
    if(this.userInfo && typeof (this.userInfo as any).validate === 'function') {
      (this.userInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

