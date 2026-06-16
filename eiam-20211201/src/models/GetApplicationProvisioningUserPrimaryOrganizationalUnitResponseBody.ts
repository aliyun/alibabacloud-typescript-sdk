// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApplicationProvisioningUserPrimaryOrganizationalUnitResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @remarks
   * The user\\"s primary organizational unit for application synchronization.
   * 
   * @example
   * ou_12121xxxxxx
   */
  userPrimaryOrganizationalUnitId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userPrimaryOrganizationalUnitId: 'UserPrimaryOrganizationalUnitId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userPrimaryOrganizationalUnitId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

