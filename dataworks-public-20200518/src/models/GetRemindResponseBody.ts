// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRemindResponseBodyDataBaselines extends $dara.Model {
  /**
   * @remarks
   * The baseline ID.
   * 
   * @example
   * 1234
   */
  baselineId?: number;
  /**
   * @remarks
   * The name of the baseline.
   * 
   * @example
   * Baseline name
   */
  baselineName?: string;
  static names(): { [key: string]: string } {
    return {
      baselineId: 'BaselineId',
      baselineName: 'BaselineName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'number',
      baselineName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRemindResponseBodyDataBizProcesses extends $dara.Model {
  /**
   * @remarks
   * The ID of the workflow.
   * 
   * @example
   * 9527
   */
  bizId?: number;
  /**
   * @remarks
   * The name of the workflow.
   * 
   * @example
   * Business process name
   */
  bizProcessName?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizProcessName: 'BizProcessName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'number',
      bizProcessName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRemindResponseBodyDataNodes extends $dara.Model {
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * 1234
   */
  nodeId?: number;
  /**
   * @remarks
   * The name of the node.
   * 
   * @example
   * Node name
   */
  nodeName?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account used by the node owner.
   * 
   * @example
   * 9527951795****
   */
  owner?: string;
  /**
   * @remarks
   * The ID of the workspace to which the node belongs.
   * 
   * @example
   * 1234
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      owner: 'Owner',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'number',
      nodeName: 'string',
      owner: 'string',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRemindResponseBodyDataProjects extends $dara.Model {
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 1234
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRemindResponseBodyDataReceivers extends $dara.Model {
  /**
   * @remarks
   * The alert recipient.
   */
  alertTargets?: string[];
  /**
   * @remarks
   * The type of the alert recipient. For more information about alert recipients, see the Receivers parameter. Valid values:
   * 
   * *   OWNER: indicate the task owner.
   * *   OTHER: indicates specified personnel.
   * *   SHIFT_SCHEDULE: indicates personnel in a shift schedule.
   * 
   * @example
   * OWNER
   */
  alertUnit?: string;
  static names(): { [key: string]: string } {
    return {
      alertTargets: 'AlertTargets',
      alertUnit: 'AlertUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertTargets: { 'type': 'array', 'itemType': 'string' },
      alertUnit: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.alertTargets)) {
      $dara.Model.validateArray(this.alertTargets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRemindResponseBodyDataRobots extends $dara.Model {
  /**
   * @remarks
   * Indicates whether all group members are notified when the alert notification is sent to a DingTalk group. Valid values: true and false.
   * 
   * @example
   * true
   */
  atAll?: boolean;
  /**
   * @remarks
   * The webhook URL of the DingTalk chatbot.
   * 
   * @example
   * https://oapi.dingtalk.com/robot/send?access_token=******************************
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

export class GetRemindResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The minimum interval at which alerts are reported. Unit: seconds.
   * 
   * @example
   * 1800
   */
  alertInterval?: number;
  /**
   * @remarks
   * The notification method.
   */
  alertMethods?: string[];
  /**
   * @remarks
   * The description of the alert recipient. For more information about alert recipients, see the Receivers parameter.
   */
  alertTargets?: string[];
  /**
   * @remarks
   * The type of the alert recipient. For more information about alert recipient types, see the Receivers parameter. Valid values:
   * 
   * *   OWNER: the task owner
   * *   OTHER: specified personnel
   * *   SHIFT_SCHEDULE: personnel in a shift schedule
   * 
   * @example
   * OWNER
   */
  alertUnit?: string;
  /**
   * @remarks
   * The IDs of the nodes that are added to a whitelist.
   */
  allowNodes?: number[];
  /**
   * @remarks
   * The baselines to which the custom alert rule is applied. This parameter is returned if the value of the RemindUnit parameter is BASELINE.
   */
  baselines?: GetRemindResponseBodyDataBaselines[];
  /**
   * @remarks
   * The workflows to which the custom alert rule is applied. This parameter is returned if the value of the RemindUnit parameter is BIZPROCESS.
   */
  bizProcesses?: GetRemindResponseBodyDataBizProcesses[];
  /**
   * @remarks
   * *   If the value of the RemindType parameter is FINISHED, this parameter is left empty.
   * *   If the value of the RemindType parameter is UNFINISHED, the trigger conditions are returned as key-value pairs. Example: {"hour":23,"minu":59}. Valid values of hour: [0,47]. Valid values of minu: [0,59].
   * *   If the value of the RemindType parameter is ERROR, this parameter is left empty.
   * *   If the value of the RemindType parameter is CYCLE_UNFINISHED, the trigger conditions are returned as key-value pairs. Example: {"1":"05:50","2":"06:50","3":"07:50","4":"08:50","5":"09:50","6":"10:50","7":"11:50","8":"12:50","9":"13:50","10":"14:50","11":"15:50","12":"16:50","13":"17:50","14":"18:50","15":"19:50","16":"20:50","17":"21:50","18":"22:50","19":"23:50","20":"24:50","21":"25:50"}. The key indicates the ID of the cycle. Valid values: [1,288]. The value indicates the timeout period of the node that is running in the cycle. Specify the value in the hh:mm format. Valid values of hh: [0,47]. Valid values of mm: [0,59].
   * *   If the value of the RemindType parameter is TIMEOUT, the timeout period is returned. Unit: seconds. Example: 1800. This value indicates that an alert is reported if the node has run for more than 30 minutes.
   * 
   * @example
   * {"hour":23,"minu":59}
   */
  detail?: string;
  /**
   * @remarks
   * The end time of the quiet hours. The value is in the hh:mm format. Valid values of hh: [0,23]. Valid values of mm: [0,59].
   * 
   * @example
   * 08:00
   */
  dndEnd?: string;
  /**
   * @remarks
   * The start time of the quiet hours. The value is in the hh:mm format. Valid values of hh: [0,23]. Valid values of mm: [0,59].
   * 
   * @example
   * 00:00
   */
  dndStart?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account used by the creator of the custom alert rule.
   * 
   * @example
   * 9527951795****
   */
  founder?: string;
  /**
   * @remarks
   * The maximum number of alerts.
   * 
   * @example
   * 3
   */
  maxAlertTimes?: number;
  /**
   * @remarks
   * The nodes to which the custom alert rule is applied. This parameter is returned if the value of the RemindUnit parameter is NODE.
   */
  nodes?: GetRemindResponseBodyDataNodes[];
  /**
   * @remarks
   * The workspaces to which the custom alert rule is applied. This parameter is returned if the value of the RemindUnit parameter is PROJECT.
   */
  projects?: GetRemindResponseBodyDataProjects[];
  /**
   * @remarks
   * The information about the alert recipients.
   */
  receivers?: GetRemindResponseBodyDataReceivers[];
  /**
   * @remarks
   * The custom alert rule ID.
   * 
   * @example
   * 1234
   */
  remindId?: number;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * Rule name
   */
  remindName?: string;
  /**
   * @remarks
   * The conditions that trigger an alert. Valid values: FINISHED, UNFINISHED, ERROR, CYCLE_UNFINISHED, and TIMEOUT.
   * 
   * @example
   * FINISHED
   */
  remindType?: string;
  /**
   * @remarks
   * The type of the object to which the custom alert rule is applied. Valid values: NODE, BASELINE, PROJECT, and BIZPROCESS. The value NODE indicates a node. The value BASELINE indicates a baseline. The value PROJECT indicates a workspace. The value BIZPROCESS indicates a workflow.
   * 
   * @example
   * NODE
   */
  remindUnit?: string;
  /**
   * @remarks
   * The webhook URLs of the DingTalk chatbots.
   */
  robots?: GetRemindResponseBodyDataRobots[];
  /**
   * @remarks
   * Indicates whether the custom alert rule is enabled. Valid values: true and false.
   * 
   * @example
   * true
   */
  useflag?: boolean;
  /**
   * @remarks
   * WebHook URL
   */
  webhooks?: string[];
  static names(): { [key: string]: string } {
    return {
      alertInterval: 'AlertInterval',
      alertMethods: 'AlertMethods',
      alertTargets: 'AlertTargets',
      alertUnit: 'AlertUnit',
      allowNodes: 'AllowNodes',
      baselines: 'Baselines',
      bizProcesses: 'BizProcesses',
      detail: 'Detail',
      dndEnd: 'DndEnd',
      dndStart: 'DndStart',
      founder: 'Founder',
      maxAlertTimes: 'MaxAlertTimes',
      nodes: 'Nodes',
      projects: 'Projects',
      receivers: 'Receivers',
      remindId: 'RemindId',
      remindName: 'RemindName',
      remindType: 'RemindType',
      remindUnit: 'RemindUnit',
      robots: 'Robots',
      useflag: 'Useflag',
      webhooks: 'Webhooks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertInterval: 'number',
      alertMethods: { 'type': 'array', 'itemType': 'string' },
      alertTargets: { 'type': 'array', 'itemType': 'string' },
      alertUnit: 'string',
      allowNodes: { 'type': 'array', 'itemType': 'number' },
      baselines: { 'type': 'array', 'itemType': GetRemindResponseBodyDataBaselines },
      bizProcesses: { 'type': 'array', 'itemType': GetRemindResponseBodyDataBizProcesses },
      detail: 'string',
      dndEnd: 'string',
      dndStart: 'string',
      founder: 'string',
      maxAlertTimes: 'number',
      nodes: { 'type': 'array', 'itemType': GetRemindResponseBodyDataNodes },
      projects: { 'type': 'array', 'itemType': GetRemindResponseBodyDataProjects },
      receivers: { 'type': 'array', 'itemType': GetRemindResponseBodyDataReceivers },
      remindId: 'number',
      remindName: 'string',
      remindType: 'string',
      remindUnit: 'string',
      robots: { 'type': 'array', 'itemType': GetRemindResponseBodyDataRobots },
      useflag: 'boolean',
      webhooks: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.alertMethods)) {
      $dara.Model.validateArray(this.alertMethods);
    }
    if(Array.isArray(this.alertTargets)) {
      $dara.Model.validateArray(this.alertTargets);
    }
    if(Array.isArray(this.allowNodes)) {
      $dara.Model.validateArray(this.allowNodes);
    }
    if(Array.isArray(this.baselines)) {
      $dara.Model.validateArray(this.baselines);
    }
    if(Array.isArray(this.bizProcesses)) {
      $dara.Model.validateArray(this.bizProcesses);
    }
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    if(Array.isArray(this.projects)) {
      $dara.Model.validateArray(this.projects);
    }
    if(Array.isArray(this.receivers)) {
      $dara.Model.validateArray(this.receivers);
    }
    if(Array.isArray(this.robots)) {
      $dara.Model.validateArray(this.robots);
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

export class GetRemindResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the custom alert rule.
   */
  data?: GetRemindResponseBodyData;
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
   * The specified parameters are invalid.
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
   * 0000-ABCD-EFGH-IJKLMNOPQ
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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
      data: GetRemindResponseBodyData,
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

