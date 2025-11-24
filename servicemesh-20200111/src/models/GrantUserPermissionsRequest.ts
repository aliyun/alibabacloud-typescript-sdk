// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrantUserPermissionsRequest extends $dara.Model {
  /**
   * @remarks
   * The permissions that are granted to an entity. The content is a string that consists of JSON arrays. You must specify all permissions that you want to grant to an entity. You can add or remove permissions by modifying the content. Field definition of the sample code:
   * 
   * *   `IsCustom`: a parameter that is required by the system. Set the value to `true`.
   * *   `Cluster`: the ID of the Service Mesh (ASM) instance.
   * *   `RoleName`: the name of the permissions. Valid values: `istio-admin`, `istio-ops`, and `istio-readonly`. A value of istio-admin indicates the permissions of ASM administrators. A value of istio-ops indicates the permissions of ASM restricted users. A value of istio-readonly indicates the read-only permissions.
   * *   `IsRamRole`: the entity to which you want to grant the permissions. To grant the permissions to a RAM role, set the value to `true`. Otherwise, set the value to `false`.
   * 
   * @example
   * [{"IsCustom":true,"RoleName":"istio-ops","Cluster":"c57b848115458460583a4260cb713****","RoleType":"custom","IsRamRole":false},{"IsCustom":true,"RoleName":"istio-ops","Cluster":"c4ec191f4e12145c09286ea3e2b8f****","RoleType":"custom","IsRamRole":false}]
   */
  permissions?: string;
  /**
   * @remarks
   * The ID of the RAM user or RAM role.
   * 
   * @example
   * 27852573609480****
   */
  subAccountUserId?: string;
  /**
   * @remarks
   * The IDs of RAM users or RAM roles. You can grant permissions to multiple users at a time.
   */
  subAccountUserIds?: string[];
  static names(): { [key: string]: string } {
    return {
      permissions: 'Permissions',
      subAccountUserId: 'SubAccountUserId',
      subAccountUserIds: 'SubAccountUserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permissions: 'string',
      subAccountUserId: 'string',
      subAccountUserIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.subAccountUserIds)) {
      $dara.Model.validateArray(this.subAccountUserIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

