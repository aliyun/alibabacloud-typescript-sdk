// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApplicationRoleResponseBodyApplicationRole extends $dara.Model {
  /**
   * @remarks
   * 应用唯一标识
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * 应用角色的唯一标识
   * 
   * @example
   * approle_01kh2vuo8v9splv8maak1d22rxxxx
   */
  applicationRoleId?: string;
  /**
   * @remarks
   * 应用角色名称
   * 
   * @example
   * Admin Role
   */
  applicationRoleName?: string;
  /**
   * @remarks
   * 应用角色值
   * 
   * @example
   * admin_role
   */
  applicationRoleValue?: string;
  /**
   * @remarks
   * 应用角色描述
   * 
   * @example
   * Admin Role Description
   */
  description?: string;
  /**
   * @remarks
   * EIAM 实例唯一标识
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
  applicationRole?: GetApplicationRoleResponseBodyApplicationRole;
  /**
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

