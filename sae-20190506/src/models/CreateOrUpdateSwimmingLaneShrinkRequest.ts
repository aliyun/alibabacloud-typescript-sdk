// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrUpdateSwimmingLaneShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration of the gateway route.
   * 
   * > This parameter is required if the gateway entry application for the swimlane group is a Java application.
   */
  appEntryRuleShrink?: string;
  /**
   * @remarks
   * The end-to-end canary release mode.
   * 
   * - `0`: content-based routing
   * 
   * - `1`: percentage-based routing
   * 
   * @example
   * 0
   */
  canaryModel?: number;
  /**
   * @remarks
   * The status of the swimlane.
   * 
   * - `true`: enabled
   * 
   * - `false`: disabled
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The ID of the swimlane group.
   * 
   * @example
   * b2a8a925-477a-eswa-b823-d5e22500****
   */
  groupId?: number;
  /**
   * @remarks
   * The ID of the swimlane.
   * 
   * @example
   * 13857
   */
  laneId?: number;
  /**
   * @remarks
   * The name of the swimlane.
   * 
   * @example
   * test
   */
  laneName?: string;
  /**
   * @remarks
   * The tag of the swimlane.
   * 
   * @example
   * g1
   */
  laneTag?: string;
  /**
   * @remarks
   * Configuration for the MSE gateway route.
   * 
   * > This parameter is required if the **EntryAppType** parameter is set to **apig** or **mse-gw**.
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

