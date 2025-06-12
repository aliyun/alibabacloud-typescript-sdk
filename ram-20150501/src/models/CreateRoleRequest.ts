// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateRoleRequestTag } from "./CreateRoleRequestTag";


export class CreateRoleRequest extends $dara.Model {
  /**
   * @remarks
   * The trust policy that specifies one or more trusted entities to assume the RAM role. The trusted entities can be Alibaba Cloud accounts, Alibaba Cloud services, or identity providers (IdPs).
   * 
   * >  RAM users cannot assume the RAM roles of trusted Alibaba Cloud services.
   * 
   * @example
   * {"Statement":[{"Action":"sts:AssumeRole","Effect":"Allow","Principal":{"RAM":"acs:ram::123456789012****:root"}}],"Version":"1"}
   */
  assumeRolePolicyDocument?: string;
  /**
   * @remarks
   * The description of the RAM role.
   * 
   * The description must be 1 to 1,024 characters in length.
   * 
   * @example
   * ECS administrator
   */
  description?: string;
  /**
   * @remarks
   * The maximum session time of the RAM role.
   * 
   * Valid values: 3600 to 43200. Unit: seconds. Default value: 3600.
   * 
   * If you do not specify this parameter, the default value is used.
   * 
   * @example
   * 3600
   */
  maxSessionDuration?: number;
  /**
   * @remarks
   * The name of the RAM role.
   * 
   * The name must be 1 to 64 characters in length, and can contain letters, digits, periods (.), and hyphens (-).
   * 
   * @example
   * ECSAdmin
   */
  roleName?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: CreateRoleRequestTag[];
  static names(): { [key: string]: string } {
    return {
      assumeRolePolicyDocument: 'AssumeRolePolicyDocument',
      description: 'Description',
      maxSessionDuration: 'MaxSessionDuration',
      roleName: 'RoleName',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumeRolePolicyDocument: 'string',
      description: 'string',
      maxSessionDuration: 'number',
      roleName: 'string',
      tag: { 'type': 'array', 'itemType': CreateRoleRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

