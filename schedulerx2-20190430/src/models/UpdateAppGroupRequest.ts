// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAppGroupRequest extends $dara.Model {
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
   * The ID of the application. You can obtain the application ID on the **Application Management** page in the SchedulerX console.
   * 
   * This parameter is required.
   * 
   * @example
   * testSchedulerx.defaultGroup
   */
  groupId?: string;
  /**
   * @remarks
   * The maximum number of concurrent instances. Default value: 1. A value of 1 specifies that if the last triggered instance is running, the next instance is not triggered even if the scheduled point in time for running the next instance is reached.
   * 
   * @example
   * 1
   */
  maxConcurrency?: number;
  /**
   * @remarks
   * The configuration of the alert. The value is a JSON string. For more information about this parameter, see **Additional information about request parameters**.
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
   * The configuration of alert contacts. The value is a JSON string.
   * 
   * @example
   * [{"userName":"Tom","userPhone":"89756******"},{"userName":"Bob","ding":"http://www.example.com"}]
   */
  monitorContactsJson?: string;
  /**
   * @remarks
   * The ID of the namespace. You can obtain the ID of the namespace on the Namespace page in the SchedulerX console.
   * 
   * This parameter is required.
   * 
   * @example
   * adcfc35d-e2fe-4fe9-bbaa-20e90ffc****
   */
  namespace?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'AppVersion',
      description: 'Description',
      groupId: 'GroupId',
      maxConcurrency: 'MaxConcurrency',
      monitorConfigJson: 'MonitorConfigJson',
      monitorContactsJson: 'MonitorContactsJson',
      namespace: 'Namespace',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'number',
      description: 'string',
      groupId: 'string',
      maxConcurrency: 'number',
      monitorConfigJson: 'string',
      monitorContactsJson: 'string',
      namespace: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

