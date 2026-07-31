// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceMaintenanceAttributesRequestMaintenanceWindow extends $dara.Model {
  /**
   * @remarks
   * The end time of the time window. The time must be on the hour. Minutes and seconds cannot be specified. The start time and end time must be specified together, and the interval between them must be 1 to 23 hours. The time is in the UTC+8 time zone and in the `HH:mm:ss` format. Valid values of N: 1. Only one time window can be specified.
   * 
   * @example
   * 18:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The start time of the time window. The time must be on the hour. Minutes and seconds cannot be specified. The start time and end time must be specified together, and the interval between them must be 1 to 23 hours. The time is in the UTC+8 time zone and in the `HH:mm:ss` format. Valid values of N: 1. Only one time window can be specified.
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
   * - Stop: The instance is stopped (that is, the instance goes down).
   * - AutoRecover: The instance is automatically recovered.
   * - AutoRedeploy: The instance is redeployed upon downtime, with possible data disk loss.
   * 
   * @example
   * AutoRecover
   */
  actionOnMaintenance?: string;
  /**
   * @remarks
   * The instance ID. Valid values of N: 1 to 100.
   * 
   * @example
   * i-bp67acfmxazb4ph****
   */
  instanceId?: string[];
  /**
   * @remarks
   * The list of maintenance time windows.
   */
  maintenanceWindow?: ModifyInstanceMaintenanceAttributesRequestMaintenanceWindow[];
  /**
   * @remarks
   * Specifies whether to send an event notification before instance downtime maintenance. Valid values:
   * 
   * - true: An event notification is sent.
   * - false: No event notification is sent.
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
   * The region ID of the instance. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
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

