// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSwimmingLaneRequest extends $dara.Model {
  /**
   * @remarks
   * The list of applications that are related to the lane.
   * 
   * @example
   * [{"appId":"8e7689af-6ddd-4676-8ee6-5fbecdf2****"},{"appId":"f72deaac-26ba-429a-948d-5fa47c4a****"},{"appId":"99a2d4b5-99a5-4e25-a964-1bd03a17****"}]
   */
  appInfos?: string;
  /**
   * @remarks
   * Specifies whether to enable the throttling rule.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enableRules?: boolean;
  /**
   * @remarks
   * The configuration of the throttling rule.
   * 
   * @example
   * [{"priority":1,"path":"/traffictest","condition":"AND","restItems":[{"type":"header","name":"testheader","value":"testheadervalue","cond":"==","operator":"rawvalue"}]}]
   */
  entryRules?: string;
  /**
   * @remarks
   * The ID of the lane.
   * 
   * This parameter is required.
   * 
   * @example
   * 224
   */
  laneId?: number;
  /**
   * @remarks
   * The name of the lane.
   * 
   * @example
   * test-swimlane
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      appInfos: 'AppInfos',
      enableRules: 'EnableRules',
      entryRules: 'EntryRules',
      laneId: 'LaneId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInfos: 'string',
      enableRules: 'boolean',
      entryRules: 'string',
      laneId: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

