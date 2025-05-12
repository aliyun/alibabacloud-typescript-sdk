// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateArtifactSubscriptionRuleRequest extends $dara.Model {
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
   * The name of the Container Registry namespace.
   * 
   * This parameter is required.
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
   * The operating system and architecture. If the source repository contains a multi-arch image, only the specified operating system and architecture are subscribed to the destination repository of the Enterprise Edition instance. Subscribe to the destination repository of an Enterprise Edition instance
   * 
   * This parameter is required.
   */
  platform?: string[];
  /**
   * @remarks
   * The name of the Container Registry repository.
   * 
   * This parameter is required.
   * 
   * @example
   * test-repo
   */
  repoName?: string;
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
   * The number of subscribed images.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  tagCount?: number;
  /**
   * @remarks
   * The image tag in the subscription source repository. Regular expressions are supported.
   * 
   * This parameter is required.
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

