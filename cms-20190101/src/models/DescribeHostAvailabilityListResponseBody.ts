// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigAlertConfigEscalationListEscalationList extends $dara.Model {
  aggregate?: string;
  metricName?: string;
  operator?: string;
  times?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      aggregate: 'Aggregate',
      metricName: 'MetricName',
      operator: 'Operator',
      times: 'Times',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregate: 'string',
      metricName: 'string',
      operator: 'string',
      times: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigAlertConfigEscalationList extends $dara.Model {
  escalationList?: DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigAlertConfigEscalationListEscalationList[];
  static names(): { [key: string]: string } {
    return {
      escalationList: 'escalationList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      escalationList: { 'type': 'array', 'itemType': DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigAlertConfigEscalationListEscalationList },
    };
  }

  validate() {
    if(Array.isArray(this.escalationList)) {
      $dara.Model.validateArray(this.escalationList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigAlertConfigTargetListTarget extends $dara.Model {
  arn?: string;
  id?: string;
  jsonParams?: string;
  level?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      id: 'Id',
      jsonParams: 'JsonParams',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      id: 'string',
      jsonParams: 'string',
      level: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigAlertConfigTargetList extends $dara.Model {
  target?: DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigAlertConfigTargetListTarget[];
  static names(): { [key: string]: string } {
    return {
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      target: { 'type': 'array', 'itemType': DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigAlertConfigTargetListTarget },
    };
  }

  validate() {
    if(Array.isArray(this.target)) {
      $dara.Model.validateArray(this.target);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigAlertConfig extends $dara.Model {
  endTime?: number;
  escalationList?: DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigAlertConfigEscalationList;
  notifyType?: number;
  silenceTime?: number;
  startTime?: number;
  targetList?: DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigAlertConfigTargetList;
  webHook?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      escalationList: 'EscalationList',
      notifyType: 'NotifyType',
      silenceTime: 'SilenceTime',
      startTime: 'StartTime',
      targetList: 'TargetList',
      webHook: 'WebHook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      escalationList: DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigAlertConfigEscalationList,
      notifyType: 'number',
      silenceTime: 'number',
      startTime: 'number',
      targetList: DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigAlertConfigTargetList,
      webHook: 'string',
    };
  }

  validate() {
    if(this.escalationList && typeof (this.escalationList as any).validate === 'function') {
      (this.escalationList as any).validate();
    }
    if(this.targetList && typeof (this.targetList as any).validate === 'function') {
      (this.targetList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigInstances extends $dara.Model {
  instance?: string[];
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.instance)) {
      $dara.Model.validateArray(this.instance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigTaskOption extends $dara.Model {
  httpKeyword?: string;
  httpMethod?: string;
  httpNegative?: boolean;
  httpPostContent?: string;
  httpResponseCharset?: string;
  httpURI?: string;
  interval?: number;
  telnetOrPingHost?: string;
  static names(): { [key: string]: string } {
    return {
      httpKeyword: 'HttpKeyword',
      httpMethod: 'HttpMethod',
      httpNegative: 'HttpNegative',
      httpPostContent: 'HttpPostContent',
      httpResponseCharset: 'HttpResponseCharset',
      httpURI: 'HttpURI',
      interval: 'Interval',
      telnetOrPingHost: 'TelnetOrPingHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpKeyword: 'string',
      httpMethod: 'string',
      httpNegative: 'boolean',
      httpPostContent: 'string',
      httpResponseCharset: 'string',
      httpURI: 'string',
      interval: 'number',
      telnetOrPingHost: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfig extends $dara.Model {
  alertConfig?: DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigAlertConfig;
  disabled?: boolean;
  groupId?: number;
  groupName?: string;
  id?: number;
  instances?: DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigInstances;
  taskName?: string;
  taskOption?: DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigTaskOption;
  taskScope?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      alertConfig: 'AlertConfig',
      disabled: 'Disabled',
      groupId: 'GroupId',
      groupName: 'GroupName',
      id: 'Id',
      instances: 'Instances',
      taskName: 'TaskName',
      taskOption: 'TaskOption',
      taskScope: 'TaskScope',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertConfig: DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigAlertConfig,
      disabled: 'boolean',
      groupId: 'number',
      groupName: 'string',
      id: 'number',
      instances: DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigInstances,
      taskName: 'string',
      taskOption: DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigTaskOption,
      taskScope: 'string',
      taskType: 'string',
    };
  }

  validate() {
    if(this.alertConfig && typeof (this.alertConfig as any).validate === 'function') {
      (this.alertConfig as any).validate();
    }
    if(this.instances && typeof (this.instances as any).validate === 'function') {
      (this.instances as any).validate();
    }
    if(this.taskOption && typeof (this.taskOption as any).validate === 'function') {
      (this.taskOption as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostAvailabilityListResponseBodyTaskList extends $dara.Model {
  nodeTaskConfig?: DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfig[];
  static names(): { [key: string]: string } {
    return {
      nodeTaskConfig: 'NodeTaskConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeTaskConfig: { 'type': 'array', 'itemType': DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfig },
    };
  }

  validate() {
    if(Array.isArray(this.nodeTaskConfig)) {
      $dara.Model.validateArray(this.nodeTaskConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostAvailabilityListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * > The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The specified resource is not found.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4A288E86-45C3-4858-9DB0-6D85B10BD92A
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - true
   * 
   * - false
   * 
   * @example
   * true
   */
  success?: boolean;
  taskList?: DescribeHostAvailabilityListResponseBodyTaskList;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskList: 'TaskList',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskList: DescribeHostAvailabilityListResponseBodyTaskList,
      total: 'number',
    };
  }

  validate() {
    if(this.taskList && typeof (this.taskList as any).validate === 'function') {
      (this.taskList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

