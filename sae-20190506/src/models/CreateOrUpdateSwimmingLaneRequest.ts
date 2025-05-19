// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateOrUpdateSwimmingLaneRequestAppEntryRule } from "./CreateOrUpdateSwimmingLaneRequestAppEntryRule";
import { CreateOrUpdateSwimmingLaneRequestMseGatewayEntryRule } from "./CreateOrUpdateSwimmingLaneRequestMseGatewayEntryRule";


export class CreateOrUpdateSwimmingLaneRequest extends $dara.Model {
  appEntryRule?: CreateOrUpdateSwimmingLaneRequestAppEntryRule;
  /**
   * @example
   * 0
   */
  canaryModel?: number;
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * b2a8a925-477a-eswa-b823-d5e22500****
   */
  groupId?: number;
  /**
   * @example
   * 13857
   */
  laneId?: number;
  /**
   * @example
   * test
   */
  laneName?: string;
  /**
   * @example
   * {"alicloud.service.tag":"g1"}
   */
  laneTag?: string;
  mseGatewayEntryRule?: CreateOrUpdateSwimmingLaneRequestMseGatewayEntryRule;
  /**
   * @example
   * cn-beijing:test
   */
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appEntryRule: 'AppEntryRule',
      canaryModel: 'CanaryModel',
      enable: 'Enable',
      groupId: 'GroupId',
      laneId: 'LaneId',
      laneName: 'LaneName',
      laneTag: 'LaneTag',
      mseGatewayEntryRule: 'MseGatewayEntryRule',
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appEntryRule: CreateOrUpdateSwimmingLaneRequestAppEntryRule,
      canaryModel: 'number',
      enable: 'boolean',
      groupId: 'number',
      laneId: 'number',
      laneName: 'string',
      laneTag: 'string',
      mseGatewayEntryRule: CreateOrUpdateSwimmingLaneRequestMseGatewayEntryRule,
      namespaceId: 'string',
    };
  }

  validate() {
    if(this.appEntryRule && typeof (this.appEntryRule as any).validate === 'function') {
      (this.appEntryRule as any).validate();
    }
    if(this.mseGatewayEntryRule && typeof (this.mseGatewayEntryRule as any).validate === 'function') {
      (this.mseGatewayEntryRule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

