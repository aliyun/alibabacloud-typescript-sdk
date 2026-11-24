// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetArtifactSubscriptionRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable link acceleration. The subscription acceleration feature is in public preview and can improve image subscription speed through scheduling policies and network link optimization.
   * 
   * @example
   * true
   */
  accelerate?: boolean;
  /**
   * @remarks
   * The return code.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The creation time. The value is a UNIX timestamp in milliseconds.
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
   * Indicates whether the API call was successful. Valid values:
   * 
   * - `true`: The API call was successful.
   * 
   * - `false`: The API call failed.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The modification time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1638259914000
   */
  modifiedTime?: number;
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
  override?: boolean;
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
   * The domain name of the source image repository for the subscription rule.
   * 
   * @example
   * registry-1.docker.io
   */
  sourceDomain?: string;
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
   * The number of subscribed images.
   * 
   * @example
   * 1
   */
  tagCount?: number;
  /**
   * @remarks
   * The list of subscribed tags.
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
      sourceDomain: 'SourceDomain',
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
      sourceDomain: 'string',
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

