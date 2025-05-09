// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataQualityEvaluationTaskInstanceTaskNotificationsNotificationsNotificationChannels } from "./DataQualityEvaluationTaskInstanceTaskNotificationsNotificationsNotificationChannels";
import { DataQualityEvaluationTaskInstanceTaskNotificationsNotificationsNotificationReceivers } from "./DataQualityEvaluationTaskInstanceTaskNotificationsNotificationsNotificationReceivers";


export class DataQualityEvaluationTaskInstanceTaskNotificationsNotifications extends $dara.Model {
  notificationChannels?: DataQualityEvaluationTaskInstanceTaskNotificationsNotificationsNotificationChannels[];
  notificationReceivers?: DataQualityEvaluationTaskInstanceTaskNotificationsNotificationsNotificationReceivers[];
  static names(): { [key: string]: string } {
    return {
      notificationChannels: 'NotificationChannels',
      notificationReceivers: 'NotificationReceivers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notificationChannels: { 'type': 'array', 'itemType': DataQualityEvaluationTaskInstanceTaskNotificationsNotificationsNotificationChannels },
      notificationReceivers: { 'type': 'array', 'itemType': DataQualityEvaluationTaskInstanceTaskNotificationsNotificationsNotificationReceivers },
    };
  }

  validate() {
    if(Array.isArray(this.notificationChannels)) {
      $dara.Model.validateArray(this.notificationChannels);
    }
    if(Array.isArray(this.notificationReceivers)) {
      $dara.Model.validateArray(this.notificationReceivers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

