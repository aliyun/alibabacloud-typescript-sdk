// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServiceCredentialRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the service credential.
   * 
   * This parameter is required.
   * 
   * @example
   * SC****************
   */
  serviceCredentialId?: string;
  /**
   * @remarks
   * The name of the service credential. The name must be 1 to 128 characters in length and can contain letters, digits, periods (.), hyphens (-), and underscores (_). You must specify at least one of Status and ServiceCredentialName.
   * 
   * @example
   * yourServiceCredentialName
   */
  serviceCredentialName?: string;
  /**
   * @remarks
   * The status of the service credential. Valid values: Active, Inactive. You must specify at least one of Status and ServiceCredentialName.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The logon name of the Resource Access Management (RAM) user. If not specified, the service credential of the current invoke identity is updated.
   * 
   * @example
   * test@example.onaliyun.com
   */
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      serviceCredentialId: 'ServiceCredentialId',
      serviceCredentialName: 'ServiceCredentialName',
      status: 'Status',
      userPrincipalName: 'UserPrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceCredentialId: 'string',
      serviceCredentialName: 'string',
      status: 'string',
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

