// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddUserVpcAuthorizationRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization channel. Valid values:
   * 
   * *   AUTH_CODE: A verification code is used for authorization.
   * *   RESOURCE_DIRECTORY: A resource directory is used for authorization.
   * 
   * Default value: AUTH_CODE.
   * 
   * @example
   * AUTH_CODE
   */
  authChannel?: string;
  /**
   * @remarks
   * The verification code.
   * 
   * > 
   * 
   * *   The specified authentication code is used if the value of AuthChannel is left empty or is set to AUTH_CODE.
   * 
   * *   In other cases, a random 6-digit number is used. Example: 123456.
   * 
   * @example
   * 123456
   */
  authCode?: string;
  /**
   * @remarks
   * The authorization scope. Valid values:
   * 
   * *   NORMAL: general authorization
   * *   CLOUD_PRODUCT: cloud service-related authorization
   * 
   * @example
   * NORMAL
   */
  authType?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the permissions on the resources are granted.
   * 
   * >  You can set an effective scope across accounts only by using an Alibaba Cloud account instead of a RAM user. You can set an effective scope across accounts registered on the same site. For example, you can perform the operation across accounts that are both registered on the Alibaba Cloud China site or Alibaba Cloud international site. You cannot set an effective scope across accounts registered on different sites. For example, you cannot perform the operation across accounts that are separately registered on the Alibaba Cloud China site and Alibaba Cloud international site.
   * 
   * This parameter is required.
   * 
   * @example
   * 141339776561****
   */
  authorizedUserId?: number;
  static names(): { [key: string]: string } {
    return {
      authChannel: 'AuthChannel',
      authCode: 'AuthCode',
      authType: 'AuthType',
      authorizedUserId: 'AuthorizedUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authChannel: 'string',
      authCode: 'string',
      authType: 'string',
      authorizedUserId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

