// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApplicationRoleResponseBodyApplicationRole extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The ID of the application role.
   * 
   * @example
   * approle_01kh2vuo8v9splv8maak1d22rxxxx
   */
  applicationRoleId?: string;
  /**
   * @remarks
   * The name of the application role.
   * 
   * @example
   * Admin Role
   */
  applicationRoleName?: string;
  /**
   * @remarks
   * The value of the application role.
   * 
   * @example
   * admin_role
   */
  applicationRoleValue?: string;
  /**
   * @remarks
   * The description of the application role.
   * 
   * @example
   * Admin Role Description
   */
  description?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      applicationRoleId: 'ApplicationRoleId',
      applicationRoleName: 'ApplicationRoleName',
      applicationRoleValue: 'ApplicationRoleValue',
      description: 'Description',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      applicationRoleId: 'string',
      applicationRoleName: 'string',
      applicationRoleValue: 'string',
      description: 'string',
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

export class GetApplicationRoleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the application role.
   */
  applicationRole?: GetApplicationRoleResponseBodyApplicationRole;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationRole: 'ApplicationRole',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationRole: GetApplicationRoleResponseBodyApplicationRole,
      requestId: 'string',
    };
  }

  validate() {
    if(this.applicationRole && typeof (this.applicationRole as any).validate === 'function') {
      (this.applicationRole as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

