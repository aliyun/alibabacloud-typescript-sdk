// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRepoSyncRuleResponseBodySyncRules extends $dara.Model {
  /**
   * @remarks
   * The time when the synchronization rule was created. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1572604642000
   */
  createTime?: number;
  /**
   * @remarks
   * Indicates whether images are synchronized across different Alibaba Cloud accounts. Valid values:
   * 
   * - `true`
   * 
   * - `false`
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   */
  crossUser?: boolean;
  linkId?: string;
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
   * The time when the synchronization rule was last modified. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1572604642000
   */
  modifiedTime?: number;
  /**
   * @remarks
   * The regular expression that is used to filter repositories.
   * 
   * > This parameter is valid only when `SyncScope` is set to `NAMESPACE`.
   * 
   * @example
   * .*
   */
  repoNameFilter?: string;
  /**
   * @remarks
   * The synchronization direction. Valid values:
   * 
   * - `FROM`: from the source instance to the target instance.
   * 
   * - `TO`: from the target instance to the source instance.
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
   * - `NAMESPACE`: Synchronizes resources by namespace.
   * 
   * - `REPO`: Synchronizes resources by repository.
   * 
   * @example
   * NAMESPACE
   */
  syncScope?: string;
  /**
   * @remarks
   * The trigger policy. Valid values:
   * 
   * - `INITIATIVE`: The synchronization is actively triggered.
   * 
   * - `PASSIVE`: The synchronization is passively triggered.
   * 
   * @example
   * PASSIVE
   */
  syncTrigger?: string;
  /**
   * @remarks
   * The regular expression that is used to filter tags.
   * 
   * @example
   * .*
   */
  tagFilter?: string;
  /**
   * @remarks
   * The ID of the target instance.
   * 
   * @example
   * cri-k77rd2eo9ztt****
   */
  targetInstanceId?: string;
  /**
   * @remarks
   * The name of the namespace in the target instance.
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
   * The name of the repository in the target instance.
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
   * The response code.
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

