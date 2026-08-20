// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddUserVpcAuthorizationRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization channel. Valid values:
   * 
   * - AUTH_CODE: verification code authorization.
   * - RESOURCE_DIRECTORY: resource directory authorization.
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
   * > - If AuthChannel is empty or set to AUTH_CODE, specify the verification code.  
   * > - In other cases, specify a random 6-digit number, such as 123456.
   * 
   * @example
   * 123456
   */
  authCode?: string;
  /**
   * @remarks
   * The authorization type. Valid values:
   * 
   * - NORMAL: normal authorization.
   * - CLOUD_PRODUCT: cloud product authorization.
   * 
   * @example
   * NORMAL
   */
  authType?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that owns the authorized resource.
   * >Cross-account authorization only supports Alibaba Cloud accounts (primary accounts) and does not support RAM users. Only accounts within the same site can be associated, such as between Alibaba Cloud China Website (www.aliyun.com) accounts or between Alibaba Cloud International Website (www.alibabacloud.com) accounts. Cross-site association is not supported, such as between a China Website account and an International Website account.
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

