// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckApplicationProvisioningUserPrimaryOrganizationalUnitResponseBodyCheckApplicationProvisioningUserPrimaryOuResult extends $dara.Model {
  /**
   * @remarks
   * Indicates if the authorization is granted.
   */
  allowAuthorization?: boolean;
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      allowAuthorization: 'AllowAuthorization',
      applicationId: 'ApplicationId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowAuthorization: 'boolean',
      applicationId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckApplicationProvisioningUserPrimaryOrganizationalUnitResponseBody extends $dara.Model {
  /**
   * @remarks
   * The authorization information.
   */
  checkApplicationProvisioningUserPrimaryOuResult?: CheckApplicationProvisioningUserPrimaryOrganizationalUnitResponseBodyCheckApplicationProvisioningUserPrimaryOuResult;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      checkApplicationProvisioningUserPrimaryOuResult: 'CheckApplicationProvisioningUserPrimaryOuResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkApplicationProvisioningUserPrimaryOuResult: CheckApplicationProvisioningUserPrimaryOrganizationalUnitResponseBodyCheckApplicationProvisioningUserPrimaryOuResult,
      requestId: 'string',
    };
  }

  validate() {
    if(this.checkApplicationProvisioningUserPrimaryOuResult && typeof (this.checkApplicationProvisioningUserPrimaryOuResult as any).validate === 'function') {
      (this.checkApplicationProvisioningUserPrimaryOuResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

