// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAutoScalingConfigRequestScaleRuleList extends $dara.Model {
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

export class ModifyAutoScalingConfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  configId?: string;
  configName?: string;
  effectiveTimeEnd?: string;
  effectiveTimeStart?: string;
  enabled?: boolean;
  engine?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  nodesMax?: number;
  nodesMin?: number;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scaleRuleList?: ModifyAutoScalingConfigRequestScaleRuleList[];
  scaleType?: string;
  securityToken?: string;
  specId?: string;
  storageCapacityMax?: number;
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
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scaleRuleList: 'ScaleRuleList',
      scaleType: 'ScaleType',
      securityToken: 'SecurityToken',
      specId: 'SpecId',
      storageCapacityMax: 'StorageCapacityMax',
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
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scaleRuleList: { 'type': 'array', 'itemType': ModifyAutoScalingConfigRequestScaleRuleList },
      scaleType: 'string',
      securityToken: 'string',
      specId: 'string',
      storageCapacityMax: 'number',
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

