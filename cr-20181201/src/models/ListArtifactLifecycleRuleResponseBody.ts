// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListArtifactLifecycleRuleResponseBodyRulesPoliciesCondition extends $dara.Model {
  lastPullOlderThanDays?: number;
  lastPushOlderThanDays?: number;
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
  condition?: ListArtifactLifecycleRuleResponseBodyRulesPoliciesCondition;
  filter?: ListArtifactLifecycleRuleResponseBodyRulesPoliciesFilter;
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
   * Indicates whether the rule runs automatically.
   * 
   * @example
   * false
   */
  auto?: boolean;
  /**
   * @remarks
   * The creation time of the rule.
   * 
   * @example
   * 1638187989000
   */
  createTime?: number;
  /**
   * @remarks
   * Indicates whether the rule is configured to delete tags.
   * 
   * @example
   * true
   */
  enableDeleteTag?: boolean;
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
   * The last modification time of the rule.
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
   * The next execution time.
   * 
   * @example
   * 1638187989000
   */
  nextTime?: number;
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
   * The number of image tags to retain.
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
   * The execution schedule.
   * 
   * @example
   * WEEK
   */
  scheduleTime?: string;
  /**
   * @remarks
   * The scope of the rule.
   * 
   * @example
   * INSTANCE
   */
  scope?: string;
  /**
   * @remarks
   * The regular expression that matches image tags to retain.
   * 
   * @example
   * .*-alpine
   */
  tagRegexp?: string;
  static names(): { [key: string]: string } {
    return {
      auto: 'Auto',
      createTime: 'CreateTime',
      enableDeleteTag: 'EnableDeleteTag',
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
      enableDeleteTag: 'boolean',
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
   * Indicates whether the request succeeded. Valid values:
   * 
   * - `true`: The request succeeded.
   * 
   * - `false`: The request failed.
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
   * The number of entries returned on each page.
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
   * The list of lifecycle management rules.
   */
  rules?: ListArtifactLifecycleRuleResponseBodyRules[];
  /**
   * @remarks
   * The total number of entries returned.
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

