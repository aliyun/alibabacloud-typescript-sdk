// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceMaintenanceAttributesResponseBodyMaintenanceAttributesMaintenanceAttributeActionOnMaintenanceSupportedValues extends $dara.Model {
  supportedValue?: string[];
  static names(): { [key: string]: string } {
    return {
      supportedValue: 'SupportedValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedValue: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.supportedValue)) {
      $dara.Model.validateArray(this.supportedValue);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class DescribeInstanceMaintenanceAttributesResponseBodyMaintenanceAttributesMaintenanceAttributeMaintenanceWindowsMaintenanceWindow extends $dara.Model {
  /**
   * @remarks
   * The end time of the maintenance window.
   * 
   * @example
   * 18:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The start time of the maintenance window.
   * 
   * @example
   * 02:00:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class DescribeInstanceMaintenanceAttributesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maintenance attributes.
   */
  maintenanceAttributes?: DescribeInstanceMaintenanceAttributesResponseBodyMaintenanceAttributes;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of queried maintenance attributes.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maintenanceAttributes: 'MaintenanceAttributes',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maintenanceAttributes: DescribeInstanceMaintenanceAttributesResponseBodyMaintenanceAttributes,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.maintenanceAttributes && typeof (this.maintenanceAttributes as any).validate === 'function') {
      (this.maintenanceAttributes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

