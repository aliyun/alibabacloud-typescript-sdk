// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateArtifactSubscriptionRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the acceleration link. The subscription acceleration feature is in public preview. It improves the image subscription speed based on scheduling policies and network link optimization.
   * 
   * @example
   * true
   */
  accelerate?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-c0o11woew0k****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ACR namespace.
   * 
   * @example
   * test-ns
   */
  namespaceName?: string;
  /**
   * @remarks
   * Specifies whether to overwrite images.
   * 
   * @example
   * true
   */
  override?: string;
  /**
   * @remarks
   * The operating system and architecture. If the source repository contains multi-architecture images, only images with the specified operating system and architecture are subscribed to the destination repository of the Enterprise instance.
   */
  platform?: string[];
  /**
   * @remarks
   * The ACR repository.
   * 
   * @example
   * test-repo
   */
  repoName?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * This parameter is required.
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
   * The artifact source.
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
   * The number of images to subscribe to.
   * 
   * @example
   * 1
   * 
   * **if can be null:**
   * false
   */
  tagCount?: number;
  /**
   * @remarks
   * - The image tags to subscribe to when matching by tag list. A maximum of 10 tags are supported.
   * - This parameter is valid only when the rule is created by using tag list matching. It cannot be specified together with TagRegexp or TagCount.
   * - If this parameter is not specified or an empty list is specified, the original tag list is retained and cannot be cleared. The matching method cannot be modified. To modify the matching method, delete the rule and create a new one.
   * 
   * @example
   * latest
   */
  tagList?: string[];
  /**
   * @remarks
   * The image versions in the source repository to subscribe to. Regular expressions are supported.
   * 
   * @example
   * release-v.*
   */
  tagRegexp?: string;
  static names(): { [key: string]: string } {
    return {
      accelerate: 'Accelerate',
      instanceId: 'InstanceId',
      namespaceName: 'NamespaceName',
      override: 'Override',
      platform: 'Platform',
      repoName: 'RepoName',
      ruleId: 'RuleId',
      sourceNamespaceName: 'SourceNamespaceName',
      sourceProvider: 'SourceProvider',
      sourceRepoName: 'SourceRepoName',
      tagCount: 'TagCount',
      tagList: 'TagList',
      tagRegexp: 'TagRegexp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerate: 'string',
      instanceId: 'string',
      namespaceName: 'string',
      override: 'string',
      platform: { 'type': 'array', 'itemType': 'string' },
      repoName: 'string',
      ruleId: 'string',
      sourceNamespaceName: 'string',
      sourceProvider: 'string',
      sourceRepoName: 'string',
      tagCount: 'number',
      tagList: { 'type': 'array', 'itemType': 'string' },
      tagRegexp: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.platform)) {
      $dara.Model.validateArray(this.platform);
    }
    if(Array.isArray(this.tagList)) {
      $dara.Model.validateArray(this.tagList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

