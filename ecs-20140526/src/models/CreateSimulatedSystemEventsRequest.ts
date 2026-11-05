// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSimulatedSystemEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the system event. Valid values: 
   * 
   * - SystemMaintenance.Reboot: The instance is restarted due to system maintenance.
   * - SystemFailure.Reboot: The instance is restarted due to a system error.
   * - InstanceFailure.Reboot: The instance is restarted due to an instance error.
   * - SystemMaintenance.Stop: The instance is stopped due to system maintenance.
   * - SystemMaintenance.Redeploy: The instance is redeployed due to system maintenance.
   * - SystemFailure.Redeploy: The instance is redeployed due to a system error.
   * - SystemFailure.Stop: The instance is stopped due to a system error.
   * - InstanceFailure.Reboot: The instance is restarted due to an instance error.
   * 
   * This parameter is required.
   * 
   * @example
   * SystemMaintenance.Reboot
   */
  eventType?: string;
  /**
   * @remarks
   * The IDs of the ECS instances. You can specify up to 100 instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp1gtjxuuvwj17zr****
   */
  instanceId?: string[];
  /**
   * @remarks
   * The scheduled start time of the event. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * > When the TriggerRealOps parameter is set to false, you must specify the NotBefore parameter.
   * 
   * @example
   * 2018-12-01T06:32:31Z
   */
  notBefore?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether to trigger actual O&M operations. Valid values:<br>- true: Triggers actual O&M operations. The system actually stops or releases the instance. Proceed with caution during testing, or select an instance that does not run business workloads for testing. The O&M event is generated approximately 1 minute after the API call succeeds.<br>- false: Simulates only event notifications without affecting the actual lifecycle of the instance. This is the default value.
   * 
   * @example
   * false
   */
  triggerRealOps?: boolean;
  static names(): { [key: string]: string } {
    return {
      eventType: 'EventType',
      instanceId: 'InstanceId',
      notBefore: 'NotBefore',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      triggerRealOps: 'TriggerRealOps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventType: 'string',
      instanceId: { 'type': 'array', 'itemType': 'string' },
      notBefore: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      triggerRealOps: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.instanceId)) {
      $dara.Model.validateArray(this.instanceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

