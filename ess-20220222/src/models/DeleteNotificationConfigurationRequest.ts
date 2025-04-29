// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteNotificationConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the notification recipient. Specify the value in one of the following formats:
   * 
   * *   If you specify CloudMonitor as the notification recipient, specify the value in the acs:ess:{region-id}:{account-id}:cloudmonitor format.
   * *   If you specify a Simple Message Queue (SMQ, formerly MNS) queue as the notification recipient, specify the value in the acs:mns:{region-id}:{account-id}:queue/{queuename} format.
   * *   If you specify an SMQ queue as the notification recipient, specify the value in the acs:mns:{region-id}:{account-id}:topic/{topicname} format.
   * 
   * The variables in the preceding value formats have the following meanings:
   * 
   * *   region-id: the region ID of the scaling group.
   * *   account-id: the ID of your Alibaba Cloud cloud.
   * *   queuename: the name of the SMQ queue.
   * *   topicname: the name of the SMQ topic.
   * 
   * This parameter is required.
   * 
   * @example
   * acs:ess:cn-beijing:161456884340****:cloudmonitor
   */
  notificationArn?: string;
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
   * asg-bp18p2yfxow2dloq****
   */
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      notificationArn: 'NotificationArn',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notificationArn: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

