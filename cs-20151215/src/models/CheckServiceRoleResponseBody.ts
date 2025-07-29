// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckServiceRoleResponseBodyRoles extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the service role is assigned to ACK.
   * 
   * Valid values:
   * 
   * *   true: The role is assigned to ACK.
   * *   false: The role is not assigned to ACK.
   * 
   * @example
   * true
   */
  granted?: boolean;
  /**
   * @remarks
   * The message that is displayed for a role that is not assigned to ACK.
   * 
   * @example
   * The role does not exist: AliyunCSManagedAutoScalerRole
   */
  message?: string;
  /**
   * @remarks
   * The name of the service role.
   * 
   * @example
   * AliyunCSManagedAutoScalerRole
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      granted: 'granted',
      message: 'message',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      granted: 'boolean',
      message: 'string',
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

export class CheckServiceRoleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The check results.
   */
  roles?: CheckServiceRoleResponseBodyRoles[];
  static names(): { [key: string]: string } {
    return {
      roles: 'roles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roles: { 'type': 'array', 'itemType': CheckServiceRoleResponseBodyRoles },
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

