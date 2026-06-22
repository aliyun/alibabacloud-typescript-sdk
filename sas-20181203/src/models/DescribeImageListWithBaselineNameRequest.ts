// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageListWithBaselineNameRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the image baseline check result.
   * 
   * This parameter is required.
   * 
   * @example
   * ak_leak
   */
  baselineNameKey?: string;
  /**
   * @remarks
   * The ID of the container cluster to query.
   * > You can call the [DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~) operation to obtain this parameter.
   * 
   * @example
   * cc20a1024011c44b6a8710d6f8b****
   */
  clusterId?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * docker-law
   */
  clusterName?: string;
  /**
   * @remarks
   * The container ID.
   * 
   * @example
   * c08d5fc1a329a4b88950a253d082f****
   */
  containerId?: string;
  /**
   * @remarks
   * The query condition for the baseline.
   * 
   * @example
   * Unauthorized access
   */
  criteria?: string;
  /**
   * @remarks
   * The query type for the baseline. Valid values:
   * 
   * - **BaselineNameAlias**: baseline name
   * - **BaselineClassAlias**: baseline category.
   * 
   * @example
   * BaselineNameAlias
   */
  criteriaType?: string;
  /**
   * @remarks
   * The page number of the page to return. Default value: **1**, which indicates that the first page is returned.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The container image name.
   * 
   * @example
   * registry.cn-wulanchabu.aliyuncs.com/sas_test/huxin-test-001:nuxeo6-****
   */
  image?: string;
  /**
   * @remarks
   * The SHA256 value of the image digest.
   * 
   * @example
   * 2e6daffce524ffeae66cccaa90c8fc47de912346dcec295c27395b6d66db6423
   */
  imageDigest?: string;
  /**
   * @remarks
   * The language type for the request and response messages. Default value: **zh**. Valid values:
   * 
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * test-002
   */
  namespace?: string;
  /**
   * @remarks
   * Settings for paged query paging. The number of image baseline check result details to display per page. Default value: **10**, which indicates that 10 image baseline check result details are displayed per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The pod.
   * 
   * @example
   * 22222-7xsqq
   */
  pod?: string;
  /**
   * @remarks
   * The instance ID of the image repository.
   * 
   * @example
   * i-qewqrqcsadf****
   */
  repoInstanceId?: string;
  /**
   * @remarks
   * The name of the image repository.
   * 
   * @example
   * libssh2
   */
  repoName?: string;
  /**
   * @remarks
   * The namespace of the image repository.
   * 
   * @example
   * libssh2
   */
  repoNamespace?: string;
  /**
   * @remarks
   * The collection of scan ranges.
   */
  scanRange?: string[];
  static names(): { [key: string]: string } {
    return {
      baselineNameKey: 'BaselineNameKey',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      containerId: 'ContainerId',
      criteria: 'Criteria',
      criteriaType: 'CriteriaType',
      currentPage: 'CurrentPage',
      image: 'Image',
      imageDigest: 'ImageDigest',
      lang: 'Lang',
      namespace: 'Namespace',
      pageSize: 'PageSize',
      pod: 'Pod',
      repoInstanceId: 'RepoInstanceId',
      repoName: 'RepoName',
      repoNamespace: 'RepoNamespace',
      scanRange: 'ScanRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineNameKey: 'string',
      clusterId: 'string',
      clusterName: 'string',
      containerId: 'string',
      criteria: 'string',
      criteriaType: 'string',
      currentPage: 'number',
      image: 'string',
      imageDigest: 'string',
      lang: 'string',
      namespace: 'string',
      pageSize: 'number',
      pod: 'string',
      repoInstanceId: 'string',
      repoName: 'string',
      repoNamespace: 'string',
      scanRange: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.scanRange)) {
      $dara.Model.validateArray(this.scanRange);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

