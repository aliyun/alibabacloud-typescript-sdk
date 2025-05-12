// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetArtifactSubscriptionRuleResponseBody extends $dara.Model {
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
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The time when the subscription rule was created.
   * 
   * @example
   * 1570759546000
   */
  createTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * cri-hpdfkc6utbaq****
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
   * The time when the subscription rule was modified.
   * 
   * @example
   * 1638259914000
   */
  modifiedTime?: number;
  /**
   * @remarks
   * The name of the Container Registry namespace.
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
   * The operating system and architecture. If the source repository contains multi-arch images, only the images with the specified operating system and architecture are subscribed to the destination repository of the Enterprise Edition instance.
   */
  platform?: string[];
  /**
   * @remarks
   * The name of the Container Registry repository.
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
   * D4978DCC-ECBD-40B0-A714-EE6959B22C77
   */
  requestId?: string;
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
   * The name of the source namespace.
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
   * release-v.*
   */
  tagRegexp?: string;
  static names(): { [key: string]: string } {
    return {
      accelerate: 'Accelerate',
      code: 'Code',
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      isSuccess: 'IsSuccess',
      modifiedTime: 'ModifiedTime',
      namespaceName: 'NamespaceName',
      override: 'Override',
      platform: 'Platform',
      repoName: 'RepoName',
      requestId: 'RequestId',
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
      code: 'string',
      createTime: 'number',
      instanceId: 'string',
      isSuccess: 'boolean',
      modifiedTime: 'number',
      namespaceName: 'string',
      override: 'boolean',
      platform: { 'type': 'array', 'itemType': 'string' },
      repoName: 'string',
      requestId: 'string',
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

