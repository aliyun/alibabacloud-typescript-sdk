// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRepoSyncRuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cri-hpdfkc6utbaq****
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ns1
   */
  namespaceName?: string;
  /**
   * @example
   * repo1
   */
  repoName?: string;
  /**
   * @remarks
   * The rule that is used to filter repositories.
   * 
   * >  This parameter is valid only when SyncScope is set to `NAMESPACE`.
   * 
   * @example
   * .*
   */
  repoNameFilter?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rule
   */
  syncRuleName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * REPO
   */
  syncScope?: string;
  /**
   * @example
   * PASSIVE
   */
  syncTrigger?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * .*
   */
  tagFilter?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cri-ibxs3piklys3****
   */
  targetInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ns1
   */
  targetNamespaceName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  targetRegionId?: string;
  /**
   * @example
   * repo1
   */
  targetRepoName?: string;
  /**
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

