// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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
  scaleType?: string;
  securityToken?: string;
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
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scaleType: 'ScaleType',
      securityToken: 'SecurityToken',
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
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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

