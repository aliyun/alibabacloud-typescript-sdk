// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTaskFlowNotificationRequest extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the task flow. You can call the [ListTaskFlow](https://help.aliyun.com/document_detail/424565.html) or [ListLhTaskFlowAndScenario](https://help.aliyun.com/document_detail/426672.html) operation to query the task flow ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 15***
   */
  dagId?: number;
  /**
   * @remarks
   * Specifies whether to enable notifications for failed task flows. Notifications are disabled by default. You can enable notifications based on your business requirements.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  dagNotificationFail?: boolean;
  /**
   * @remarks
   * Specifies whether to enable SLA global notifications for task flows. Notifications are disabled by default. You can enable notifications based on your business requirements.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  dagNotificationSla?: boolean;
  /**
   * @remarks
   * Specifies whether to enable notifications for successful task flows. Notifications are disabled by default. You can enable notifications based on your business requirements.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  dagNotificationSuccess?: boolean;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * >  To view the ID of the tenant, go to the Data Management (DMS) console and move the pointer over the profile picture in the upper-right corner. For more information, see [View information about the current tenant](https://help.aliyun.com/document_detail/181330.html).
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      dagId: 'DagId',
      dagNotificationFail: 'DagNotificationFail',
      dagNotificationSla: 'DagNotificationSla',
      dagNotificationSuccess: 'DagNotificationSuccess',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dagId: 'number',
      dagNotificationFail: 'boolean',
      dagNotificationSla: 'boolean',
      dagNotificationSuccess: 'boolean',
      tid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

