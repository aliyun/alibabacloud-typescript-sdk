// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAffectedMaliciousFileImagesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the container cluster.
   * 
   * >  You can call the [DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~) operation to query the IDs of container clusters.
   * 
   * @example
   * c60b77fe62093480db6164a3c2fa5****
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * minikube
   */
  clusterName?: string;
  /**
   * @remarks
   * The ID of the container.
   * 
   * @example
   * cc20a1024011c44b6a8710d6f8b****
   */
  containerId?: string;
  /**
   * @remarks
   * The number of the page to return. Pages start from page **1**. Default value: **1**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The name of the container image.
   * 
   * @example
   * registry.cn-wulanchabu.aliyuncs.com/sas_test/huxin-test-001:nuxeo6-****
   */
  image?: string;
  /**
   * @remarks
   * The image digest.
   * 
   * @example
   * 6a5e103187b31a94592a47a5858617f7a179ead61df7606****
   */
  imageDigest?: string;
  /**
   * @remarks
   * The image layer.
   * 
   * @example
   * 27213ad375b53628dd152a5ca****
   */
  imageLayer?: string;
  /**
   * @remarks
   * The tag that is added to the image.
   * 
   * @example
   * 0.2
   */
  imageTag?: string;
  /**
   * @remarks
   * The language of the content within the request and the response. Valid values:
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
   * The severity level of the malicious image sample. Separate multiple severity levels with commas (,). Valid values:
   * 
   * *   **serious**
   * *   **suspicious**
   * *   **remind**
   * 
   * @example
   * serious,suspicious
   */
  levels?: string;
  /**
   * @remarks
   * The MD5 hash value of the malicious image sample.
   * 
   * >  You can call the [DescribeGroupedMaliciousFiles](~~DescribeGroupedMaliciousFiles~~) operation to query the MD5 hash values of malicious image samples.
   * 
   * @example
   * d836968041f7683b5459****
   */
  maliciousMd5?: string;
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
   * The number of entries to return on each page. Default value: **20**.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: string;
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
   * The ID of the image repository.
   * 
   * >  You can call the [ListRepository](https://help.aliyun.com/document_detail/451339.html) operation to query the IDs of image repositories from the value of the **RepoId** response parameter.
   * 
   * @example
   * crr-vridcl4****
   */
  repoId?: string;
  /**
   * @remarks
   * The ID of the container image.
   * 
   * >  You can call the [ListRepository](https://help.aliyun.com/document_detail/451339.html) operation to query the IDs of container images from the value of the **InstanceId** response parameter.
   * 
   * @example
   * cri-datvailb****
   */
  repoInstanceId?: string;
  /**
   * @remarks
   * The name of the image repository.
   * 
   * >  Fuzzy match is supported.
   * 
   * @example
   * centos
   */
  repoName?: string;
  /**
   * @remarks
   * The namespace to which the image repository belongs.
   * 
   * >  Fuzzy match is supported.
   * 
   * @example
   * hanghai-namespace
   */
  repoNamespace?: string;
  /**
   * @remarks
   * The region ID of the image repository. Valid values:
   * 
   * *   **cn-beijing**: China (Beijing)
   * *   **cn-zhangjiakou**: China (Zhangjiakou)
   * *   **cn-hangzhou**: China (Hangzhou)
   * *   **cn-shanghai**: China (Shanghai)
   * *   **cn-shenzhen**: China (Shenzhen)
   * *   **cn-hongkong**: China (Hong Kong)
   * *   **ap-southeast-1**: Singapore
   * *   **ap-southeast-5**: Indonesia (Jakarta)
   * *   **us-east-1**: US (Virginia)
   * *   **us-west-1**: US (Silicon Valley)
   * *   **eu-central-1**: Germany (Frankfurt)
   * *   **eu-west-1**: UK (London)
   * 
   * @example
   * cn-hangzhou
   */
  repoRegionId?: string;
  /**
   * @remarks
   * The types of the assets that you want to scan.
   */
  scanRange?: string[];
  /**
   * @remarks
   * The status of the malicious image sample. Valid values:
   * 
   * *   **0**: The malicious image sample is not handled.
   * *   **1**: The malicious image sample is handled.
   * *   **2**: The malicious image sample is being verified.
   * *   **3**: The malicious image sample is added to the whitelist.
   * 
   * @example
   * 0
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      containerId: 'ContainerId',
      currentPage: 'CurrentPage',
      image: 'Image',
      imageDigest: 'ImageDigest',
      imageLayer: 'ImageLayer',
      imageTag: 'ImageTag',
      lang: 'Lang',
      levels: 'Levels',
      maliciousMd5: 'MaliciousMd5',
      namespace: 'Namespace',
      pageSize: 'PageSize',
      pod: 'Pod',
      repoId: 'RepoId',
      repoInstanceId: 'RepoInstanceId',
      repoName: 'RepoName',
      repoNamespace: 'RepoNamespace',
      repoRegionId: 'RepoRegionId',
      scanRange: 'ScanRange',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      containerId: 'string',
      currentPage: 'number',
      image: 'string',
      imageDigest: 'string',
      imageLayer: 'string',
      imageTag: 'string',
      lang: 'string',
      levels: 'string',
      maliciousMd5: 'string',
      namespace: 'string',
      pageSize: 'string',
      pod: 'string',
      repoId: 'string',
      repoInstanceId: 'string',
      repoName: 'string',
      repoNamespace: 'string',
      repoRegionId: 'string',
      scanRange: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
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

