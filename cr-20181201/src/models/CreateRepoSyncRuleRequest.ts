// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRepoSyncRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The source instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-hpdfkc6utbaq****
   */
  instanceId?: string;
  /**
   * @remarks
   * The namespace name of the source instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ns1
   */
  namespaceName?: string;
  /**
   * @remarks
   * The name of the image repository in the source instance.
   * 
   * @example
   * repo1
   */
  repoName?: string;
  /**
   * @remarks
   * The regular expression that is used to filter repositories.
   * 
   * >  This parameter is valid only when SyncScope is set to `NAMESPACE`.
   * 
   * @example
   * .*
   */
  repoNameFilter?: string;
  /**
   * @remarks
   * The name of the image synchronization rule.
   * 
   * This parameter is required.
   * 
   * @example
   * rule
   */
  syncRuleName?: string;
  /**
   * @remarks
   * The synchronization scope. Valid values:
   * 
   * *   `REPO`: synchronizes the image tags in an image repository that meet the synchronization rule.
   * *   `NAMESPACE`: synchronizes the image tags in a namespace that meet the synchronization rule.
   * 
   * This parameter is required.
   * 
   * @example
   * REPO
   */
  syncScope?: string;
  /**
   * @remarks
   * The mode of triggering the synchronization rule. Valid values:
   * 
   * *   `INITIATIVE`: manually triggers the synchronization rule.
   * *   `PASSIVE`: automatically triggers the synchronization rule.
   * 
   * @example
   * PASSIVE
   */
  syncTrigger?: string;
  /**
   * @remarks
   * The regular expression that is used to filter image tags.
   * 
   * This parameter is required.
   * 
   * @example
   * .*
   */
  tagFilter?: string;
  /**
   * @remarks
   * The destination instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-ibxs3piklys3****
   */
  targetInstanceId?: string;
  /**
   * @remarks
   * The namespace name of the destination instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ns1
   */
  targetNamespaceName?: string;
  /**
   * @remarks
   * The region ID of the destination instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  targetRegionId?: string;
  /**
   * @remarks
   * The name of the image repository in the destination instance.
   * 
   * @example
   * repo1
   */
  targetRepoName?: string;
  /**
   * @remarks
   * The user ID (UID) of the account to which the destination instance belongs.
   * 
   * >  If you synchronize images across accounts, you must use the UID.
   * 
   * @example
   * 12645940***
   */
  targetUserId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      namespaceName: 'NamespaceName',
      repoName: 'RepoName',
      repoNameFilter: 'RepoNameFilter',
      syncRuleName: 'SyncRuleName',
      syncScope: 'SyncScope',
      syncTrigger: 'SyncTrigger',
      tagFilter: 'TagFilter',
      targetInstanceId: 'TargetInstanceId',
      targetNamespaceName: 'TargetNamespaceName',
      targetRegionId: 'TargetRegionId',
      targetRepoName: 'TargetRepoName',
      targetUserId: 'TargetUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      namespaceName: 'string',
      repoName: 'string',
      repoNameFilter: 'string',
      syncRuleName: 'string',
      syncScope: 'string',
      syncTrigger: 'string',
      tagFilter: 'string',
      targetInstanceId: 'string',
      targetNamespaceName: 'string',
      targetRegionId: 'string',
      targetRepoName: 'string',
      targetUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

