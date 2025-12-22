// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendNotificationRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {   "eventType": "VnRecordingReady",   "eventTime": "2025-11-05T01:51:20.974Z",    "instanceId": "ccc-test",                    "scenarioId": "scenario-xxxx",               "contactId": "job-xxxxxx",                   "duration": 59,                              "startTime": "2025-11-05T01:50:04.732Z",    "endTime": "2025-11-05T01:51:02.822Z",      "fileName": "xxxxxxx.wav",                   "downloadURL": "https://ccc-v2-online.oss-cn-shanghai.aliyuncs.com/ccc-record-mixed/xxxxxxx.wav?Expires=1762393880" }
   */
  messageBody?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CUSTOMER
   */
  notificationTarget?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * VnRecordingReady
   */
  notificationType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * job-xxxxxx
   */
  shardingKey?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      messageBody: 'MessageBody',
      notificationTarget: 'NotificationTarget',
      notificationType: 'NotificationType',
      shardingKey: 'ShardingKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      messageBody: 'string',
      notificationTarget: 'string',
      notificationType: 'string',
      shardingKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

