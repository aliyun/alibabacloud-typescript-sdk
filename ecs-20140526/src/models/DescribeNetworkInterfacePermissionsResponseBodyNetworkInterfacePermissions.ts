// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNetworkInterfacePermissionsResponseBodyNetworkInterfacePermissionsNetworkInterfacePermission } from "./DescribeNetworkInterfacePermissionsResponseBodyNetworkInterfacePermissionsNetworkInterfacePermission";


export class DescribeNetworkInterfacePermissionsResponseBodyNetworkInterfacePermissions extends $dara.Model {
  networkInterfacePermission?: DescribeNetworkInterfacePermissionsResponseBodyNetworkInterfacePermissionsNetworkInterfacePermission[];
  static names(): { [key: string]: string } {
    return {
      networkInterfacePermission: 'NetworkInterfacePermission',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkInterfacePermission: { 'type': 'array', 'itemType': DescribeNetworkInterfacePermissionsResponseBodyNetworkInterfacePermissionsNetworkInterfacePermission },
    };
  }

  validate() {
    if(Array.isArray(this.networkInterfacePermission)) {
      $dara.Model.validateArray(this.networkInterfacePermission);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

