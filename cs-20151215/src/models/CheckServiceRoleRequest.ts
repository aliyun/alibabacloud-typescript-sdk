// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckServiceRoleRequestRoles extends $dara.Model {
  /**
   * @remarks
   * The server role name. For more information about the service roles and their permissions in ACK, see [ACK roles](https://help.aliyun.com/document_detail/86483.html).
   * 
   * This parameter is required.
   * 
   * @example
   * AliyunCSManagedAutoScalerRole
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckServiceRoleRequest extends $dara.Model {
  /**
   * @remarks
   * The list of service roles you want to check.
   * 
   * This parameter is required.
   */
  roles?: CheckServiceRoleRequestRoles[];
  static names(): { [key: string]: string } {
    return {
      roles: 'roles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roles: { 'type': 'array', 'itemType': CheckServiceRoleRequestRoles },
    };
  }

  validate() {
    if(Array.isArray(this.roles)) {
      $dara.Model.validateArray(this.roles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

