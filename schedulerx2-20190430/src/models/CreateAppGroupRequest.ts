// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The AppKey for the application.
   * 
   * @example
   * adcExHZviLcl****
   */
  appKey?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * DocTest
   */
  appName?: string;
  /**
   * @remarks
   * The type of application. Valid values:
   * 
   * *   `TRACE`: Application Monitoring
   * *   `EBPF`: Application Monitoring eBPF Edition
   * 
   * @example
   * 1
   */
  appType?: number;
  /**
   * @remarks
   * The application version. 1: Basic version, 2: Professional version.
   * 
   * @example
   * 2
   */
  appVersion?: number;
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * Test
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable logging. Valid values:
   * 
   * *   `true`: enabled
   * *   `false`: disabled
   * 
   * @example
   * true
   */
  enableLog?: boolean;
  /**
   * @remarks
   * The application ID. You can obtain the application ID on the Application Management page in the SchedulerX console.
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
   * The configuration of the alert. The value is a JSON string. For more information about this parameter, see **Additional information about request parameters**.
   * 
   * @example
   * {"sendChannel":"sms,ding"}
   */
  monitorConfigJson?: string;
  /**
   * @remarks
   * The configuration of alert contacts. The value is a JSON string.
   * 
   * @example
   * [{"userName":"Tom","userPhone":"89756******"},{"userName":"Bob","ding":"http://www.example.com"}]
   */
  monitorContactsJson?: string;
  /**
   * @remarks
   * The namespace ID. You can obtain the namespace ID on the Namespace page in the SchedulerX console.
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
   * This parameter is not supported. You do not need to specify this parameter.
   * 
   * @example
   * schedulerx
   */
  namespaceSource?: string;
  /**
   * @example
   * test-workday-notification
   */
  notificationPolicyName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to schedule a busy worker.
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

