// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAutoScalingRulesResponseBodyDataScaleRules extends $dara.Model {
  configId?: string;
  enabled?: boolean;
  endTime?: string;
  instanceId?: string;
  observationWindow?: number;
  operationType?: string;
  ruleId?: string;
  ruleName?: string;
  ruleType?: string;
  scaleInStep?: number;
  scaleOutStep?: number;
  silenceTime?: number;
  startTime?: string;
  targetMetric?: string;
  targetNodes?: number;
  thresholdLower?: number;
  thresholdUpper?: number;
  triggerCronExpr?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      enabled: 'Enabled',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      observationWindow: 'ObservationWindow',
      operationType: 'OperationType',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      ruleType: 'RuleType',
      scaleInStep: 'ScaleInStep',
      scaleOutStep: 'ScaleOutStep',
      silenceTime: 'SilenceTime',
      startTime: 'StartTime',
      targetMetric: 'TargetMetric',
      targetNodes: 'TargetNodes',
      thresholdLower: 'ThresholdLower',
      thresholdUpper: 'ThresholdUpper',
      triggerCronExpr: 'TriggerCronExpr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'string',
      enabled: 'boolean',
      endTime: 'string',
      instanceId: 'string',
      observationWindow: 'number',
      operationType: 'string',
      ruleId: 'string',
      ruleName: 'string',
      ruleType: 'string',
      scaleInStep: 'number',
      scaleOutStep: 'number',
      silenceTime: 'number',
      startTime: 'string',
      targetMetric: 'string',
      targetNodes: 'number',
      thresholdLower: 'number',
      thresholdUpper: 'number',
      triggerCronExpr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAutoScalingRulesResponseBodyData extends $dara.Model {
  scaleRules?: ListAutoScalingRulesResponseBodyDataScaleRules[];
  static names(): { [key: string]: string } {
    return {
      scaleRules: 'ScaleRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scaleRules: { 'type': 'array', 'itemType': ListAutoScalingRulesResponseBodyDataScaleRules },
    };
  }

  validate() {
    if(Array.isArray(this.scaleRules)) {
      $dara.Model.validateArray(this.scaleRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAutoScalingRulesResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  code?: string;
  data?: ListAutoScalingRulesResponseBodyData;
  dynamicCode?: string;
  dynamicMessage?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: ListAutoScalingRulesResponseBodyData,
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
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

