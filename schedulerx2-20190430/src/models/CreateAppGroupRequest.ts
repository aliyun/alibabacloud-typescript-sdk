// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The AppKey of the application.
   * 
   * @example
   * adcExHZviLcl****
   */
  appKey?: string;
  /**
   * @remarks
   * The application name.
   * 
   * This parameter is required.
   * 
   * @example
   * DocTest
   */
  appName?: string;
  /**
   * @remarks
   * The application type.
   * 
   * - `1`: Standard application.
   * 
   * - `2`: Kubernetes (K8s) application.
   * 
   * @example
   * 1
   */
  appType?: number;
  /**
   * @remarks
   * The application version. Valid values: `1` (Basic Edition) and `2` (Professional Edition).
   * 
   * @example
   * 2
   */
  appVersion?: number;
  /**
   * @remarks
   * The application description.
   * 
   * @example
   * Test
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable logging.
   * 
   * - `true`: Enable logging.
   * 
   * - `false`: Disable logging.
   * 
   * @example
   * true
   */
  enableLog?: boolean;
  /**
   * @remarks
   * The ID of the application group. You can find this ID on the **Application Management** page in the console.
   * 
   * This parameter is required.
   * 
   * @example
   * TestSchedulerx.defaultGroup
   */
  groupId?: string;
  /**
   * @remarks
   * The maximum number of jobs.
   * 
   * @example
   * 1000
   */
  maxJobs?: number;
  /**
   * @remarks
   * Specifies the alert notification configuration as a JSON string. The string can contain the following properties: `sendChannel`, `alarmType`, and `webhookIsAtAll`.
   * 
   * > For more information, see the **Additional information about request parameters** section.
   * 
   * @example
   * {
   *     "sendChannel": "ding,sms,mail,phone",
   *     "alarmType": "Contacts",
   *     "webhookIsAtAll": false
   * }
   */
  monitorConfigJson?: string;
  /**
   * @remarks
   * The alert contacts. This can include individual contacts and contact groups.
   * 
   * > For more information, see the **Additional information about request parameters** section.
   * 
   * @example
   * [
   *     {"name": "Alice Johnson"},
   *     {"name": "Lee Smith"}
   * ]
   */
  monitorContactsJson?: string;
  /**
   * @remarks
   * The ID of the namespace. You can find this ID on the **Namespace** page in the console.
   * 
   * This parameter is required.
   * 
   * @example
   * adcfc35d-e2fe-4fe9-bbaa-20e90ffc****
   */
  namespace?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * @example
   * Test
   */
  namespaceName?: string;
  /**
   * @remarks
   * This parameter is currently unsupported and can be left unspecified.
   * 
   * @example
   * schedulerx
   */
  namespaceSource?: string;
  /**
   * @remarks
   * The notification policy name.
   * 
   * @example
   * test-workday-notification
   */
  notificationPolicyName?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to schedule jobs on a busy worker.
   * 
   * @example
   * false
   */
  scheduleBusyWorkers?: boolean;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      appName: 'AppName',
      appType: 'AppType',
      appVersion: 'AppVersion',
      description: 'Description',
      enableLog: 'EnableLog',
      groupId: 'GroupId',
      maxJobs: 'MaxJobs',
      monitorConfigJson: 'MonitorConfigJson',
      monitorContactsJson: 'MonitorContactsJson',
      namespace: 'Namespace',
      namespaceName: 'NamespaceName',
      namespaceSource: 'NamespaceSource',
      notificationPolicyName: 'NotificationPolicyName',
      regionId: 'RegionId',
      scheduleBusyWorkers: 'ScheduleBusyWorkers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      appName: 'string',
      appType: 'number',
      appVersion: 'number',
      description: 'string',
      enableLog: 'boolean',
      groupId: 'string',
      maxJobs: 'number',
      monitorConfigJson: 'string',
      monitorContactsJson: 'string',
      namespace: 'string',
      namespaceName: 'string',
      namespaceSource: 'string',
      notificationPolicyName: 'string',
      regionId: 'string',
      scheduleBusyWorkers: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

