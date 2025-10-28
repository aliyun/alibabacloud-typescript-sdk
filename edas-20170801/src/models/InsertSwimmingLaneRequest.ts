// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsertSwimmingLaneRequest extends $dara.Model {
  /**
   * @remarks
   * The information about applications related to the lane.
   * 
   * @example
   * [{"appId":"f72deaac-26ba-429a-948d-5fa47c4a****"},{"appId":"5049d2c8-f997-4fc9-92a2-153506a6****"}]
   */
  appInfos?: string;
  /**
   * @remarks
   * Specifies whether to enable the throttling rule.
   * 
   * @example
   * true
   */
  enableRules?: boolean;
  /**
   * @remarks
   * The throttling conditions.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"priority":1,"path":"/traffic","condition":"AND","restItems":[{"type":"header","name":"testheader","value":"testvalue","cond":"==","operator":"rawvalue"}]}]
   */
  entryRules?: string;
  /**
   * @remarks
   * The ID of the lane group.
   * 
   * This parameter is required.
   * 
   * @example
   * 95
   */
  groupId?: number;
  /**
   * @remarks
   * The ID of the custom namespace. The ID is in the `physical region ID:custom namespace identifier` format. Example: `cn-hangzhou:test`.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing:test
   */
  logicalRegionId?: string;
  /**
   * @remarks
   * The name of the lane.
   * 
   * This parameter is required.
   * 
   * @example
   * test1
   */
  name?: string;
  /**
   * @remarks
   * The tag.
   * 
   * This parameter is required.
   * 
   * @example
   * tag
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      appInfos: 'AppInfos',
      enableRules: 'EnableRules',
      entryRules: 'EntryRules',
      groupId: 'GroupId',
      logicalRegionId: 'LogicalRegionId',
      name: 'Name',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInfos: 'string',
      enableRules: 'boolean',
      entryRules: 'string',
      groupId: 'number',
      logicalRegionId: 'string',
      name: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

