// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceMaintenanceAttributesResponseBodyMaintenanceAttributesMaintenanceAttributeActionOnMaintenance } from "./DescribeInstanceMaintenanceAttributesResponseBodyMaintenanceAttributesMaintenanceAttributeActionOnMaintenance";
import { DescribeInstanceMaintenanceAttributesResponseBodyMaintenanceAttributesMaintenanceAttributeMaintenanceWindows } from "./DescribeInstanceMaintenanceAttributesResponseBodyMaintenanceAttributesMaintenanceAttributeMaintenanceWindows";


export class DescribeInstanceMaintenanceAttributesResponseBodyMaintenanceAttributesMaintenanceAttribute extends $dara.Model {
  /**
   * @remarks
   * The attributes of the maintenance action of the instance.
   */
  actionOnMaintenance?: DescribeInstanceMaintenanceAttributesResponseBodyMaintenanceAttributesMaintenanceAttributeActionOnMaintenance;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-bp67acfmxazb4p****
   */
  instanceId?: string;
  /**
   * @remarks
   * The maintenance windows.
   */
  maintenanceWindows?: DescribeInstanceMaintenanceAttributesResponseBodyMaintenanceAttributesMaintenanceAttributeMaintenanceWindows;
  /**
   * @remarks
   * Indicates whether an event notification was sent before maintenance.
   * 
   * @example
   * false
   */
  notifyOnMaintenance?: boolean;
  static names(): { [key: string]: string } {
    return {
      actionOnMaintenance: 'ActionOnMaintenance',
      instanceId: 'InstanceId',
      maintenanceWindows: 'MaintenanceWindows',
      notifyOnMaintenance: 'NotifyOnMaintenance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionOnMaintenance: DescribeInstanceMaintenanceAttributesResponseBodyMaintenanceAttributesMaintenanceAttributeActionOnMaintenance,
      instanceId: 'string',
      maintenanceWindows: DescribeInstanceMaintenanceAttributesResponseBodyMaintenanceAttributesMaintenanceAttributeMaintenanceWindows,
      notifyOnMaintenance: 'boolean',
    };
  }

  validate() {
    if(this.actionOnMaintenance && typeof (this.actionOnMaintenance as any).validate === 'function') {
      (this.actionOnMaintenance as any).validate();
    }
    if(this.maintenanceWindows && typeof (this.maintenanceWindows as any).validate === 'function') {
      (this.maintenanceWindows as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

