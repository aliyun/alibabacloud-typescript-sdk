// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSwimmingLaneResponseBodyDataAppEntryRule } from "./DescribeSwimmingLaneResponseBodyDataAppEntryRule";
import { DescribeSwimmingLaneResponseBodyDataApps } from "./DescribeSwimmingLaneResponseBodyDataApps";
import { DescribeSwimmingLaneResponseBodyDataMseGatewayEntryRule } from "./DescribeSwimmingLaneResponseBodyDataMseGatewayEntryRule";


export class DescribeSwimmingLaneResponseBodyData extends $dara.Model {
  appEntryRule?: DescribeSwimmingLaneResponseBodyDataAppEntryRule;
  apps?: DescribeSwimmingLaneResponseBodyDataApps[];
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
   * 9488
   */
  laneId?: number;
  /**
   * @example
   * mse-test
   */
  laneName?: string;
  /**
   * @example
   * {"alicloud.service.tag":"g1"}
   */
  laneTag?: string;
  mseGatewayEntryRule?: DescribeSwimmingLaneResponseBodyDataMseGatewayEntryRule;
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
      appEntryRule: DescribeSwimmingLaneResponseBodyDataAppEntryRule,
      apps: { 'type': 'array', 'itemType': DescribeSwimmingLaneResponseBodyDataApps },
      canaryModel: 'number',
      enable: 'boolean',
      enableRules: 'boolean',
      laneId: 'number',
      laneName: 'string',
      laneTag: 'string',
      mseGatewayEntryRule: DescribeSwimmingLaneResponseBodyDataMseGatewayEntryRule,
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

