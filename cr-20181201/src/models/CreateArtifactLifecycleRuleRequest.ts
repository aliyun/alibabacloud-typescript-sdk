// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateArtifactLifecycleRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically execute the rule.
   * 
   * @example
   * false
   */
  auto?: boolean;
  /**
   * @remarks
   * Specifies whether to enable DryRun mode. If DryRun mode is enabled, only the lifecycle task scan is performed and no actual data cleanup is executed. This mode is disabled by default.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to enable lifecycle management.
   * 
   * Only one of this parameter and EnableDeleteUntaggedManifest can be set to true.
   * 
   * @example
   * true
   */
  enableDeleteTag?: boolean;
  /**
   * @remarks
   * Specifies whether to enable artifact cleanup.
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
   * This parameter is required.
   * 
   * @example
   * cri-gbwfk7qbgrxe****
   */
  instanceId?: string;
  /**
   * @remarks
   * The namespace name.
   * 
   * @example
   * dev-backend
   */
  namespaceName?: string;
  /**
   * @remarks
   * The image repository name.
   * 
   * @example
   * test_1
   */
  repoName?: string;
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
   * release-.*
   */
  tagRegexp?: string;
  static names(): { [key: string]: string } {
    return {
      auto: 'Auto',
      dryRun: 'DryRun',
      enableDeleteTag: 'EnableDeleteTag',
      enableDeleteUntaggedManifest: 'EnableDeleteUntaggedManifest',
      instanceId: 'InstanceId',
      namespaceName: 'NamespaceName',
      repoName: 'RepoName',
      retentionTagCount: 'RetentionTagCount',
      scheduleTime: 'ScheduleTime',
      scope: 'Scope',
      tagRegexp: 'TagRegexp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auto: 'boolean',
      dryRun: 'boolean',
      enableDeleteTag: 'boolean',
      enableDeleteUntaggedManifest: 'boolean',
      instanceId: 'string',
      namespaceName: 'string',
      repoName: 'string',
      retentionTagCount: 'number',
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

