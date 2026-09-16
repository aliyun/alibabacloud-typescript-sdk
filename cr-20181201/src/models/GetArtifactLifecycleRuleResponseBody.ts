// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetArtifactLifecycleRuleResponseBodyPoliciesCondition extends $dara.Model {
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

export class GetArtifactLifecycleRuleResponseBodyPoliciesFilter extends $dara.Model {
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

export class GetArtifactLifecycleRuleResponseBodyPolicies extends $dara.Model {
  /**
   * @remarks
   * The trigger condition of the lifecycle policy.
   */
  condition?: GetArtifactLifecycleRuleResponseBodyPoliciesCondition;
  /**
   * @remarks
   * The image version filter condition.
   */
  filter?: GetArtifactLifecycleRuleResponseBodyPoliciesFilter;
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
   * Indicates whether automatic execution is enabled.
   * 
   * @example
   * true
   */
  auto?: boolean;
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
   * The creation time. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1571926439000
   */
  createTime?: number;
  /**
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
   * @example
   * False
   */
  enableDeleteUntaggedManifest?: boolean;
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
   * Indicates whether the API call is successful. Valid values:
   * 
   * - `true`: The API call is successful.
   * 
   * - `false`: The API call failed.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The last modification time. This value is a UNIX timestamp in milliseconds.
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
   * The next execution time. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1701878400000
   */
  nextTime?: number;
  /**
   * @remarks
   * The list of lifecycle policies.
   */
  policies?: GetArtifactLifecycleRuleResponseBodyPolicies[];
  /**
   * @remarks
   * The image repository name.
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
   * The number of images to retain.
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
   * The regular expression used to match image versions to retain.
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
      dryRun: 'DryRun',
      enableDeleteTag: 'EnableDeleteTag',
      enableDeleteUntaggedManifest: 'EnableDeleteUntaggedManifest',
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
      dryRun: 'boolean',
      enableDeleteTag: 'boolean',
      enableDeleteUntaggedManifest: 'boolean',
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

