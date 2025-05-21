// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ServiceLinkedRole extends $dara.Model {
  arn?: string;
  assumeRolePolicyDocument?: string;
  createDate?: string;
  description?: string;
  isServiceLinkedRole?: boolean;
  roleId?: string;
  roleName?: string;
  rolePrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'arn',
      assumeRolePolicyDocument: 'assumeRolePolicyDocument',
      createDate: 'createDate',
      description: 'description',
      isServiceLinkedRole: 'isServiceLinkedRole',
      roleId: 'roleId',
      roleName: 'roleName',
      rolePrincipalName: 'rolePrincipalName',
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

