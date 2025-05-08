// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSecurityGroupAttributeResponseBodyPermissionsPermission } from "./DescribeSecurityGroupAttributeResponseBodyPermissionsPermission";


export class DescribeSecurityGroupAttributeResponseBodyPermissions extends $dara.Model {
  permission?: DescribeSecurityGroupAttributeResponseBodyPermissionsPermission[];
  static names(): { [key: string]: string } {
    return {
      permission: 'Permission',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permission: { 'type': 'array', 'itemType': DescribeSecurityGroupAttributeResponseBodyPermissionsPermission },
    };
  }

  validate() {
    if(Array.isArray(this.permission)) {
      $dara.Model.validateArray(this.permission);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

