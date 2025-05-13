// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppGroupResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The AppKey of the application.
   * 
   * @example
   * QI4lWMZ+xk1rNB67jFUhaw==
   */
  appKey?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * DocTest
   */
  appName?: string;
  /**
   * @remarks
   * The application version. 1: Basic version, 2: Professional version.
   * 
   * @example
   * 2
   */
  appVersion?: string;
  /**
   * @remarks
   * The number of jobs that are configured for the application group.
   * 
   * @example
   * 1
   */
  curJobs?: number;
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
   * The ID of the application.
   * 
   * @example
   * testSchedulerx.defaultGroup
   */
  groupId?: string;
  /**
   * @remarks
   * The maximum number of jobs that can be configured for the application group.
   * 
   * @example
   * 1000
   */
  maxJobs?: number;
  /**
   * @remarks
   * The alert notification configurations.
   * 
   * >  For more information about this parameter, see the following **additional information about request parameters**.
   * 
   * @example
   * {"sendChannel":"sms,mail,ding"}
   */
  monitorConfigJson?: string;
  /**
   * @remarks
   * The alert contact configurations.
   * 
   * >  For more information about this parameter, see the following **additional information about request parameters**.
   * 
   * @example
   * [ {"name": "Peter"}, {"name": "Paul"} ]
   */
  monitorContactsJson?: string;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * @example
   * adcfc35d-e2fe-4fe9-bbaa-20e90ffc****
   */
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      appName: 'AppName',
      appVersion: 'AppVersion',
      curJobs: 'CurJobs',
      description: 'Description',
      groupId: 'GroupId',
      maxJobs: 'MaxJobs',
      monitorConfigJson: 'MonitorConfigJson',
      monitorContactsJson: 'MonitorContactsJson',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      appName: 'string',
      appVersion: 'string',
      curJobs: 'number',
      description: 'string',
      groupId: 'string',
      maxJobs: 'number',
      monitorConfigJson: 'string',
      monitorContactsJson: 'string',
      namespace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

