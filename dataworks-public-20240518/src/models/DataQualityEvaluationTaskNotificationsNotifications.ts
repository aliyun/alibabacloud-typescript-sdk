// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataQualityEvaluationTaskNotificationsNotificationsNotificationChannels } from "./DataQualityEvaluationTaskNotificationsNotificationsNotificationChannels";
import { DataQualityEvaluationTaskNotificationsNotificationsNotificationReceivers } from "./DataQualityEvaluationTaskNotificationsNotificationsNotificationReceivers";


export class DataQualityEvaluationTaskNotificationsNotifications extends $dara.Model {
  notificationChannels?: DataQualityEvaluationTaskNotificationsNotificationsNotificationChannels[];
  notificationReceivers?: DataQualityEvaluationTaskNotificationsNotificationsNotificationReceivers[];
  static names(): { [key: string]: string } {
    return {
      notificationChannels: 'NotificationChannels',
      notificationReceivers: 'NotificationReceivers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notificationChannels: { 'type': 'array', 'itemType': DataQualityEvaluationTaskNotificationsNotificationsNotificationChannels },
      notificationReceivers: { 'type': 'array', 'itemType': DataQualityEvaluationTaskNotificationsNotificationsNotificationReceivers },
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

