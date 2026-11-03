// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrUpdateSwimmingLaneShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The gateway routing configuration.
   * 
   * > This parameter is required when the gateway entry of the traffic lane group is Java.
   */
  appEntryRuleShrink?: string;
  /**
   * @remarks
   * The end-to-end canary release mode. Valid values:
   * 
   * - 0: Routes traffic based on request content.
   * 
   * - 1: Routes traffic based on proportion.
   * 
   * @example
   * 0
   */
  canaryModel?: number;
  /**
   * @remarks
   * Specifies whether the traffic lane is enabled. Valid values:
   * 
   * - true: Enabled.
   * - false: Disabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The ID of the traffic lane group to which the traffic lane belongs.
   * 
   * @example
   * b2a8a925-477a-eswa-b823-d5e22500****
   */
  groupId?: number;
  /**
   * @remarks
   * The ID of the traffic lane.
   * 
   * @example
   * 13857
   */
  laneId?: number;
  /**
   * @remarks
   * The name of the traffic lane.
   * 
   * @example
   * test
   */
  laneName?: string;
  /**
   * @remarks
   * The tag of the traffic lane.
   * 
   * @example
   * g1
   */
  laneTag?: string;
  /**
   * @remarks
   * The MSE gateway routing configuration.
   * 
   * > This parameter is required when **EntryAppType** is set to **apig** or **mse-gw**.
   */
  mseGatewayEntryRuleShrink?: string;
  /**
   * @remarks
   * The ID of the namespace.
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

