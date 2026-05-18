// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessAlertConfigAlertConfigTargetListTarget extends $dara.Model {
  arn?: string;
  id?: string;
  jsonParmas?: string;
  level?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      id: 'Id',
      jsonParmas: 'JsonParmas',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      id: 'string',
      jsonParmas: 'string',
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

export class DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessAlertConfigAlertConfigTargetList extends $dara.Model {
  target?: DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessAlertConfigAlertConfigTargetListTarget[];
  static names(): { [key: string]: string } {
    return {
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      target: { 'type': 'array', 'itemType': DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessAlertConfigAlertConfigTargetListTarget },
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

export class DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessAlertConfigAlertConfig extends $dara.Model {
  comparisonOperator?: string;
  effectiveInterval?: string;
  escalationsLevel?: string;
  noEffectiveInterval?: string;
  silenceTime?: string;
  statistics?: string;
  targetList?: DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessAlertConfigAlertConfigTargetList;
  threshold?: string;
  times?: string;
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      effectiveInterval: 'EffectiveInterval',
      escalationsLevel: 'EscalationsLevel',
      noEffectiveInterval: 'NoEffectiveInterval',
      silenceTime: 'SilenceTime',
      statistics: 'Statistics',
      targetList: 'TargetList',
      threshold: 'Threshold',
      times: 'Times',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      effectiveInterval: 'string',
      escalationsLevel: 'string',
      noEffectiveInterval: 'string',
      silenceTime: 'string',
      statistics: 'string',
      targetList: DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessAlertConfigAlertConfigTargetList,
      threshold: 'string',
      times: 'string',
      webhook: 'string',
    };
  }

  validate() {
    if(this.targetList && typeof (this.targetList as any).validate === 'function') {
      (this.targetList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessAlertConfig extends $dara.Model {
  alertConfig?: DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessAlertConfigAlertConfig[];
  static names(): { [key: string]: string } {
    return {
      alertConfig: 'AlertConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertConfig: { 'type': 'array', 'itemType': DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessAlertConfigAlertConfig },
    };
  }

  validate() {
    if(Array.isArray(this.alertConfig)) {
      $dara.Model.validateArray(this.alertConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessMatchExpressMatchExpress extends $dara.Model {
  function?: string;
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      function: 'Function',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      function: 'string',
      name: 'string',
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

export class DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessMatchExpress extends $dara.Model {
  matchExpress?: DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessMatchExpressMatchExpress[];
  static names(): { [key: string]: string } {
    return {
      matchExpress: 'MatchExpress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchExpress: { 'type': 'array', 'itemType': DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessMatchExpressMatchExpress },
    };
  }

  validate() {
    if(Array.isArray(this.matchExpress)) {
      $dara.Model.validateArray(this.matchExpress);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcess extends $dara.Model {
  alertConfig?: DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessAlertConfig;
  groupId?: string;
  id?: string;
  matchExpress?: DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessMatchExpress;
  matchExpressFilterRelation?: string;
  processName?: string;
  static names(): { [key: string]: string } {
    return {
      alertConfig: 'AlertConfig',
      groupId: 'GroupId',
      id: 'Id',
      matchExpress: 'MatchExpress',
      matchExpressFilterRelation: 'MatchExpressFilterRelation',
      processName: 'ProcessName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertConfig: DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessAlertConfig,
      groupId: 'string',
      id: 'string',
      matchExpress: DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessMatchExpress,
      matchExpressFilterRelation: 'string',
      processName: 'string',
    };
  }

  validate() {
    if(this.alertConfig && typeof (this.alertConfig as any).validate === 'function') {
      (this.alertConfig as any).validate();
    }
    if(this.matchExpress && typeof (this.matchExpress as any).validate === 'function') {
      (this.matchExpress as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupMonitoringAgentProcessResponseBodyProcesses extends $dara.Model {
  process?: DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcess[];
  static names(): { [key: string]: string } {
    return {
      process: 'Process',
    };
  }

  static types(): { [key: string]: any } {
    return {
      process: { 'type': 'array', 'itemType': DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcess },
    };
  }

  validate() {
    if(Array.isArray(this.process)) {
      $dara.Model.validateArray(this.process);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupMonitoringAgentProcessResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status codes.
   * 
   * >  The status code 200 indicates that the request was successful.
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
   * The Request is not authorization.
   */
  message?: string;
  /**
   * @remarks
   * The page number. Default value: 1
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  processes?: DescribeGroupMonitoringAgentProcessResponseBodyProcesses;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7985D471-3FA8-4EE9-8F4B-45C19DF3D36F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values: Valid values: true and false.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 28
   */
  total?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      processes: 'Processes',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      processes: DescribeGroupMonitoringAgentProcessResponseBodyProcesses,
      requestId: 'string',
      success: 'boolean',
      total: 'string',
    };
  }

  validate() {
    if(this.processes && typeof (this.processes as any).validate === 'function') {
      (this.processes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

