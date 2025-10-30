// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrUpdateSwimmingLaneShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The route configuration of the gateway.
   * 
   * >  This parameter is required if the gateway entry of the lane group is Java.
   */
  appEntryRuleShrink?: string;
  /**
   * @remarks
   * Full-link Grayscale Mode:
   * 
   * *   0: The request is routed based on the content of the request.
   * *   1: routing based on percentages
   * 
   * @example
   * 0
   */
  canaryModel?: number;
  /**
   * @remarks
   * Lane Status
   * 
   * *   true: enabled
   * *   false: disabled
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The ID of the lane group to which the lane belongs.
   * 
   * @example
   * b2a8a925-477a-eswa-b823-d5e22500****
   */
  groupId?: number;
  /**
   * @remarks
   * The ID of the lane.
   * 
   * @example
   * 13857
   */
  laneId?: number;
  /**
   * @remarks
   * The name of the lane.
   * 
   * @example
   * test
   */
  laneName?: string;
  /**
   * @remarks
   * The tag of the lane.
   * 
   * @example
   * {"alicloud.service.tag":"g1"}
   */
  laneTag?: string;
  /**
   * @remarks
   * The route configuration of the MSE gateway.
   * 
   * >  If the **EntryAppType** is set to **apig** or **mse-gw**, it is required.
   */
  mseGatewayEntryRuleShrink?: string;
  /**
   * @remarks
   * The namespace ID.
   * 
   * @example
   * cn-beijing:test
   */
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appEntryRuleShrink: 'AppEntryRule',
      canaryModel: 'CanaryModel',
      enable: 'Enable',
      groupId: 'GroupId',
      laneId: 'LaneId',
      laneName: 'LaneName',
      laneTag: 'LaneTag',
      mseGatewayEntryRuleShrink: 'MseGatewayEntryRule',
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appEntryRuleShrink: 'string',
      canaryModel: 'number',
      enable: 'boolean',
      groupId: 'number',
      laneId: 'number',
      laneName: 'string',
      laneTag: 'string',
      mseGatewayEntryRuleShrink: 'string',
      namespaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

