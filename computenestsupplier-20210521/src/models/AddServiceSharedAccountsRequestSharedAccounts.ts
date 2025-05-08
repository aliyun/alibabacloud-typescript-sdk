// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddServiceSharedAccountsRequestSharedAccounts extends $dara.Model {
  /**
   * @remarks
   * The permissions on the service. Valid values:
   * 
   * *   Deployable: Permissions to deploy the service.
   * *   Accessible: Permissions to access the service.
   * 
   * This parameter is required.
   * 
   * @example
   * Accessible
   */
  permission?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the user.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  userAliUid?: string;
  static names(): { [key: string]: string } {
    return {
      permission: 'Permission',
      userAliUid: 'UserAliUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permission: 'string',
      userAliUid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

