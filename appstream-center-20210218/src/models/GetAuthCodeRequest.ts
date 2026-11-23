// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAuthCodeRequest extends $dara.Model {
  /**
   * @remarks
   * The account type. Valid values: ad (enterprise AD account) and simple (convenience account).
   * 
   * @example
   * simple
   */
  accountType?: string;
  /**
   * @remarks
   * The Active Directory domain name. This parameter is required when the account type is ad.
   * 
   * @example
   * ad.example.com
   */
  adDomain?: string;
  /**
   * @remarks
   * The password of the enterprise AD account.
   * 
   * @example
   * Qa****7!Z9
   */
  adPassword?: string;
  /**
   * @remarks
   * Specifies whether to synchronously create an EndUserId based on ExternalUserId. This parameter takes effect only when EndUserId is left empty.
   * 
   * @example
   * false
   */
  autoCreateUser?: boolean;
  /**
   * @remarks
   * The username of the Wuying convenience account. The username must be unique within an Alibaba Cloud account. This parameter and ExternalUserId cannot be left empty at the same time.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * The external user ID. This ID is customized by the caller and must be unique within an Alibaba Cloud account. This parameter and ExternalUserId cannot be left empty at the same time.
   * 
   * @example
   * alice
   */
  externalUserId?: string;
  /**
   * @remarks
   * The access policy that restricts the access permissions of the authorization code. If this parameter is left empty, no restrictions are applied.
   * 
   * Syntax:
   * 
   * ```json
   * {
   *       "Version": "1",
   *       "Resource": {
   *             "Type": "<resource type>",
   *             "Id": "<resource ID>"
   *       }
   * }
   * ```
   * 
   * Valid values for <resource type>:
   * 
   * - AppInstanceGroup: app instance group. You can call the ListAppInstanceGroup operation to obtain the ID.
   * - AppInstance: app instance. This is a dedicated field.
   * - App: application. You can call the ListAppInstanceGroup operation to obtain the ID.
   * 
   * @example
   * {
   *       "Version": "1",
   *       "Resource": {
   *             "Type": "AppInstanceGroup",
   *             "Id": "aig-9ciijz60n4xsv****"
   *       }
   * }
   */
  policy?: string;
  /**
   * @remarks
   * The token type. Valid values: LoginToken (logon token) and StsToken (temporary identity credential).
   * 
   * @example
   * StsToken
   */
  tokenType?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      adDomain: 'AdDomain',
      adPassword: 'AdPassword',
      autoCreateUser: 'AutoCreateUser',
      endUserId: 'EndUserId',
      externalUserId: 'ExternalUserId',
      policy: 'Policy',
      tokenType: 'TokenType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      adDomain: 'string',
      adPassword: 'string',
      autoCreateUser: 'boolean',
      endUserId: 'string',
      externalUserId: 'string',
      policy: 'string',
      tokenType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

