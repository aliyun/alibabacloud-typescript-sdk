// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCloudAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The member name.
   * 
   * The name must be 2 to 50 characters in length and can contain letters, digits, underscores (_), periods (.), and hyphens (-).
   * 
   * The member name must be unique within the resource directory.
   * 
   * This parameter is required.
   * 
   * @example
   * admin-****
   */
  displayName?: string;
  /**
   * @remarks
   * The email address used to log on to the cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * someone@example.com
   */
  email?: string;
  /**
   * @remarks
   * The ID of the parent folder.
   * 
   * @example
   * fd-bVaRIG****
   */
  parentFolderId?: string;
  /**
   * @remarks
   * The ID of the settlement account. If this parameter is left empty, the current account is used for settlement.
   * 
   * @example
   * 12323344****
   */
  payerAccountId?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      email: 'Email',
      parentFolderId: 'ParentFolderId',
      payerAccountId: 'PayerAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      email: 'string',
      parentFolderId: 'string',
      payerAccountId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

