// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAutoScalingConfigShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  configName?: string;
  effectiveTimeEnd?: string;
  effectiveTimeStart?: string;
  enabled?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
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
  scaleRuleListShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  scaleType?: string;
  securityToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  specId?: string;
  static names(): { [key: string]: string } {
    return {
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
      scaleRuleListShrink: 'ScaleRuleList',
      scaleType: 'ScaleType',
      securityToken: 'SecurityToken',
      specId: 'SpecId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
      scaleRuleListShrink: 'string',
      scaleType: 'string',
      securityToken: 'string',
      specId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

