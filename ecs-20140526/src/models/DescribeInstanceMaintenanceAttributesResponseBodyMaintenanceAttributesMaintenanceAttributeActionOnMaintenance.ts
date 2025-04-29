// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceMaintenanceAttributesResponseBodyMaintenanceAttributesMaintenanceAttributeActionOnMaintenanceSupportedValues } from "./DescribeInstanceMaintenanceAttributesResponseBodyMaintenanceAttributesMaintenanceAttributeActionOnMaintenanceSupportedValues";


export class DescribeInstanceMaintenanceAttributesResponseBodyMaintenanceAttributesMaintenanceAttributeActionOnMaintenance extends $dara.Model {
  /**
   * @remarks
   * The default maintenance action.
   * 
   * @example
   * AutoRecover
   */
  defaultValue?: string;
  /**
   * @remarks
   * The supported maintenance actions.
   */
  supportedValues?: DescribeInstanceMaintenanceAttributesResponseBodyMaintenanceAttributesMaintenanceAttributeActionOnMaintenanceSupportedValues;
  /**
   * @remarks
   * The current maintenance action. Valid values:
   * 
   * *   Stop: stops the instance.
   * *   AutoRecover: automatically recovers the instance.
   * *   AutoRedeploy: redeploys the instance, which may damage the data disks attached to the instance.
   * 
   * @example
   * Stop
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      supportedValues: 'SupportedValues',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      supportedValues: DescribeInstanceMaintenanceAttributesResponseBodyMaintenanceAttributesMaintenanceAttributeActionOnMaintenanceSupportedValues,
      value: 'string',
    };
  }

  validate() {
    if(this.supportedValues && typeof (this.supportedValues as any).validate === 'function') {
      (this.supportedValues as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

