// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRepoSyncRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the source instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-hpdfkc6utbaq****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the custom synchronization link.
   * 
   * @example
   * stl-72cjfd3fayno8***
   */
  linkId?: string;
  /**
   * @remarks
   * The namespace name of the source instance.
   * 
   * @example
   * ns1
   */
  namespaceName?: string;
  /**
   * @remarks
   * The instance-level namespace regex filter.
   * > This parameter takes effect only when SyncScope is set to `INSTANCE`.
   * 
   * @example
   * .*
   */
  namespaceNameFilter?: string;
  /**
   * @remarks
   * The execution priority of the synchronization task. Synchronization tasks are executed in descending order of priority. Tasks with the same priority are executed in random order.
   * 
   * Valid values: 1 to 5.
   * 
   * Default value: 3.
   * 
   * @example
   * 3
   */
  priority?: number;
  /**
   * @remarks
   * The repository name of the source instance.
   * 
   * @example
   * repo1
   */
  repoName?: string;
  /**
   * @remarks
   * The repository filter rule.
   * > This parameter takes effect only when SyncScope is set to `INSTANCE` or `NAMESPACE`.
   * 
   * @example
   * .*
   */
  repoNameFilter?: string;
  /**
   * @remarks
   * The name of the synchronization rule.
   * 
   * This parameter is required.
   * 
   * @example
   * rule
   */
  syncRuleName?: string;
  /**
   * @remarks
   * The synchronization type. Valid values:
   * 
   * - `REPO`: Synchronizes by image repository.
   * 
   * - `NAMESPACE`: Synchronizes by namespace.
   * 
   * - `INSTANCE`: Synchronizes by namespace regex and repository regex.
   * 
   * This parameter is required.
   * 
   * @example
   * REPO
   */
  syncScope?: string;
  /**
   * @remarks
   * The trigger for the synchronization action. Valid values:
   * 
   * - `INITIATIVE`: Manual trigger.
   *  
   * - `PASSIVE`: Automatic trigger.
   * 
   * @example
   * PASSIVE
   */
  syncTrigger?: string;
  /**
   * @remarks
   * The tag filter rule.
   * 
   * This parameter is required.
   * 
   * @example
   * .*
   */
  tagFilter?: string;
  /**
   * @remarks
   * The ID of the target instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-ibxs3piklys3****
   */
  targetInstanceId?: string;
  /**
   * @remarks
   * The namespace name of the target instance.
   * 
   * @example
   * ns1
   */
  targetNamespaceName?: string;
  /**
   * @remarks
   * The region ID of the target instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  targetRegionId?: string;
  /**
   * @remarks
   * The image repository name of the target instance.
   * 
   * @example
   * repo1
   */
  targetRepoName?: string;
  /**
   * @remarks
   * The UID of the account to which the target instance belongs.
   * 
   * > This parameter is required for cross-account image synchronization.
   * 
   * @example
   * 12645940***
   */
  targetUserId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      linkId: 'LinkId',
      namespaceName: 'NamespaceName',
      namespaceNameFilter: 'NamespaceNameFilter',
      priority: 'Priority',
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
      linkId: 'string',
      namespaceName: 'string',
      namespaceNameFilter: 'string',
      priority: 'number',
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

