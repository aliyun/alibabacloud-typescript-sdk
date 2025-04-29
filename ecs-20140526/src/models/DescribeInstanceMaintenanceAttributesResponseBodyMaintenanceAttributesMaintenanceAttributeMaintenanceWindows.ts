// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceMaintenanceAttributesResponseBodyMaintenanceAttributesMaintenanceAttributeMaintenanceWindowsMaintenanceWindow } from "./DescribeInstanceMaintenanceAttributesResponseBodyMaintenanceAttributesMaintenanceAttributeMaintenanceWindowsMaintenanceWindow";


export class DescribeInstanceMaintenanceAttributesResponseBodyMaintenanceAttributesMaintenanceAttributeMaintenanceWindows extends $dara.Model {
  maintenanceWindow?: DescribeInstanceMaintenanceAttributesResponseBodyMaintenanceAttributesMaintenanceAttributeMaintenanceWindowsMaintenanceWindow[];
  static names(): { [key: string]: string } {
    return {
      maintenanceWindow: 'MaintenanceWindow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maintenanceWindow: { 'type': 'array', 'itemType': DescribeInstanceMaintenanceAttributesResponseBodyMaintenanceAttributesMaintenanceAttributeMaintenanceWindowsMaintenanceWindow },
    };
  }

  validate() {
    if(Array.isArray(this.maintenanceWindow)) {
      $dara.Model.validateArray(this.maintenanceWindow);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

