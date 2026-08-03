// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckAuthCodeBindForExtRequestUserInfo extends $dara.Model {
  /**
   * @remarks
   * Value corresponding to the encoding type. Enter the Project ID of the product\\"s project here. You can view it in the Tmall Genie AI platform console.
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
   * User identifier. Enter the value of userOpenId or userUnionId.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  id?: string;
  /**
   * @remarks
   * The type of User ID:  
   * OPEN_ID: The default User ID identity.  
   * UNION_ID: The User ID identity at the organization dimension, which requires prior request for an organization on the Open Platform.
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
   * 1***2
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

export class CheckAuthCodeBindForExtRequest extends $dara.Model {
  /**
   * @remarks
   * The authCode obtained by specifying a user ID
   * 
   * This parameter is required.
   * 
   * @example
   * Aexfgc
   */
  authCode?: string;
  /**
   * @remarks
   * The value corresponding to the encoding type. Enter the Project ID of the project containing the ProductKey of this product in the Tmall Genie AI platform.
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
   * List of user identifier information.
   * 
   * This parameter is required.
   */
  userInfo?: CheckAuthCodeBindForExtRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCode: 'string',
      encodeKey: 'string',
      encodeType: 'string',
      userInfo: CheckAuthCodeBindForExtRequestUserInfo,
    };
  }

  validate() {
    if(this.userInfo && typeof (this.userInfo as any).validate === 'function') {
      (this.userInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

