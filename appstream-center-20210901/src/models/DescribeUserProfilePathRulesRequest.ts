// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserProfilePathRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the app instance group. Specify either this parameter or AppInstanceGroupSetId when querying app instance group rules. This parameter can be omitted when querying system default rules.
   * 
   * @example
   * aig-0bi83v****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The ID of the app instance group set. Specify either this parameter or AppInstanceGroupId when querying app instance group set rules. This parameter can be omitted when querying system default rules.
   * 
   * @example
   * set-3jm9d0abc00example
   */
  appInstanceGroupSetId?: string;
  /**
   * @remarks
   * The region ID of the request. When querying or setting the rules for a specified app instance group, use the region where the target app instance group is located.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The path rule type. Valid values:
   * - Default: Queries the system default rules. Both target IDs can be omitted.
   * - AppInstanceGroup: Queries the rules of an app instance group or an app instance group set.
   * 
   * This parameter is required.
   * 
   * @example
   * AppInstanceGroup
   */
  ruleType?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceGroupSetId: 'AppInstanceGroupSetId',
      regionId: 'RegionId',
      ruleType: 'RuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      appInstanceGroupSetId: 'string',
      regionId: 'string',
      ruleType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

