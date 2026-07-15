// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppGroupResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The application\\"s AppKey.
   * 
   * @example
   * QI4lWMZ+xk1rNB67jFUhaw==
   */
  appKey?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * DocTest
   */
  appName?: string;
  /**
   * @remarks
   * The application version. Valid values:
   * 
   * @example
   * 2
   */
  appVersion?: string;
  /**
   * @remarks
   * The number of jobs currently configured for the App Group.
   * 
   * @example
   * 1
   */
  curJobs?: number;
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
   * Specifies whether to enable log collection. The default value is false.
   */
  enableLog?: boolean;
  /**
   * @remarks
   * The App Group ID.
   * 
   * @example
   * testSchedulerx.defaultGroup
   */
  groupId?: string;
  /**
   * @remarks
   * The maximum number of jobs that can be configured for the App Group.
   * 
   * @example
   * 1000
   */
  maxJobs?: number;
  /**
   * @remarks
   * The alarm notification configuration.
   * 
   * > For more information, see the **MonitorConfigJson** section below.
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
   * The alarm contact configuration.
   * 
   * > For more information, see the **MonitorContactsJson** section below.
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
   * The namespace ID.
   * 
   * @example
   * adcfc35d-e2fe-4fe9-bbaa-20e90ffc****
   */
  namespace?: string;
  /**
   * @remarks
   * The name of the notification policy.
   * 
   * @example
   * test-workday-notification
   */
  notificationPolicyName?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      appName: 'AppName',
      appVersion: 'AppVersion',
      curJobs: 'CurJobs',
      description: 'Description',
      enableLog: 'EnableLog',
      groupId: 'GroupId',
      maxJobs: 'MaxJobs',
      monitorConfigJson: 'MonitorConfigJson',
      monitorContactsJson: 'MonitorContactsJson',
      namespace: 'Namespace',
      notificationPolicyName: 'NotificationPolicyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      appName: 'string',
      appVersion: 'string',
      curJobs: 'number',
      description: 'string',
      enableLog: 'boolean',
      groupId: 'string',
      maxJobs: 'number',
      monitorConfigJson: 'string',
      monitorContactsJson: 'string',
      namespace: 'string',
      notificationPolicyName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The details of the App Group.
   */
  data?: GetAppGroupResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * app is not existed, groupId=xxxx, namesapce=xxxx
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 39090022-1F3B-4797-8518-6B61095F1AF0
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request was successful.
   * 
   * - **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetAppGroupResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

