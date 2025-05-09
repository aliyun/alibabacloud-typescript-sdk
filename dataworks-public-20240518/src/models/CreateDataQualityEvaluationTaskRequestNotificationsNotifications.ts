// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDataQualityEvaluationTaskRequestNotificationsNotificationsNotificationChannels } from "./CreateDataQualityEvaluationTaskRequestNotificationsNotificationsNotificationChannels";
import { CreateDataQualityEvaluationTaskRequestNotificationsNotificationsNotificationReceivers } from "./CreateDataQualityEvaluationTaskRequestNotificationsNotificationsNotificationReceivers";


export class CreateDataQualityEvaluationTaskRequestNotificationsNotifications extends $dara.Model {
  /**
   * @remarks
   * The alert notification methods.
   */
  notificationChannels?: CreateDataQualityEvaluationTaskRequestNotificationsNotificationsNotificationChannels[];
  /**
   * @remarks
   * The configurations of alert recipients.
   */
  notificationReceivers?: CreateDataQualityEvaluationTaskRequestNotificationsNotificationsNotificationReceivers[];
  static names(): { [key: string]: string } {
    return {
      notificationChannels: 'NotificationChannels',
      notificationReceivers: 'NotificationReceivers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notificationChannels: { 'type': 'array', 'itemType': CreateDataQualityEvaluationTaskRequestNotificationsNotificationsNotificationChannels },
      notificationReceivers: { 'type': 'array', 'itemType': CreateDataQualityEvaluationTaskRequestNotificationsNotificationsNotificationReceivers },
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

