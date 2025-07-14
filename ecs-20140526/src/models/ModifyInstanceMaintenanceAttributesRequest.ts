// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceMaintenanceAttributesRequestMaintenanceWindow extends $dara.Model {
  /**
   * @remarks
   * The end time of the maintenance window. The time must be on the hour. You must configure both StartTime and EndTime. The value of EndTime must be 1 to 23 hours later than the value of StartTime. Specify the time in the `HH:mm:ss` format. The time must be in UTC+8. Set the value of N to 1.
   * 
   * @example
   * 18:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The start time of the maintenance window. The time must be on the hour. You must configure both StartTime and EndTime. The value of EndTime must be 1 to 23 hours later than the value of StartTime. Specify the time in the `HH:mm:ss` format. The time must be in UTC+8. Set the value of N to 1.
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

export class ModifyInstanceMaintenanceAttributesRequest extends $dara.Model {
  /**
   * @remarks
   * The maintenance action. Valid values:
   * 
   * *   Stop: stops the instance.
   * *   AutoRecover: automatically recovers the instance.
   * *   AutoRedeploy: redeploys the instance, which may damage the data disks attached to the instance.
   * 
   * @example
   * AutoRecover
   */
  actionOnMaintenance?: string;
  /**
   * @remarks
   * The ID of instance N. Valid values of N: 1 to 100.
   * 
   * @example
   * i-bp67acfmxazb4ph****
   */
  instanceId?: string[];
  /**
   * @remarks
   * The maintenance windows.
   */
  maintenanceWindow?: ModifyInstanceMaintenanceAttributesRequestMaintenanceWindow[];
  /**
   * @remarks
   * Specifies whether to send an event notification before maintenance. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  notifyOnMaintenance?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      actionOnMaintenance: 'ActionOnMaintenance',
      instanceId: 'InstanceId',
      maintenanceWindow: 'MaintenanceWindow',
      notifyOnMaintenance: 'NotifyOnMaintenance',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionOnMaintenance: 'string',
      instanceId: { 'type': 'array', 'itemType': 'string' },
      maintenanceWindow: { 'type': 'array', 'itemType': ModifyInstanceMaintenanceAttributesRequestMaintenanceWindow },
      notifyOnMaintenance: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceId)) {
      $dara.Model.validateArray(this.instanceId);
    }
    if(Array.isArray(this.maintenanceWindow)) {
      $dara.Model.validateArray(this.maintenanceWindow);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

