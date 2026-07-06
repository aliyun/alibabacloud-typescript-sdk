// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetArtifactLifecycleRuleResponseBodyPoliciesCondition extends $dara.Model {
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

export class GetArtifactLifecycleRuleResponseBodyPoliciesFilter extends $dara.Model {
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

export class GetArtifactLifecycleRuleResponseBodyPolicies extends $dara.Model {
  condition?: GetArtifactLifecycleRuleResponseBodyPoliciesCondition;
  filter?: GetArtifactLifecycleRuleResponseBodyPoliciesFilter;
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
      condition: GetArtifactLifecycleRuleResponseBodyPoliciesCondition,
      filter: GetArtifactLifecycleRuleResponseBodyPoliciesFilter,
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

export class GetArtifactLifecycleRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * Specifies if the rule is executed automatically.
   * 
   * @example
   * true
   */
  auto?: boolean;
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
   * The creation time.
   * 
   * @example
   * 1571926439000
   */
  createTime?: number;
  /**
   * @remarks
   * Specifies if lifecycle management is enabled.
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
   * cri-xkx6vujuhay0****
   */
  instanceId?: string;
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
   * The last modified time.
   * 
   * @example
   * 1638259914000
   */
  modifiedTime?: number;
  /**
   * @remarks
   * The namespace name.
   * 
   * @example
   * test-namespace
   */
  namespaceName?: string;
  /**
   * @remarks
   * The timestamp of the next scheduled execution.
   * 
   * @example
   * 1701878400000
   */
  nextTime?: number;
  policies?: GetArtifactLifecycleRuleResponseBodyPolicies[];
  /**
   * @remarks
   * The repository name.
   * 
   * @example
   * test-repo
   */
  repoName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 724402D0-75CD-4794-BC20-7D37208****
   */
  requestId?: string;
  /**
   * @remarks
   * The number of image versions to retain.
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
   * cralr-a18bkiajy8****
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
   * The regular expression that matches image tags to select versions for retention.
   * 
   * @example
   * .*-alpine
   */
  tagRegexp?: string;
  static names(): { [key: string]: string } {
    return {
      auto: 'Auto',
      code: 'Code',
      createTime: 'CreateTime',
      enableDeleteTag: 'EnableDeleteTag',
      instanceId: 'InstanceId',
      isSuccess: 'IsSuccess',
      modifiedTime: 'ModifiedTime',
      namespaceName: 'NamespaceName',
      nextTime: 'NextTime',
      policies: 'Policies',
      repoName: 'RepoName',
      requestId: 'RequestId',
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
      code: 'string',
      createTime: 'number',
      enableDeleteTag: 'boolean',
      instanceId: 'string',
      isSuccess: 'boolean',
      modifiedTime: 'number',
      namespaceName: 'string',
      nextTime: 'number',
      policies: { 'type': 'array', 'itemType': GetArtifactLifecycleRuleResponseBodyPolicies },
      repoName: 'string',
      requestId: 'string',
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

