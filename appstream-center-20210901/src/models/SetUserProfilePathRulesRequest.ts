// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetUserProfilePathRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of a single app instance group. You must specify either this parameter or AppInstanceGroupSetId. If the cloud application or cloud browser app instance group belongs to an enabled set, you must configure the rules for the set.
   * 
   * @example
   * aig-0bi83v****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The ID of an enabled app instance group set. You must specify either this parameter or AppInstanceGroupId. You can configure rules for up to 200 member app instance groups at a time.
   * 
   * @example
   * set-3jm9d0abc00example
   */
  appInstanceGroupSetId?: string;
  /**
   * @remarks
   * The region ID. When you query or configure rules for a specific app instance group, specify the region where the target app instance group resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The JSON array string that contains the complete list of rules. Each item uses `blackPath` to specify the excluded path and `whitePaths` to specify the relative paths that still require roaming within the excluded directory. The path type `file` indicates a file, and `folder` indicates a directory.
   * 
   * @example
   * [{"blackPath":{"path":"AppData\\\\Local","type":"folder"},"whitePaths":[{"path":".\\\\Microsoft\\\\Office","type":"folder"}]}]
   */
  userProfilePathRules?: string;
  /**
   * @remarks
   * The type of rule to configure. Set this parameter to `AppInstanceGroup` when you configure rules for an app instance group or an app instance group set.
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

