// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetUserProfilePathRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of a single app instance group. This parameter and AppInstanceGroupSetId are mutually exclusive. If a cloud app or cloud browser app instance group belongs to an enabled set, you must configure the rules at the set level.
   * 
   * @example
   * aig-0bi83v****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The ID of an enabled app instance group set. This parameter and AppInstanceGroupId are mutually exclusive. You can set rules for up to 200 member app instance groups at a time.
   * 
   * @example
   * set-3jm9d0abc00example
   */
  appInstanceGroupSetId?: string;
  /**
   * @remarks
   * The region ID of the request. When you query or set rules for a specified app instance group, use the region where the target app instance group resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The JSON array string of the complete rule list. Each item uses `blackPath` to specify the excluded path and `whitePaths` to specify the relative paths that still require roaming within the excluded directory. The path type `file` indicates a file, and `folder` indicates a directory.
   * 
   * @example
   * [{"blackPath":{"path":"AppData\\\\Local","type":"folder"},"whitePaths":[{"path":".\\\\Microsoft\\\\Office","type":"folder"}]}]
   */
  userProfilePathRules?: string;
  /**
   * @remarks
   * The type of rule to set. Set this parameter to `AppInstanceGroup` when you configure rules for an app instance group or an app instance group set.
   * 
   * This parameter is required.
   * 
   * @example
   * AppInstanceGroup
   */
  userProfileRuleType?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceGroupSetId: 'AppInstanceGroupSetId',
      regionId: 'RegionId',
      userProfilePathRules: 'UserProfilePathRules',
      userProfileRuleType: 'UserProfileRuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      appInstanceGroupSetId: 'string',
      regionId: 'string',
      userProfilePathRules: 'string',
      userProfileRuleType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

