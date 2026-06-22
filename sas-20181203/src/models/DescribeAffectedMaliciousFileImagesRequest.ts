// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAffectedMaliciousFileImagesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the container cluster to query.
   * > Call the [DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~) operation to obtain this parameter.
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
   * The page number of the current page when using paging. Minimum value: **1**. Default value: **1**.
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
   * The digest of the image.
   * 
   * @example
   * 6a5e103187b31a94592a47a5858617f7a179ead61df7606****
   */
  imageDigest?: string;
  /**
   * @remarks
   * The layer of the image.
   * 
   * @example
   * 27213ad375b53628dd152a5ca****
   */
  imageLayer?: string;
  /**
   * @remarks
   * The tag of the image.
   * 
   * @example
   * 0.2
   */
  imageTag?: string;
  /**
   * @remarks
   * The language type of the request and response. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The severity levels. Separate multiple values with commas (,). Valid values:
   * * **serious**: urgent
   * * **suspicious**: suspicious
   * * **remind**: reminder.
   * 
   * @example
   * serious,suspicious
   */
  levels?: string;
  /**
   * @remarks
   * The MD5 hash of the malicious file.
   * > Call the [DescribeGroupedMaliciousFiles](~~DescribeGroupedMaliciousFiles~~) operation to obtain the MD5 hash of the malicious file.
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
   * The maximum number of entries per page when using paging. Default value: **20**.
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
   * > Call the [ListRepository](https://help.aliyun.com/document_detail/145293.html) operation of Container Registry. You can obtain the image repository ID from the **RepoId** response parameter.
   * 
   * @example
   * crr-vridcl4****
   */
  repoId?: string;
  /**
   * @remarks
   * The ID of the container image instance.
   * > Call the [ListRepository](https://help.aliyun.com/document_detail/145293.html) operation of Container Registry. You can obtain the container image instance ID from the **InstanceId** response parameter.
   * 
   * @example
   * cri-datvailb****
   */
  repoInstanceId?: string;
  /**
   * @remarks
   * The name of the image repository.
   * > Fuzzy match is supported.
   * 
   * @example
   * centos
   */
  repoName?: string;
  /**
   * @remarks
   * The namespace of the image repository.
   * > Fuzzy match is supported.
   * 
   * @example
   * hanghai-namespace
   */
  repoNamespace?: string;
  /**
   * @remarks
   * The region ID of the image repository. Valid values:
   * - **cn-beijing**: China (Beijing)
   * - **cn-zhangjiakou**: China (Zhangjiakou)
   * - **cn-hangzhou**: China (Hangzhou)
   * - **cn-shanghai**: China (Shanghai)
   * - **cn-shenzhen**: China (Shenzhen)
   * - **cn-hongkong**: Hong Kong (China)
   * - **ap-southeast-1**: Singapore
   * - **ap-southeast-5**: Indonesia (Jakarta)
   * - **us-east-1**: US (Virginia)
   * - **us-west-1**: US (Silicon Valley)
   * - **eu-central-1**: Germany (Frankfurt)
   * - **eu-west-1**: UK (London).
   * 
   * @example
   * cn-hangzhou
   */
  repoRegionId?: string;
  /**
   * @remarks
   * The collection of scan ranges.
   */
  scanRange?: string[];
  /**
   * @remarks
   * The processing status of the malicious image sample. Valid values:
   * - **0**: unhandled
   * - **1**: handled
   * - **2**: verifying
   * - **3**: added to whitelist.
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

