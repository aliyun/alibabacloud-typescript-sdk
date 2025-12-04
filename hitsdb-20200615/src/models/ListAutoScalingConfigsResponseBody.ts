// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAutoScalingConfigsResponseBodyDataScaleConfigsScaleRuleList extends $dara.Model {
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

export class ListAutoScalingConfigsResponseBodyDataScaleConfigs extends $dara.Model {
  configId?: string;
  configName?: string;
  effectiveTimeEnd?: string;
  effectiveTimeStart?: string;
  enabled?: boolean;
  engine?: string;
  instanceId?: string;
  nodesMax?: number;
  nodesMin?: number;
  scaleRuleList?: ListAutoScalingConfigsResponseBodyDataScaleConfigsScaleRuleList[];
  scaleType?: string;
  specId?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      configName: 'ConfigName',
      effectiveTimeEnd: 'EffectiveTimeEnd',
      effectiveTimeStart: 'EffectiveTimeStart',
      enabled: 'Enabled',
      engine: 'Engine',
      instanceId: 'InstanceId',
      nodesMax: 'NodesMax',
      nodesMin: 'NodesMin',
      scaleRuleList: 'ScaleRuleList',
      scaleType: 'ScaleType',
      specId: 'SpecId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'string',
      configName: 'string',
      effectiveTimeEnd: 'string',
      effectiveTimeStart: 'string',
      enabled: 'boolean',
      engine: 'string',
      instanceId: 'string',
      nodesMax: 'number',
      nodesMin: 'number',
      scaleRuleList: { 'type': 'array', 'itemType': ListAutoScalingConfigsResponseBodyDataScaleConfigsScaleRuleList },
      scaleType: 'string',
      specId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.scaleRuleList)) {
      $dara.Model.validateArray(this.scaleRuleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAutoScalingConfigsResponseBodyData extends $dara.Model {
  scaleConfigs?: ListAutoScalingConfigsResponseBodyDataScaleConfigs[];
  static names(): { [key: string]: string } {
    return {
      scaleConfigs: 'ScaleConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scaleConfigs: { 'type': 'array', 'itemType': ListAutoScalingConfigsResponseBodyDataScaleConfigs },
    };
  }

  validate() {
    if(Array.isArray(this.scaleConfigs)) {
      $dara.Model.validateArray(this.scaleConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAutoScalingConfigsResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  code?: string;
  data?: ListAutoScalingConfigsResponseBodyData;
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
      data: ListAutoScalingConfigsResponseBodyData,
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

