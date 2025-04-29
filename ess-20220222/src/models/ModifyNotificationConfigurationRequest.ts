// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyNotificationConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the notification recipient. The following list describes the value formats of this parameter:
   * 
   * *   If you specify CloudMonitor as the notification recipient, specify the value in the `acs:ess:{region-id}:{account-id}:cloudmonitor` format.
   * *   If you specify a Simple Message Queue (SMQ) queue as the notification recipient, specify the value in the `acs:mns:{region-id}:{account-id}:queue/{queuename}` format.
   * *   If you specify an SMQ topic as the notification recipient, specify the value in the `acs:mns:{region-id}:{account-id}:topic/{topicname}` format.
   * 
   * The variables in the preceding value formats have the following meanings:
   * 
   * *   region-id: the region ID of your scaling group.
   * *   account-id: the ID of your Alibaba Cloud account.
   * *   queuename: the name of the SMQ queue.
   * *   topicname: the name of the SMQ topic.
   * 
   * This parameter is required.
   * 
   * @example
   * acs:ess:cn-beijing:161456884340****:cloudmonitor
   */
  notificationArn?: string;
  /**
   * @remarks
   * The event types.
   * 
   * This parameter is required.
   */
  notificationTypes?: string[];
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the scaling group.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The ID of the scaling group.
   * 
   * This parameter is required.
   * 
   * @example
   * asg-bp1igpak5ft1flyp****
   */
  scalingGroupId?: string;
  /**
   * @remarks
   * The time zone of the notification. Specify the value in UTC. For example, a value of UTC+8 specifies that the time is 8 hours ahead of Coordinated Universal Time, and a value of UTC-7 specifies that the time is 7 hours behind Coordinated Universal Time.
   * 
   * @example
   * UTC+8
   */
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      notificationArn: 'NotificationArn',
      notificationTypes: 'NotificationTypes',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
      timeZone: 'TimeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notificationArn: 'string',
      notificationTypes: { 'type': 'array', 'itemType': 'string' },
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
      timeZone: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.notificationTypes)) {
      $dara.Model.validateArray(this.notificationTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

