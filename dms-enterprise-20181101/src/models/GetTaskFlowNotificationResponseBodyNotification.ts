// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTaskFlowNotificationResponseBodyNotification extends $dara.Model {
  /**
   * @remarks
   * Indicates whether notifications for failed task flows are enabled. Valid values:
   * 
   * *   **true**: enabled
   * *   **false**: disabled
   * 
   * @example
   * true
   */
  dagNotificationFail?: boolean;
  /**
   * @remarks
   * Indicates whether service level agreement (SLA) global notifications for task flows are enabled. Valid values:
   * 
   * *   **true**: enabled
   * *   **false**: disabled
   * 
   * @example
   * true
   */
  dagNotificationSla?: boolean;
  /**
   * @remarks
   * Indicates whether notifications for successful task flows are enabled. Valid values:
   * 
   * *   **true**: enabled
   * *   **false**: disabled
   * 
   * @example
   * true
   */
  dagNotificationSuccess?: boolean;
  static names(): { [key: string]: string } {
    return {
      dagNotificationFail: 'DagNotificationFail',
      dagNotificationSla: 'DagNotificationSla',
      dagNotificationSuccess: 'DagNotificationSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dagNotificationFail: 'boolean',
      dagNotificationSla: 'boolean',
      dagNotificationSuccess: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

