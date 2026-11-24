// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateArtifactSubscriptionRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the acceleration link. The subscription acceleration feature is in public preview. Based on scheduling policies and network link optimization, it can improve the image subscription speed.
   * 
   * @example
   * true
   */
  accelerate?: boolean;
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
   * This parameter is required.
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
  override?: boolean;
  /**
   * @remarks
   * The operating system or architecture. If the source repository contains multi-architecture images, only images with the specified operating system or architecture are subscribed to the destination repository of the Enterprise instance.
   * 
   * This parameter is required.
   */
  platform?: string[];
  /**
   * @remarks
   * The ACR repository.
   * 
   * This parameter is required.
   * 
   * @example
   * test-repo
   */
  repoName?: string;
  /**
   * @remarks
   * The source namespace. If `SourceProvider` is set to `DOCKER_HUB`, the default value is `library`. This parameter is required in other scenarios.
   * 
   * @example
   * library
   */
  sourceNamespaceName?: string;
  /**
   * @remarks
   * The artifact source.
   * 
   * This parameter is required.
   * 
   * @example
   * DOCKER_HUB
   */
  sourceProvider?: string;
  /**
   * @remarks
   * The source repository.
   * 
   * This parameter is required.
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
   */
  tagCount?: number;
  /**
   * @remarks
   * - The image tags to subscribe to when matching by tag list. A maximum of 10 tags are supported.
   * - If TagList is specified, these tags are queried one by one. TagRegexp and TagCount cannot be specified at the same time. If TagList is not specified, TagRegexp and TagCount are used for matching, and both must be specified.
   * - The matching method cannot be changed after the rule is created. To change the matching method, delete the rule and create a new one.
   * 
   * @example
   * latest
   */
  tagList?: string[];
  /**
   * @remarks
   * The image versions to subscribe to from the source repository. Regular expressions are supported.
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
      accelerate: 'boolean',
      instanceId: 'string',
      namespaceName: 'string',
      override: 'boolean',
      platform: { 'type': 'array', 'itemType': 'string' },
      repoName: 'string',
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

