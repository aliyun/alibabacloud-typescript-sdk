// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceMaintenanceAttributesResponseBodyMaintenanceAttributesMaintenanceAttribute } from "./DescribeInstanceMaintenanceAttributesResponseBodyMaintenanceAttributesMaintenanceAttribute";


export class DescribeInstanceMaintenanceAttributesResponseBodyMaintenanceAttributes extends $dara.Model {
  maintenanceAttribute?: DescribeInstanceMaintenanceAttributesResponseBodyMaintenanceAttributesMaintenanceAttribute[];
  static names(): { [key: string]: string } {
    return {
      maintenanceAttribute: 'MaintenanceAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maintenanceAttribute: { 'type': 'array', 'itemType': DescribeInstanceMaintenanceAttributesResponseBodyMaintenanceAttributesMaintenanceAttribute },
    };
  }

  validate() {
    if(Array.isArray(this.maintenanceAttribute)) {
      $dara.Model.validateArray(this.maintenanceAttribute);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

