// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListArtifactLifecycleRuleResponseBodyRules extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the lifecycle management rule is automatically executed.
   * 
   * @example
   * false
   */
  auto?: boolean;
  /**
   * @remarks
   * The time when the lifecycle management rule was created.
   * 
   * @example
   * 1638187989000
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
   * cri-brlg4cbj2yl****
   */
  instanceId?: string;
  /**
   * @remarks
   * The time when the lifecycle management rule was last modified.
   * 
   * @example
   * 1678341923385
   */
  modifiedTime?: number;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * @example
   * test-ns
   */
  namespaceName?: string;
  /**
   * @remarks
   * The time when the lifecycle management rule is next executed.
   * 
   * @example
   * 1638187989000
   */
  nextTime?: number;
  /**
   * @remarks
   * The name of the image repository.
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
      createTime: 'CreateTime',
      enableDeleteTag: 'EnableDeleteTag',
      instanceId: 'InstanceId',
      modifiedTime: 'ModifiedTime',
      namespaceName: 'NamespaceName',
      nextTime: 'NextTime',
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
      repoName: 'string',
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

