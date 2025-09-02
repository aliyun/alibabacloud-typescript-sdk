// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBaselineResponseBodyDataAlertSettingsDingRobots extends $dara.Model {
  /**
   * @remarks
   * Whether @ everyone.
   * 
   * @example
   * true
   */
  atAll?: boolean;
  /**
   * @remarks
   * DingTalk robot address
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

export class GetBaselineResponseBodyDataAlertSettings extends $dara.Model {
  /**
   * @remarks
   * The event alert interval, in seconds.
   * 
   * @example
   * 900
   */
  alertInterval?: number;
  /**
   * @remarks
   * The maximum number of event alerts.
   * 
   * @example
   * 1
   */
  alertMaximum?: number;
  /**
   * @remarks
   * Alert method list
   */
  alertMethods?: string[];
  /**
   * @remarks
   * Alert recipient details.
   * 
   * AlertRecipientType is OWNER: empty
   * AlertRecipientType is SHIFT_SCHEDULE: duty table uid
   * AlertRecipientType is OTHER: uid list, multiple UIDs are in English, split
   * 
   * @example
   * 123123
   */
  alertRecipient?: string;
  /**
   * @remarks
   * The type of alert recipient.
   * 
   * - OWNER: task owner
   * - OTHER: designated person
   * - SHIFT: SCHEDULE-duty table
   * 
   * @example
   * OWNER
   */
  alertRecipientType?: string;
  /**
   * @remarks
   * Alert type
   * 
   * - BASELINE: baseline
   * - TOPIC: event
   * 
   * @example
   * BASELINE
   */
  alertType?: string;
  /**
   * @remarks
   * The baseline alarm switch.
   * 
   * - true
   * - false
   * 
   * @example
   * false
   */
  baselineAlertEnabled?: boolean;
  /**
   * @remarks
   * DingTalk robot list.
   */
  dingRobots?: GetBaselineResponseBodyDataAlertSettingsDingRobots[];
  /**
   * @remarks
   * The end time of the silence. The format is HH:mm:ss.
   * 
   * @example
   * 00:00:00
   */
  silenceEndTime?: string;
  /**
   * @remarks
   * The start time of the silence. Format: HH:mm:ss
   * 
   * @example
   * 00:00:00
   */
  silenceStartTime?: string;
  /**
   * @remarks
   * The list of Event Alert types.
   */
  topicTypes?: string[];
  /**
   * @remarks
   * webhook list.
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
      dingRobots: { 'type': 'array', 'itemType': GetBaselineResponseBodyDataAlertSettingsDingRobots },
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

export class GetBaselineResponseBodyDataOverTimeSettings extends $dara.Model {
  /**
   * @remarks
   * The period corresponding to the commitment time. The space-based line is 1, and the hourly baseline can be configured for up to 24 cycles.
   * 
   * @example
   * 1
   */
  cycle?: number;
  /**
   * @remarks
   * Commitment time, hh:mm format, hh value range is [0,47],mm value range is [0,59].
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

export class GetBaselineResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the alerting feature is enabled. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  alertEnabled?: boolean;
  /**
   * @remarks
   * The alert margin threshold. Unit: minutes.
   * 
   * @example
   * 60
   */
  alertMarginThreshold?: number;
  /**
   * @remarks
   * The alert settings.
   */
  alertSettings?: GetBaselineResponseBodyDataAlertSettings[];
  /**
   * @remarks
   * The baseline ID.
   * 
   * @example
   * 1001
   */
  baselineId?: number;
  /**
   * @remarks
   * The name of the baseline.
   * 
   * @example
   * Test baseline
   */
  baselineName?: string;
  /**
   * @remarks
   * The type of the baseline. Valid values:
   * 
   * *   DAILY
   * *   HOURLY
   * 
   * @example
   * DAILY
   */
  baselineType?: string;
  /**
   * @remarks
   * Indicates whether the baseline is enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The node IDs.
   */
  nodeIds?: number[];
  /**
   * @remarks
   * The settings of the committed completion time of the baseline.
   */
  overTimeSettings?: GetBaselineResponseBodyDataOverTimeSettings[];
  /**
   * @remarks
   * The owner.
   * 
   * @example
   * 9527952****
   */
  owner?: string;
  /**
   * @remarks
   * The priority of the baseline. Valid values: 1, 3, 5, 7, and 8.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 10000
   */
  projectId?: number;
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
      overTimeSettings: 'OverTimeSettings',
      owner: 'Owner',
      priority: 'Priority',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertEnabled: 'boolean',
      alertMarginThreshold: 'number',
      alertSettings: { 'type': 'array', 'itemType': GetBaselineResponseBodyDataAlertSettings },
      baselineId: 'number',
      baselineName: 'string',
      baselineType: 'string',
      enabled: 'boolean',
      nodeIds: { 'type': 'array', 'itemType': 'number' },
      overTimeSettings: { 'type': 'array', 'itemType': GetBaselineResponseBodyDataOverTimeSettings },
      owner: 'string',
      priority: 'number',
      projectId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.alertSettings)) {
      $dara.Model.validateArray(this.alertSettings);
    }
    if(Array.isArray(this.nodeIds)) {
      $dara.Model.validateArray(this.nodeIds);
    }
    if(Array.isArray(this.overTimeSettings)) {
      $dara.Model.validateArray(this.overTimeSettings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBaselineResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: GetBaselineResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 1031203110005
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The specified parameters are invalid
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ecb967ec-c137-48a5-860****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetBaselineResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
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

