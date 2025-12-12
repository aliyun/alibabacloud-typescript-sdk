// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceLinkedRoleResponseBodyRole extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the role.
   * 
   * @example
   * acs:ram::177242285274****:role/aliyunserviceroleforpolardb
   */
  arn?: string;
  /**
   * @remarks
   * The document of the trust policy for the role.
   * 
   * @example
   * {\\"Statement\\":[{\\"Action\\":\\"sts:AssumeRole\\",\\"Effect\\":\\"Allow\\",\\"Principal\\":{\\"Service\\":[\\"polardb.aliyuncs.com\\"]}}],\\"Version\\":\\"1\\"}
   */
  assumeRolePolicyDocument?: string;
  /**
   * @remarks
   * The time when the role was created. The time is displayed in UTC.
   * 
   * @example
   * 2020-06-30T08:14:16Z
   */
  createDate?: string;
  /**
   * @remarks
   * The description of the role.
   * 
   * @example
   * Service Linked Role for PolarDB. PolarDB will use this role to access your resources in other services.
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the role is a service-linked role. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  isServiceLinkedRole?: boolean;
  /**
   * @remarks
   * The ID of the role.
   * 
   * @example
   * 32833240981067****
   */
  roleId?: string;
  /**
   * @remarks
   * The name of the role.
   * 
   * @example
   * AliyunServiceRoleForPolarDB
   */
  roleName?: string;
  /**
   * @remarks
   * The role name that uses a domain name as the suffix.
   * 
   * @example
   * AliyunServiceRoleForPolarDB@role.test.onaliyunservice.com
   */
  rolePrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      assumeRolePolicyDocument: 'AssumeRolePolicyDocument',
      createDate: 'CreateDate',
      description: 'Description',
      isServiceLinkedRole: 'IsServiceLinkedRole',
      roleId: 'RoleId',
      roleName: 'RoleName',
      rolePrincipalName: 'RolePrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      assumeRolePolicyDocument: 'string',
      createDate: 'string',
      description: 'string',
      isServiceLinkedRole: 'boolean',
      roleId: 'string',
      roleName: 'string',
      rolePrincipalName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceLinkedRoleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FE58D7CF-03BC-432A-B42D-BC3390C8C2E1
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the role.
   */
  role?: CreateServiceLinkedRoleResponseBodyRole;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      role: CreateServiceLinkedRoleResponseBodyRole,
    };
  }

  validate() {
    if(this.role && typeof (this.role as any).validate === 'function') {
      (this.role as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

