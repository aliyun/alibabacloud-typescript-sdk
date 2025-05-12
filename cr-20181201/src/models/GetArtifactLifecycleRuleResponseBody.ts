// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetArtifactLifecycleRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the lifecycle management rule is automatically executed.
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
   * The time when the lifecycle management rule was created.
   * 
   * @example
   * 1571926439000
   */
  createTime?: number;
  /**
   * @remarks
   * Indicates whether lifecycle management is enabled for the artifact.
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
   * Indicates whether the API request is successful. Valid values:
   * 
   * *   `true`: The request is successful.
   * *   `false`: The request fails.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The time when the lifecycle management rule was last modified.
   * 
   * @example
   * 1638259914000
   */
  modifiedTime?: number;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * @example
   * test-namespace
   */
  namespaceName?: string;
  /**
   * @remarks
   * The time when the lifecycle management rule is next executed.
   * 
   * @example
   * 1701878400000
   */
  nextTime?: number;
  /**
   * @remarks
   * The name of the image repository.
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
   * cralr-a18bkiajy8****
   */
  ruleId?: string;
  /**
   * @remarks
   * The execution cycle of the lifecycle management rule.
   * 
   * @example
   * WEEK
   */
  scheduleTime?: string;
  /**
   * @remarks
   * The deletion scope of artifacts.
   * 
   * @example
   * INSTANCE
   */
  scope?: string;
  /**
   * @remarks
   * The regular expression that indicates which image tags are retained.
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

