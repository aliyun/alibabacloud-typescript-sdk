// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGroupedMaliciousFilesRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID of the container on which the malicious image sample is detected.
   * 
   * @example
   * c556c8133b5ad4378b7fc533ddbda****
   */
  clusterId?: string;
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
   * The name of the malicious image sample that you want to query.
   * 
   * >  Fuzzy match is supported.
   * 
   * @example
   * Mining
   */
  fuzzyMaliciousName?: string;
  /**
   * @remarks
   * The image digest.
   * 
   * @example
   * 6a5e103187b31a94592a47a5858617f7****
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
   * The image tag.
   * 
   * @example
   * 0.2
   */
  imageTag?: string;
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
   * The severity of the malicious image sample that you want to query. You can enter multiple severities. Separate the severities with commas (,). Valid values:
   * 
   * *   **serious**
   * *   **suspicious**
   * *   **remind**
   * 
   * @example
   * serious
   */
  levels?: string;
  /**
   * @remarks
   * The MD5 hash value of the malicious image sample.
   * 
   * @example
   * d836968041f7683b5459****
   */
  maliciousMd5?: string;
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
   * The ID of the image repository.
   * 
   * >  You can call the [ListRepository](https://help.aliyun.com/document_detail/145293.html) operation to query the IDs of image repositories from the value of the **RepoId** response parameter.
   * 
   * @example
   * crr-vridcl4****
   */
  repoId?: string;
  /**
   * @remarks
   * The ID of the container image.
   * 
   * >  You can call the [ListRepository](https://help.aliyun.com/document_detail/145293.html) operation to query the IDs of container images from the value of the **InstanceId** response parameter.
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
   * cn-shanghai
   */
  repoRegionId?: string;
  /**
   * @remarks
   * The types of the assets that you want to scan.
   */
  scanRange?: string[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      currentPage: 'CurrentPage',
      fuzzyMaliciousName: 'FuzzyMaliciousName',
      imageDigest: 'ImageDigest',
      imageLayer: 'ImageLayer',
      imageTag: 'ImageTag',
      lang: 'Lang',
      levels: 'Levels',
      maliciousMd5: 'MaliciousMd5',
      pageSize: 'PageSize',
      repoId: 'RepoId',
      repoInstanceId: 'RepoInstanceId',
      repoName: 'RepoName',
      repoNamespace: 'RepoNamespace',
      repoRegionId: 'RepoRegionId',
      scanRange: 'ScanRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      currentPage: 'number',
      fuzzyMaliciousName: 'string',
      imageDigest: 'string',
      imageLayer: 'string',
      imageTag: 'string',
      lang: 'string',
      levels: 'string',
      maliciousMd5: 'string',
      pageSize: 'string',
      repoId: 'string',
      repoInstanceId: 'string',
      repoName: 'string',
      repoNamespace: 'string',
      repoRegionId: 'string',
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

