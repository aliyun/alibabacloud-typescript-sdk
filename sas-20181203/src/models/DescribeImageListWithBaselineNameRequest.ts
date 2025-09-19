// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageListWithBaselineNameRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the image baseline.
   * 
   * This parameter is required.
   * 
   * @example
   * ak_leak
   */
  baselineNameKey?: string;
  /**
   * @remarks
   * The ID of the container cluster.
   * 
   * >  You can call the [DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~) operation to query the IDs of container clusters.
   * 
   * @example
   * cc20a1024011c44b6a8710d6f8b****
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * docker-law
   */
  clusterName?: string;
  /**
   * @remarks
   * The ID of the container.
   * 
   * @example
   * c08d5fc1a329a4b88950a253d082f****
   */
  containerId?: string;
  /**
   * @remarks
   * The search condition for the image baseline.
   * 
   * @example
   * Unauthorized access
   */
  criteria?: string;
  /**
   * @remarks
   * The type of the search condition. Valid values:
   * 
   * *   **BaselineNameAlias**: baseline name
   * *   **BaselineClassAlias**: baseline category
   * 
   * @example
   * BaselineNameAlias
   */
  criteriaType?: string;
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The name of the image to which the container belongs.
   * 
   * @example
   * registry.cn-wulanchabu.aliyuncs.com/sas_test/huxin-test-001:nuxeo6-****
   */
  image?: string;
  /**
   * @remarks
   * The SHA-256 value of the image digest.
   * 
   * @example
   * 2e6daffce524ffeae66cccaa90c8fc47de912346dcec295c27395b6d66db6423
   */
  imageDigest?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
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
   * The number of entries to return on each page. Default value: **10**.
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
   * The namespace to which the image repository belongs.
   * 
   * @example
   * libssh2
   */
  repoNamespace?: string;
  /**
   * @remarks
   * The types of the assets that you want to scan.
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

