// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateArtifactLifecycleRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Specify whether to automatically execute the lifecycle management rule.
   * 
   * @example
   * false
   */
  auto?: boolean;
  /**
   * @remarks
   * Specify whether to enable lifecycle management for the artifact.
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
   * cri-gbwfk7qbgrxe****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * @example
   * dev-backend
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
   * The execution cycle of the lifecycle management rule.
   * 
   * @example
   * WEEK
   */
  scheduleTime?: string;
  /**
   * @remarks
   * The deletion scope.
   * 
   * @example
   * INSTANCE
   */
  scope?: string;
  /**
   * @remarks
   * The regular expression that is used to indicate which image tags are retained.
   * 
   * @example
   * release-.*
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

