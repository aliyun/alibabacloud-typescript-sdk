// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateArtifactLifecycleRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically execute the lifecycle management rule.
   * 
   * @example
   * false
   */
  auto?: boolean;
  /**
   * @remarks
   * Specifies whether to enable lifecycle management for the artifact.
   * 
   * @example
   * true
   */
  enableDeleteTag?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-r6ym0lerldp****
   */
  instanceId?: string;
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
   * The name of the image repository.
   * 
   * @example
   * test_1
   */
  repoName?: string;
  /**
   * @remarks
   * The number of images that you want to retain.
   * 
   * @example
   * 30
   */
  retentionTagCount?: number;
  /**
   * @remarks
   * The rule ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cralr-luq6qiegzvx****
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
   * REPO
   */
  scope?: string;
  /**
   * @remarks
   * The regular expression that indicates which image tags you want to retain.
   * 
   * @example
   * .*production_.*
   */
  tagRegexp?: string;
  static names(): { [key: string]: string } {
    return {
      auto: 'Auto',
      enableDeleteTag: 'EnableDeleteTag',
      instanceId: 'InstanceId',
      namespaceName: 'NamespaceName',
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
      enableDeleteTag: 'boolean',
      instanceId: 'string',
      namespaceName: 'string',
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

