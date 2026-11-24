// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNotificationConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * The encoding method for the notification content. Valid values:
   * 
   * - PlainText: no encoding. The content is transmitted in plaintext.
   * - Base64: Base64 encoding.
   * 
   * Default value: Base64.
   * > The Settings for this parameter are supported only for MNS notification recipients.
   * 
   * @example
   * PlainText
   */
  messageEncoding?: string;
  /**
   * @remarks
   * The identifier of the notification recipient. The following notification methods are supported when you configure the Settings for this parameter:
   * 
   * - Cloud monitoring. Format: `acs:ess:{region-id}:{account-id}:cloudmonitor`.
   * - MNS queue. Format: `acs:mns:{region-id}:{account-id}:queue/{queuename}`.
   * - MNS topic. Format: `acs:mns:{region-id}:{account-id}:topic/{topicname}`.
   * 
   * Variables in the formats:
   * - `region-id`: the ID of the region where the scaling group resides.
   * - `account-id`: the Alibaba Cloud account ID. You can invoke the STS GetCallerIdentity operation to obtain the AccountId response parameter, or view it by clicking your profile picture in the upper-right corner of the Alibaba Cloud Management Console.
   * - `queuename`: the name of the MNS queue.
   * - `topicname`: the name of the MNS topic.
   * 
   * This parameter is required.
   * 
   * @example
   * acs:mns:cn-beijing:161456884340****:queue/modifyLifecycleHo****
   */
  notificationArn?: string;
  /**
   * @remarks
   * The types of Auto Scaling events and resource changes for which you want to receive notifications. You can specify multiple values by using a repeated list.
   * 
   * You can invoke the DescribeNotificationTypes operation to query parameter values.
   * 
   * This parameter is required.
   */
  notificationTypes?: string[];
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region to which the scaling group belongs.
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
   * The time zone for notifications.
   * Specify the time zone offset from Coordinated Universal Time (UTC), such as UTC+8 or UTC-7.
   * 
   * @example
   * UTC+8
   */
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      messageEncoding: 'MessageEncoding',
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
      messageEncoding: 'string',
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

