// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRepoSyncRuleResponseBodySyncRules extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1572604642000
   */
  createTime?: number;
  /**
   * @remarks
   * Indicates whether images are synchronized across accounts. Valid values:
   * 
   * - `true`: Images are synchronized across accounts.
   * 
   * - `false`: Images are synchronized within the same account.
   * 
   * Default value: `false`
   * 
   * @example
   * true
   */
  crossUser?: boolean;
  /**
   * @remarks
   * The custom synchronization link ID.
   * 
   * @example
   * stl-w7b1tdlq1mfrw***
   */
  linkId?: string;
  /**
   * @remarks
   * The source instance ID.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  localInstanceId?: string;
  /**
   * @remarks
   * The namespace name of the source instance.
   * 
   * @example
   * test
   */
  localNamespaceName?: string;
  /**
   * @remarks
   * The region ID of the source instance.
   * 
   * @example
   * cn-shanghai
   */
  localRegionId?: string;
  /**
   * @remarks
   * The repository name of the source instance.
   * 
   * @example
   * test-repo-local
   */
  localRepoName?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 1572604642000
   */
  modifiedTime?: number;
  /**
   * @remarks
   * The namespace regex at the instance level.
   * > This parameter is valid only when SyncScope is set to `INSTANCE`.
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
   * The repository filtering rule.
   * > This parameter is valid only when SyncScope is set to `INSTANCE` or `NAMESPACE`.
   * 
   * @example
   * .*
   */
  repoNameFilter?: string;
  /**
   * @remarks
   * The synchronization direction. Valid values:
   * 
   * - `FROM`: synchronizes from the source instance to the target instance
   * 
   * - `TO`: synchronizes from the target instance to the source instance
   * 
   * @example
   * FROM
   */
  syncDirection?: string;
  /**
   * @remarks
   * The synchronization rule ID.
   * 
   * @example
   * crsr-7lph66uloi6h****
   */
  syncRuleId?: string;
  /**
   * @remarks
   * The synchronization rule name.
   * 
   * @example
   * sync-rule-1
   */
  syncRuleName?: string;
  /**
   * @remarks
   * The synchronization scope. Valid values:
   * 
   * - `INSTANCE`: synchronizes based on namespace regex and repository regex rules
   * 
   * - `NAMESPACE`: synchronizes by namespace
   * 
   * - `REPO`: synchronizes by image repository
   * 
   * @example
   * NAMESPACE
   */
  syncScope?: string;
  /**
   * @remarks
   * The trigger policy. Valid values:
   * 
   * - `INITIATIVE`: proactive trigger
   * 
   * - `PASSIVE`: passive trigger
   * 
   * @example
   * PASSIVE
   */
  syncTrigger?: string;
  /**
   * @remarks
   * The tag filtering rule.
   * 
   * @example
   * .*
   */
  tagFilter?: string;
  /**
   * @remarks
   * The target instance ID.
   * 
   * @example
   * cri-k77rd2eo9ztt****
   */
  targetInstanceId?: string;
  /**
   * @remarks
   * The namespace name of the target instance.
   * 
   * @example
   * test
   */
  targetNamespaceName?: string;
  /**
   * @remarks
   * The region ID of the target instance.
   * 
   * @example
   * cn-shenzhen
   */
  targetRegionId?: string;
  /**
   * @remarks
   * The repository name of the target instance.
   * 
   * @example
   * test-repo-target
   */
  targetRepoName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      crossUser: 'CrossUser',
      linkId: 'LinkId',
      localInstanceId: 'LocalInstanceId',
      localNamespaceName: 'LocalNamespaceName',
      localRegionId: 'LocalRegionId',
      localRepoName: 'LocalRepoName',
      modifiedTime: 'ModifiedTime',
      namespaceNameFilter: 'NamespaceNameFilter',
      priority: 'Priority',
      repoNameFilter: 'RepoNameFilter',
      syncDirection: 'SyncDirection',
      syncRuleId: 'SyncRuleId',
      syncRuleName: 'SyncRuleName',
      syncScope: 'SyncScope',
      syncTrigger: 'SyncTrigger',
      tagFilter: 'TagFilter',
      targetInstanceId: 'TargetInstanceId',
      targetNamespaceName: 'TargetNamespaceName',
      targetRegionId: 'TargetRegionId',
      targetRepoName: 'TargetRepoName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      crossUser: 'boolean',
      linkId: 'string',
      localInstanceId: 'string',
      localNamespaceName: 'string',
      localRegionId: 'string',
      localRepoName: 'string',
      modifiedTime: 'number',
      namespaceNameFilter: 'string',
      priority: 'number',
      repoNameFilter: 'string',
      syncDirection: 'string',
      syncRuleId: 'string',
      syncRuleName: 'string',
      syncScope: 'string',
      syncTrigger: 'string',
      tagFilter: 'string',
      targetInstanceId: 'string',
      targetNamespaceName: 'string',
      targetRegionId: 'string',
      targetRepoName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoSyncRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 838D1602-6D8F-47FB-B60A-656645D2****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of synchronization rules.
   */
  syncRules?: ListRepoSyncRuleResponseBodySyncRules[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      syncRules: 'SyncRules',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      syncRules: { 'type': 'array', 'itemType': ListRepoSyncRuleResponseBodySyncRules },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.syncRules)) {
      $dara.Model.validateArray(this.syncRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

