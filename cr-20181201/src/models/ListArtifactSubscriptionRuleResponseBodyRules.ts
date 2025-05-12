// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListArtifactSubscriptionRuleResponseBodyRules extends $dara.Model {
  /**
   * @remarks
   * Indicates whether an acceleration link is enabled for image subscription. The subscription acceleration feature is in public preview. The feature is optimized based on scheduling policies and network links to accelerate image subscription.
   * 
   * @example
   * true
   */
  accelerate?: boolean;
  /**
   * @remarks
   * The time when the subscription rule was created.
   * 
   * @example
   * 1638187989000
   */
  createTime?: number;
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
   * The time when the subscription rule was modified.
   * 
   * @example
   * 1678341923385
   */
  modifiedTime?: number;
  /**
   * @remarks
   * The name of the source namespace.
   * 
   * @example
   * test-ns
   */
  namespaceName?: string;
  /**
   * @remarks
   * Indicates whether the original image is overwritten.
   * 
   * @example
   * true
   */
  override?: boolean;
  /**
   * @remarks
   * The operating system and architecture. If the source repository contains a multi-arch image, only the images with the specified operating system and architecture are subscribed to the destination repository of the Enterprise Edition instance.
   */
  platform?: string[];
  /**
   * @remarks
   * The name of the source repository.
   * 
   * @example
   * test-repo
   */
  repoName?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * crasr-mdbpung4i1rm****
   */
  ruleId?: string;
  /**
   * @remarks
   * The source namespace.
   * 
   * @example
   * library
   */
  sourceNamespaceName?: string;
  /**
   * @remarks
   * The source of the artifact.
   * 
   * Valid values:
   * 
   * *   DOCKER_HUB: Docker Hub
   * *   GCR: GCR
   * *   QUAY: Quay.io
   * 
   * @example
   * DOCKER_HUB
   */
  sourceProvider?: string;
  /**
   * @remarks
   * The source repository.
   * 
   * @example
   * nginx
   */
  sourceRepoName?: string;
  /**
   * @remarks
   * The number of subscribed images.
   * 
   * @example
   * 1
   */
  tagCount?: number;
  /**
   * @remarks
   * The image tag in the subscription source repository. Regular expressions are supported.
   * 
   * @example
   * release.*
   */
  tagRegexp?: string;
  static names(): { [key: string]: string } {
    return {
      accelerate: 'Accelerate',
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      modifiedTime: 'ModifiedTime',
      namespaceName: 'NamespaceName',
      override: 'Override',
      platform: 'Platform',
      repoName: 'RepoName',
      ruleId: 'RuleId',
      sourceNamespaceName: 'SourceNamespaceName',
      sourceProvider: 'SourceProvider',
      sourceRepoName: 'SourceRepoName',
      tagCount: 'TagCount',
      tagRegexp: 'TagRegexp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerate: 'boolean',
      createTime: 'number',
      instanceId: 'string',
      modifiedTime: 'number',
      namespaceName: 'string',
      override: 'boolean',
      platform: { 'type': 'array', 'itemType': 'string' },
      repoName: 'string',
      ruleId: 'string',
      sourceNamespaceName: 'string',
      sourceProvider: 'string',
      sourceRepoName: 'string',
      tagCount: 'number',
      tagRegexp: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.platform)) {
      $dara.Model.validateArray(this.platform);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

