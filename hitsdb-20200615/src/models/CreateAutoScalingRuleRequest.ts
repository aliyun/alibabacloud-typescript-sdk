// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAutoScalingRuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  configId?: string;
  enabled?: boolean;
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  observationWindow?: number;
  operationType?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  ruleName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  ruleType?: string;
  scaleInStep?: number;
  scaleOutStep?: number;
  securityToken?: string;
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
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ruleName: 'RuleName',
      ruleType: 'RuleType',
      scaleInStep: 'ScaleInStep',
      scaleOutStep: 'ScaleOutStep',
      securityToken: 'SecurityToken',
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
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ruleName: 'string',
      ruleType: 'string',
      scaleInStep: 'number',
      scaleOutStep: 'number',
      securityToken: 'string',
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

