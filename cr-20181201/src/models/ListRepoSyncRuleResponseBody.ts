// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRepoSyncRuleResponseBodySyncRules extends $dara.Model {
  /**
   * @remarks
   * The time when the synchronization rule was created.
   * 
   * @example
   * 1572604642000
   */
  createTime?: number;
  /**
   * @remarks
   * Indicates whether the synchronization is performed across Alibaba Cloud accounts. Valid values:
   * 
   * *   `true`: Images are synchronized across Alibaba Cloud accounts.
   * *   `false`: Images are synchronized within the same Alibaba Cloud account.
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   */
  crossUser?: boolean;
  /**
   * @remarks
   * The ID of the source instance.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  localInstanceId?: string;
  /**
   * @remarks
   * The name of the namespace in the source instance.
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
   * The name of the repository in the source instance.
   * 
   * @example
   * test-repo-local
   */
  localRepoName?: string;
  /**
   * @remarks
   * The time when the synchronization rule was last modified.
   * 
   * @example
   * 1572604642000
   */
  modifiedTime?: number;
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
   * The synchronization direction. Valid values:
   * 
   * *   `FROM`: Images are synchronized from the source instance to the destination instance.
   * *   `TO`: Images are synchronized from the destination instance to the source instance.
   * 
   * @example
   * FROM
   */
  syncDirection?: string;
  /**
   * @remarks
   * The ID of the synchronization rule.
   * 
   * @example
   * crsr-7lph66uloi6h****
   */
  syncRuleId?: string;
  /**
   * @remarks
   * The name of the synchronization rule.
   * 
   * @example
   * sync-rule-1
   */
  syncRuleName?: string;
  /**
   * @remarks
   * The synchronization scope. Valid values:
   * 
   * *   `NAMESPACE`: synchronizes the image tags in a namespace that meet the synchronization rule.
   * *   `REPO`: synchronizes the image tags in an image repository that meet the synchronization rule.
   * 
   * @example
   * NAMESPACE
   */
  syncScope?: string;
  /**
   * @remarks
   * The policy that is applied to trigger the synchronization rule. Valid values:
   * 
   * *   `INITIATIVE`: The synchronization rule is positively triggered.
   * *   `PASSIVE`: The synchronization rule is passively triggered.
   * 
   * @example
   * PASSIVE
   */
  syncTrigger?: string;
  /**
   * @remarks
   * The regular expression that is used to filter image tags.
   * 
   * @example
   * .*
   */
  tagFilter?: string;
  /**
   * @remarks
   * The ID of the destination instance.
   * 
   * @example
   * cri-k77rd2eo9ztt****
   */
  targetInstanceId?: string;
  /**
   * @remarks
   * The name of the namespace in the destination instance.
   * 
   * @example
   * test
   */
  targetNamespaceName?: string;
  /**
   * @remarks
   * The region ID of the destination instance.
   * 
   * @example
   * cn-shenzhen
   */
  targetRegionId?: string;
  /**
   * @remarks
   * The name of the repository in the destination instance.
   * 
   * @example
   * test-repo-target
   */
  targetRepoName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      crossUser: 'CrossUser',
      localInstanceId: 'LocalInstanceId',
      localNamespaceName: 'LocalNamespaceName',
      localRegionId: 'LocalRegionId',
      localRepoName: 'LocalRepoName',
      modifiedTime: 'ModifiedTime',
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
      localInstanceId: 'string',
      localNamespaceName: 'string',
      localRegionId: 'string',
      localRepoName: 'string',
      modifiedTime: 'number',
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
   * The number of entries per page.
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
   * The queried synchronization rules.
   */
  syncRules?: ListRepoSyncRuleResponseBodySyncRules[];
  /**
   * @remarks
   * The total number of entries returned.
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

