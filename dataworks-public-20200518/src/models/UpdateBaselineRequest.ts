// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateBaselineRequestAlertSettingsDingRobots extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to remind all members by using the at sign (@). Valid values: true and false.
   * 
   * @example
   * false
   */
  atAll?: boolean;
  /**
   * @remarks
   * The webhook URL of the DingTalk chatbot.
   * 
   * @example
   * https://oapi.dingtalk.com/robot/send?access_token=xxx
   */
  webUrl?: string;
  static names(): { [key: string]: string } {
    return {
      atAll: 'AtAll',
      webUrl: 'WebUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      atAll: 'boolean',
      webUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBaselineRequestAlertSettings extends $dara.Model {
  /**
   * @remarks
   * The interval at which an event alert notification is sent. Unit: minutes. Minimum value: 5. Maximum value: 1,440.
   * 
   * @example
   * 1800
   */
  alertInterval?: number;
  /**
   * @remarks
   * The maximum number of times an event alert notification is sent. Maximum value: 24.
   * 
   * @example
   * 1
   */
  alertMaximum?: number;
  /**
   * @remarks
   * The alert notification methods. Valid values: MAIL, SMS, PHONE, DINGROBOTS, and Webhooks. The value MAIL indicates that alert notifications are sent by email. The value SMS indicates that alert notifications are sent by text message. The value PHONE indicates that alert notifications are sent by phone call. You can use this notification method only in DataWorks Professional Edition or a more advanced edition. The value DINGROBOTS indicates that alert notifications are sent by using a DingTalk chatbot. You can use this notification method only if the RobotUrls parameter is configured. The value Webhooks indicates that alert notifications are sent by WeCom or Lark. You can use this notification method only if the Webhooks parameter is configured.
   */
  alertMethods?: string[];
  /**
   * @remarks
   * The details of the alert recipient. If you set AlertRecipientType to OWNER, leave this parameter empty. If you set AlertRecipientType to SHIFT_SCHEDULE, set this parameter to the name of the shift schedule. If you set AlertRecipientType to OTHER, set this parameter to the employee IDs of specified personnel.
   * 
   * @example
   * 123123
   */
  alertRecipient?: string;
  /**
   * @remarks
   * The type of the alert recipient. Valid values: OWNER, OTHER, and SHIFT_SCHEDULE. The value OWNER indicates the node owner. The value OTHER indicates specified personnel. The value SHIFT_SCHEDULE indicates personnel in a shift schedule.
   * 
   * @example
   * OWNER
   */
  alertRecipientType?: string;
  /**
   * @remarks
   * The type of the alert. Valid values: BASELINE and TOPIC. The value BASELINE indicates a baseline alert. The value TOPIC indicates an event alert.
   * 
   * @example
   * BASELINE
   */
  alertType?: string;
  /**
   * @remarks
   * Specifies whether to enable the baseline alerting feature. This feature is specific to baselines. Valid values: true and false.
   * 
   * @example
   * true
   */
  baselineAlertEnabled?: boolean;
  /**
   * @remarks
   * The DingTalk chatbots.
   */
  dingRobots?: UpdateBaselineRequestAlertSettingsDingRobots[];
  /**
   * @remarks
   * The end time of silence.
   * 
   * @example
   * 00:00:00
   */
  silenceEndTime?: string;
  /**
   * @remarks
   * The start time of silence.
   * 
   * @example
   * 00:00:00
   */
  silenceStartTime?: string;
  /**
   * @remarks
   * The types of event alerts, which are event-specific configurations.
   */
  topicTypes?: string[];
  /**
   * @remarks
   * The webhook URLs.
   */
  webhooks?: string[];
  static names(): { [key: string]: string } {
    return {
      alertInterval: 'AlertInterval',
      alertMaximum: 'AlertMaximum',
      alertMethods: 'AlertMethods',
      alertRecipient: 'AlertRecipient',
      alertRecipientType: 'AlertRecipientType',
      alertType: 'AlertType',
      baselineAlertEnabled: 'BaselineAlertEnabled',
      dingRobots: 'DingRobots',
      silenceEndTime: 'SilenceEndTime',
      silenceStartTime: 'SilenceStartTime',
      topicTypes: 'TopicTypes',
      webhooks: 'Webhooks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertInterval: 'number',
      alertMaximum: 'number',
      alertMethods: { 'type': 'array', 'itemType': 'string' },
      alertRecipient: 'string',
      alertRecipientType: 'string',
      alertType: 'string',
      baselineAlertEnabled: 'boolean',
      dingRobots: { 'type': 'array', 'itemType': UpdateBaselineRequestAlertSettingsDingRobots },
      silenceEndTime: 'string',
      silenceStartTime: 'string',
      topicTypes: { 'type': 'array', 'itemType': 'string' },
      webhooks: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.alertMethods)) {
      $dara.Model.validateArray(this.alertMethods);
    }
    if(Array.isArray(this.dingRobots)) {
      $dara.Model.validateArray(this.dingRobots);
    }
    if(Array.isArray(this.topicTypes)) {
      $dara.Model.validateArray(this.topicTypes);
    }
    if(Array.isArray(this.webhooks)) {
      $dara.Model.validateArray(this.webhooks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBaselineRequestOvertimeSettings extends $dara.Model {
  /**
   * @remarks
   * The cycle that corresponds to the committed completion time. For a day-level baseline, set this parameter to 1. For an hour-level baseline, set this parameter to a value that is no more than 24.
   * 
   * @example
   * 1
   */
  cycle?: number;
  /**
   * @remarks
   * The committed completion time in the hh:mm format. Valid values of hh: [0,47]. Valid values of mm: [0,59].
   * 
   * @example
   * 00:00
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cycle: 'Cycle',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cycle: 'number',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBaselineRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the alerting feature. Valid values: true and false.
   * 
   * @example
   * true
   */
  alertEnabled?: boolean;
  /**
   * @remarks
   * The alert margin threshold of the baseline. Unit: minutes.
   * 
   * @example
   * 30
   */
  alertMarginThreshold?: number;
  /**
   * @remarks
   * The alert settings of the baseline.
   */
  alertSettings?: UpdateBaselineRequestAlertSettings[];
  /**
   * @remarks
   * The baseline ID. You can call the [ListBaselines](https://help.aliyun.com/document_detail/2261507.html) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000010800007
   */
  baselineId?: number;
  /**
   * @remarks
   * The name of the baseline.
   * 
   * @example
   * BaselineName
   */
  baselineName?: string;
  /**
   * @remarks
   * The type of the baseline. Valid values: DAILY and HOURLY.
   * 
   * @example
   * DAILY
   */
  baselineType?: string;
  /**
   * @remarks
   * Specifies whether to enable the baseline. Valid values: true and false.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The ancestor nodes of nodes in the baseline. Separate the ancestor nodes with commas (,). If a large number of ancestor nodes exist, we recommend that you create a zero load node and configure the zero load node as the descendant node of nodes in the baseline to facilitate node management.
   * 
   * @example
   * 1,2,3
   */
  nodeIds?: string;
  /**
   * @remarks
   * The settings of the committed completion time of the baseline.
   */
  overtimeSettings?: UpdateBaselineRequestOvertimeSettings[];
  /**
   * @remarks
   * The ID of the Alibaba Cloud account used by the baseline owner.
   * 
   * @example
   * 3726346****
   */
  owner?: string;
  /**
   * @remarks
   * The priority of the baseline. Valid values: {1,3,5,7,8}.
   * 
   * @example
   * 7
   */
  priority?: number;
  /**
   * @remarks
   * The workspace ID. You can call the [ListBaselines](https://help.aliyun.com/document_detail/2261507.html) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 2043
   */
  projectId?: number;
  /**
   * @remarks
   * The ID of the node that you want to disassociate from the baseline. You can specify multiple node IDs. Separate multiple node IDs with commas (,).
   * 
   * @example
   * 123,456
   */
  removeNodeIds?: string;
  static names(): { [key: string]: string } {
    return {
      alertEnabled: 'AlertEnabled',
      alertMarginThreshold: 'AlertMarginThreshold',
      alertSettings: 'AlertSettings',
      baselineId: 'BaselineId',
      baselineName: 'BaselineName',
      baselineType: 'BaselineType',
      enabled: 'Enabled',
      nodeIds: 'NodeIds',
      overtimeSettings: 'OvertimeSettings',
      owner: 'Owner',
      priority: 'Priority',
      projectId: 'ProjectId',
      removeNodeIds: 'RemoveNodeIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertEnabled: 'boolean',
      alertMarginThreshold: 'number',
      alertSettings: { 'type': 'array', 'itemType': UpdateBaselineRequestAlertSettings },
      baselineId: 'number',
      baselineName: 'string',
      baselineType: 'string',
      enabled: 'boolean',
      nodeIds: 'string',
      overtimeSettings: { 'type': 'array', 'itemType': UpdateBaselineRequestOvertimeSettings },
      owner: 'string',
      priority: 'number',
      projectId: 'number',
      removeNodeIds: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.alertSettings)) {
      $dara.Model.validateArray(this.alertSettings);
    }
    if(Array.isArray(this.overtimeSettings)) {
      $dara.Model.validateArray(this.overtimeSettings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

