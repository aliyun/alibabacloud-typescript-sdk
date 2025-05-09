// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataQualityEvaluationTaskInstanceTaskNotificationsNotifications } from "./DataQualityEvaluationTaskInstanceTaskNotificationsNotifications";


export class DataQualityEvaluationTaskInstanceTaskNotifications extends $dara.Model {
  /**
   * @example
   * ${blockType} == "Strong"
   */
  condition?: string;
  notifications?: DataQualityEvaluationTaskInstanceTaskNotificationsNotifications[];
  static names(): { [key: string]: string } {
    return {
      condition: 'Condition',
      notifications: 'Notifications',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      notifications: { 'type': 'array', 'itemType': DataQualityEvaluationTaskInstanceTaskNotificationsNotifications },
    };
  }

  validate() {
    if(Array.isArray(this.notifications)) {
      $dara.Model.validateArray(this.notifications);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

