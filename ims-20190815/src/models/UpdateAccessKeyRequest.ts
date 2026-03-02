// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAccessKeyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  status?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userAccessKeyId?: string;
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      userAccessKeyId: 'UserAccessKeyId',
      userPrincipalName: 'UserPrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      userAccessKeyId: 'string',
      userPrincipalName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

