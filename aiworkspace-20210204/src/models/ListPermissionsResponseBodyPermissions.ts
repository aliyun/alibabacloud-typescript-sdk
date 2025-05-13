// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPermissionsResponseBodyPermissionsPermissionRules } from "./ListPermissionsResponseBodyPermissionsPermissionRules";


export class ListPermissionsResponseBodyPermissions extends $dara.Model {
  /**
   * @remarks
   * The permission name, which is unique in a region. For more information about permissions, see [Appendix: Roles and permissions](https://help.aliyun.com/document_detail/2840449.html). The example value PaiDLC:GetTensorboard indicates the permission to view details about a TensorBoard job on the Deep Learning Containers (DLC) page.
   * 
   * @example
   * PaiDLC:GetTensorboard
   */
  permissionCode?: string;
  /**
   * @remarks
   * The permission rules.
   */
  permissionRules?: ListPermissionsResponseBodyPermissionsPermissionRules[];
  static names(): { [key: string]: string } {
    return {
      permissionCode: 'PermissionCode',
      permissionRules: 'PermissionRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permissionCode: 'string',
      permissionRules: { 'type': 'array', 'itemType': ListPermissionsResponseBodyPermissionsPermissionRules },
    };
  }

  validate() {
    if(Array.isArray(this.permissionRules)) {
      $dara.Model.validateArray(this.permissionRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

