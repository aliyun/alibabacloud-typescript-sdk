// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAllSwimmingLanesResponseBodyDataAppEntryRule } from "./ListAllSwimmingLanesResponseBodyDataAppEntryRule";
import { ListAllSwimmingLanesResponseBodyDataApps } from "./ListAllSwimmingLanesResponseBodyDataApps";
import { ListAllSwimmingLanesResponseBodyDataMseGatewayEntryRule } from "./ListAllSwimmingLanesResponseBodyDataMseGatewayEntryRule";


export class ListAllSwimmingLanesResponseBodyData extends $dara.Model {
  appEntryRule?: ListAllSwimmingLanesResponseBodyDataAppEntryRule;
  apps?: ListAllSwimmingLanesResponseBodyDataApps[];
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
   * true
   */
  enableRules?: boolean;
  /**
   * @example
   * 16401
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
  mseGatewayEntryRule?: ListAllSwimmingLanesResponseBodyDataMseGatewayEntryRule;
  static names(): { [key: string]: string } {
    return {
      appEntryRule: 'AppEntryRule',
      apps: 'Apps',
      canaryModel: 'CanaryModel',
      enable: 'Enable',
      enableRules: 'EnableRules',
      laneId: 'LaneId',
      laneName: 'LaneName',
      laneTag: 'LaneTag',
      mseGatewayEntryRule: 'MseGatewayEntryRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appEntryRule: ListAllSwimmingLanesResponseBodyDataAppEntryRule,
      apps: { 'type': 'array', 'itemType': ListAllSwimmingLanesResponseBodyDataApps },
      canaryModel: 'number',
      enable: 'boolean',
      enableRules: 'boolean',
      laneId: 'number',
      laneName: 'string',
      laneTag: 'string',
      mseGatewayEntryRule: ListAllSwimmingLanesResponseBodyDataMseGatewayEntryRule,
    };
  }

  validate() {
    if(this.appEntryRule && typeof (this.appEntryRule as any).validate === 'function') {
      (this.appEntryRule as any).validate();
    }
    if(Array.isArray(this.apps)) {
      $dara.Model.validateArray(this.apps);
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

