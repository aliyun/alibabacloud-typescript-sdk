// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServiceCredentialRequest extends $dara.Model {
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
   * The name of the service credential. The name must be 1 to 128 characters in length and can contain letters, digits, periods (.), hyphens (-), and underscores (_). Specify at least one of Status and ServiceCredentialName.
   * 
   * @example
   * yourServiceCredentialName
   */
  serviceCredentialName?: string;
  /**
   * @remarks
   * The status of the service credential. Valid values:
   * - Active
   * - Inactive
   * 
   * Specify at least one of Status and ServiceCredentialName.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The logon name of the Resource Access Management (RAM) user. If this parameter is not specified, the service credential of the identity that invokes this operation is modified.
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

