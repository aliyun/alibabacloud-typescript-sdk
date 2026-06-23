// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckServiceRoleResponseBodyRoles extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the service role has been granted.
   * 
   * @example
   * true
   */
  granted?: boolean;
  /**
   * @remarks
   * The prompt message returned when the service role is not granted.
   * 
   * @example
   * The role does not exist: AliyunCSManagedAutoScalerRole
   */
  message?: string;
  /**
   * @remarks
   * The service role name.
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
   * The service role check results.
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

