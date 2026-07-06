// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteServiceCredentialRequest extends $dara.Model {
  /**
   * @remarks
   * The service credential ID.
   * 
   * This parameter is required.
   * 
   * @example
   * SC****************
   */
  serviceCredentialId?: string;
  /**
   * @remarks
   * The logon name of the Resource Access Management (RAM) user. If this parameter is not specified, the service credential of the identity that invokes this operation is deleted.
   * 
   * @example
   * test@example.onaliyun.com
   * 
   * **if can be null:**
   * false
   */
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      serviceCredentialId: 'ServiceCredentialId',
      userPrincipalName: 'UserPrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceCredentialId: 'string',
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

