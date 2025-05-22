// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetServiceProvisionsResponseBodyServiceProvisionsRoleProvisionRoles } from "./GetServiceProvisionsResponseBodyServiceProvisionsRoleProvisionRoles";


export class GetServiceProvisionsResponseBodyServiceProvisionsRoleProvision extends $dara.Model {
  /**
   * @remarks
   * The authorization URL of the RAM role.
   * 
   * > This parameter is returned if Created is set to false.
   * 
   * @example
   * https://ehpc.console.aliyun.com/
   */
  authorizationURL?: string;
  /**
   * @remarks
   * The RAM roles of the service.
   */
  roles?: GetServiceProvisionsResponseBodyServiceProvisionsRoleProvisionRoles[];
  static names(): { [key: string]: string } {
    return {
      authorizationURL: 'AuthorizationURL',
      roles: 'Roles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationURL: 'string',
      roles: { 'type': 'array', 'itemType': GetServiceProvisionsResponseBodyServiceProvisionsRoleProvisionRoles },
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

