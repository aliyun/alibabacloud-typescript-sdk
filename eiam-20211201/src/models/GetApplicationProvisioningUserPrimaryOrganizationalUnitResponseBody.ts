// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApplicationProvisioningUserPrimaryOrganizationalUnitResponseBody extends $dara.Model {
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
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

