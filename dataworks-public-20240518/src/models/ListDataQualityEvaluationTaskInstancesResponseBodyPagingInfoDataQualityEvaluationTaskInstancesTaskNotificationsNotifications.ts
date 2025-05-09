// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstancesTaskNotificationsNotificationsNofiticationReceivers } from "./ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstancesTaskNotificationsNotificationsNofiticationReceivers";
import { ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstancesTaskNotificationsNotificationsNotificationChannels } from "./ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstancesTaskNotificationsNotificationsNotificationChannels";


export class ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstancesTaskNotificationsNotifications extends $dara.Model {
  /**
   * @remarks
   * The alert recipients.
   */
  nofiticationReceivers?: ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstancesTaskNotificationsNotificationsNofiticationReceivers[];
  /**
   * @remarks
   * The alert notification methods.
   */
  notificationChannels?: ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstancesTaskNotificationsNotificationsNotificationChannels[];
  static names(): { [key: string]: string } {
    return {
      nofiticationReceivers: 'NofiticationReceivers',
      notificationChannels: 'NotificationChannels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nofiticationReceivers: { 'type': 'array', 'itemType': ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstancesTaskNotificationsNotificationsNofiticationReceivers },
      notificationChannels: { 'type': 'array', 'itemType': ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstancesTaskNotificationsNotificationsNotificationChannels },
    };
  }

  validate() {
    if(Array.isArray(this.nofiticationReceivers)) {
      $dara.Model.validateArray(this.nofiticationReceivers);
    }
    if(Array.isArray(this.notificationChannels)) {
      $dara.Model.validateArray(this.notificationChannels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

