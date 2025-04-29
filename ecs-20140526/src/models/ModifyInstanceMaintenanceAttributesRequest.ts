// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyInstanceMaintenanceAttributesRequestMaintenanceWindow } from "./ModifyInstanceMaintenanceAttributesRequestMaintenanceWindow";


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

