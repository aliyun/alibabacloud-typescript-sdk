// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListArtifactSubscriptionRuleResponseBodyRules extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the acceleration link is enabled. The subscription acceleration feature is in public preview and can improve image subscription speed based on scheduling policies and network link optimization.
   * 
   * @example
   * true
   */
  accelerate?: boolean;
  /**
   * @remarks
   * The creation time. The value is a UNIX timestamp in milliseconds.
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
   * The modification time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1678341923385
   */
  modifiedTime?: number;
  /**
   * @remarks
   * The namespace name.
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
   * The operating system and architecture. If the source repository contains multi-architecture images, only the specified operating system and architecture are subscribed to the destination repository of the Enterprise instance.
   */
  platform?: string[];
  /**
   * @remarks
   * The repository name.
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
   * The domain name of the source image repository for the subscription rule.
   * 
   * @example
   * anolis-registry.cn-zhangjiakou.cr.aliyuncs.com
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
   * The image versions subscribed from the source repository. Regular expressions are supported.
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
      createTime: 'number',
      instanceId: 'string',
      modifiedTime: 'number',
      namespaceName: 'string',
      override: 'boolean',
      platform: { 'type': 'array', 'itemType': 'string' },
      repoName: 'string',
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

export class ListArtifactSubscriptionRuleResponseBody extends $dara.Model {
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
   * Indicates whether the call was successful. Valid values:
   * 
   * - `true`: The call was successful.
   * 
   * - `false`: The call failed.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 07FC5654-C82A-59FA-A9D1-78B4EE443F86
   */
  requestId?: string;
  /**
   * @remarks
   * The list of rules.
   */
  rules?: ListArtifactSubscriptionRuleResponseBodyRules[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 13
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      rules: 'Rules',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      rules: { 'type': 'array', 'itemType': ListArtifactSubscriptionRuleResponseBodyRules },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

