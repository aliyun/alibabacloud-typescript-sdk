// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListArtifactLifecycleRuleResponseBodyRulesPoliciesCondition extends $dara.Model {
  /**
   * @remarks
   * The number of days since the last pull.
   * 
   * @example
   * 0
   */
  lastPullOlderThanDays?: number;
  /**
   * @remarks
   * The number of days since the last push.
   * 
   * @example
   * 0
   */
  lastPushOlderThanDays?: number;
  /**
   * @remarks
   * The number of latest image versions to retain.
   * 
   * @example
   * 0
   */
  latestTagCount?: number;
  static names(): { [key: string]: string } {
    return {
      lastPullOlderThanDays: 'LastPullOlderThanDays',
      lastPushOlderThanDays: 'LastPushOlderThanDays',
      latestTagCount: 'LatestTagCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastPullOlderThanDays: 'number',
      lastPushOlderThanDays: 'number',
      latestTagCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactLifecycleRuleResponseBodyRulesPoliciesFilter extends $dara.Model {
  /**
   * @remarks
   * The wildcard used to match image versions.
   */
  tagWildcard?: string;
  static names(): { [key: string]: string } {
    return {
      tagWildcard: 'TagWildcard',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagWildcard: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactLifecycleRuleResponseBodyRulesPolicies extends $dara.Model {
  /**
   * @remarks
   * The trigger condition of the lifecycle policy.
   */
  condition?: ListArtifactLifecycleRuleResponseBodyRulesPoliciesCondition;
  /**
   * @remarks
   * The image version filter condition.
   */
  filter?: ListArtifactLifecycleRuleResponseBodyRulesPoliciesFilter;
  /**
   * @remarks
   * The lifecycle policy type.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'Condition',
      filter: 'Filter',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: ListArtifactLifecycleRuleResponseBodyRulesPoliciesCondition,
      filter: ListArtifactLifecycleRuleResponseBodyRulesPoliciesFilter,
      type: 'string',
    };
  }

  validate() {
    if(this.condition && typeof (this.condition as any).validate === 'function') {
      (this.condition as any).validate();
    }
    if(this.filter && typeof (this.filter as any).validate === 'function') {
      (this.filter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactLifecycleRuleResponseBodyRules extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the rule is automatically executed.
   * 
   * @example
   * false
   */
  auto?: boolean;
  /**
   * @remarks
   * The creation time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1638187989000
   */
  createTime?: number;
  /**
   * @remarks
   * Indicates whether DryRun mode is enabled. When DryRun mode is enabled, only lifecycle task scanning is performed and no actual data cleanup is executed. This mode is disabled by default.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Indicates whether lifecycle management is enabled.
   * 
   * Only one of this parameter and EnableDeleteUntaggedManifest can be set to true.
   * 
   * @example
   * true
   */
  enableDeleteTag?: boolean;
  /**
   * @remarks
   * Indicates whether artifact cleanup is enabled.
   * 
   * Only one of this parameter and EnableDeleteTag can be set to true.
   * 
   * @example
   * false
   */
  enableDeleteUntaggedManifest?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * cri-brlg4cbj2yl****
   */
  instanceId?: string;
  /**
   * @remarks
   * The modification time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1678341923385
   */
  modifiedTime?: number;
  /**
   * @remarks
   * The namespace name.
   * 
   * @example
   * test-ns
   */
  namespaceName?: string;
  /**
   * @remarks
   * The next execution time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1638187989000
   */
  nextTime?: number;
  /**
   * @remarks
   * The list of lifecycle policies.
   */
  policies?: ListArtifactLifecycleRuleResponseBodyRulesPolicies[];
  /**
   * @remarks
   * The repository name.
   * 
   * @example
   * test_1
   */
  repoName?: string;
  /**
   * @remarks
   * The number of retained images.
   * 
   * @example
   * 30
   */
  retentionTagCount?: number;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * cralr-yqx1q5sir6d****
   */
  ruleId?: string;
  /**
   * @remarks
   * The execution cycle.
   * 
   * @example
   * WEEK
   */
  scheduleTime?: string;
  /**
   * @remarks
   * The cleanup scope.
   * 
   * @example
   * INSTANCE
   */
  scope?: string;
  /**
   * @remarks
   * The regular expression for retaining image versions.
   * 
   * @example
   * .*-alpine
   */
  tagRegexp?: string;
  static names(): { [key: string]: string } {
    return {
      auto: 'Auto',
      createTime: 'CreateTime',
      dryRun: 'DryRun',
      enableDeleteTag: 'EnableDeleteTag',
      enableDeleteUntaggedManifest: 'EnableDeleteUntaggedManifest',
      instanceId: 'InstanceId',
      modifiedTime: 'ModifiedTime',
      namespaceName: 'NamespaceName',
      nextTime: 'NextTime',
      policies: 'Policies',
      repoName: 'RepoName',
      retentionTagCount: 'RetentionTagCount',
      ruleId: 'RuleId',
      scheduleTime: 'ScheduleTime',
      scope: 'Scope',
      tagRegexp: 'TagRegexp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auto: 'boolean',
      createTime: 'number',
      dryRun: 'boolean',
      enableDeleteTag: 'boolean',
      enableDeleteUntaggedManifest: 'boolean',
      instanceId: 'string',
      modifiedTime: 'number',
      namespaceName: 'string',
      nextTime: 'number',
      policies: { 'type': 'array', 'itemType': ListArtifactLifecycleRuleResponseBodyRulesPolicies },
      repoName: 'string',
      retentionTagCount: 'number',
      ruleId: 'string',
      scheduleTime: 'string',
      scope: 'string',
      tagRegexp: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policies)) {
      $dara.Model.validateArray(this.policies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactLifecycleRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * 
   * - `true`: The call was successful.
   * 
   * - `false`: The call failed.
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F92D82F9-A4C4-5A4A-97B9-E495BF1B****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of rules.
   */
  rules?: ListArtifactLifecycleRuleResponseBodyRules[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 39
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      rules: 'Rules',
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
      rules: { 'type': 'array', 'itemType': ListArtifactLifecycleRuleResponseBodyRules },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

