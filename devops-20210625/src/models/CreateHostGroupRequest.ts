// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHostGroupRequest extends $dara.Model {
  /**
   * @example
   * cn-beijing
   */
  aliyunRegion?: string;
  /**
   * @example
   * ecs
   */
  ecsLabelKey?: string;
  /**
   * @example
   * ecs
   */
  ecsLabelValue?: string;
  /**
   * @example
   * ECS_ALIYUN
   */
  ecsType?: string;
  /**
   * @example
   * 0
   */
  envId?: string;
  /**
   * @example
   * [{"aliyunRegionId":"cn-beijing","machineSn":"i-sssssss","instanceName":"ceshi","ip":"120.0.0.0"}]
   */
  machineInfos?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  serviceConnectionId?: number;
  /**
   * @example
   * 12,234
   */
  tagIds?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ECS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunRegion: 'aliyunRegion',
      ecsLabelKey: 'ecsLabelKey',
      ecsLabelValue: 'ecsLabelValue',
      ecsType: 'ecsType',
      envId: 'envId',
      machineInfos: 'machineInfos',
      name: 'name',
      serviceConnectionId: 'serviceConnectionId',
      tagIds: 'tagIds',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunRegion: 'string',
      ecsLabelKey: 'string',
      ecsLabelValue: 'string',
      ecsType: 'string',
      envId: 'string',
      machineInfos: 'string',
      name: 'string',
      serviceConnectionId: 'number',
      tagIds: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

