// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNotificationConfigurationsResponseBodyNotificationConfigurationModels extends $dara.Model {
  /**
   * @example
   * PlainText
   */
  messageEncoding?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the notification recipient. The value is in one of the following formats:
   * 
   * *   If you specify CloudMonitor as the notification recipient, the value is in the acs:ess:{region-id}:{account-id}:cloudmonitor format.
   * *   If you specify a Simple Message Queue (SMQ, formerly MNS) as the notification recipient, the value is in the acs:mns:{region-id}:{account-id}:queue/{queuename} format.
   * *   If you specify an SMQ topic as the notification recipient, the value is in the acs:mns:{region-id}:{account-id}:topic/{topicname} format.
   * 
   * The variables in the preceding value formats have the following meanings:
   * 
   * *   region-id: the region ID of your scaling group.
   * *   account-id: the ID of your Alibaba Cloud account.
   * *   queuename: the name of the SMQ queue.
   * *   topicname: the name of the SMQ topic.
   * 
   * @example
   * acs:mns:cn-beijing:161456884340****:topic/modifyLifecycleHo****
   */
  notificationArn?: string;
  /**
   * @remarks
   * The types of the notifications.
   */
  notificationTypes?: string[];
  /**
   * @remarks
   * The ID of the scaling group.
   * 
   * @example
   * asg-bp1igpak5ft1flyp****
   */
  scalingGroupId?: string;
  /**
   * @remarks
   * The time zone of the notification. The value must be in UTC. For example, a value of UTC+8 indicates that the time is 8 hours ahead of Coordinated Universal Time, and a value of UTC-7 indicates that the time is 7 hours behind Coordinated Universal Time.
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
      scalingGroupId: 'ScalingGroupId',
      timeZone: 'TimeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageEncoding: 'string',
      notificationArn: 'string',
      notificationTypes: { 'type': 'array', 'itemType': 'string' },
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

export class DescribeNotificationConfigurationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The notification settings.
   */
  notificationConfigurationModels?: DescribeNotificationConfigurationsResponseBodyNotificationConfigurationModels[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      notificationConfigurationModels: 'NotificationConfigurationModels',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notificationConfigurationModels: { 'type': 'array', 'itemType': DescribeNotificationConfigurationsResponseBodyNotificationConfigurationModels },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.notificationConfigurationModels)) {
      $dara.Model.validateArray(this.notificationConfigurationModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

