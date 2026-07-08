// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAuthCodeRequest extends $dara.Model {
  accountType?: string;
  adDomain?: string;
  /**
   * @remarks
   * Specifies whether to synchronously create an EndUserId based on `ExternalUserId`. This parameter takes effect only when `EndUserId` is empty.
   * 
   * @example
   * false
   */
  autoCreateUser?: boolean;
  /**
   * @remarks
   * The username of the China Desktop Service (China Desktop Service) convenience account, which is unique within an Alibaba Cloud account. This parameter and `ExternalUserId` cannot both be empty.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * The external user ID. This ID is defined by the caller and must be unique within an Alibaba Cloud account. This parameter and `EndUserId` cannot both be empty.
   * 
   * @example
   * alice
   */
  externalUserId?: string;
  /**
   * @remarks
   * The access policy that restricts the access permissions of the authorization code. An empty value indicates no restrictions.
   * 
   * Syntax:
   * 
   * ```json
   * {
   *       "Version": "1",
   *       "Resource": {
   *             "Type": "<Resource type>",
   *             "Id": "<Resource ID>"
   *       }
   * }
   * ```
   * 
   * Valid values of <Resource type>:
   * 
   * - AppInstanceGroup: delivery group. You can call the ListAppInstanceGroup operation to obtain the ID.
   * - AppInstance: application instance (dedicated field).
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
  tokenType?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      adDomain: 'AdDomain',
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

