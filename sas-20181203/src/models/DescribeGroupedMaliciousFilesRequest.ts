// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGroupedMaliciousFilesRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID of the server for which you want to query exception events.
   * 
   * @example
   * c556c8133b5ad4378b7fc533ddbda****
   */
  clusterId?: string;
  /**
   * @remarks
   * The page number of the page to return. Minimum value: **1**. Default value: **1**, which indicates that the first page is returned.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The name of the malicious file that you want to query.
   * > Fuzzy match is supported.
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
   * The language of the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The severity levels of the malicious samples in container images that you want to query. Separate multiple values with commas (,). Valid values:
   * - **serious**: urgent
   * - **suspicious**: suspicious
   * - **remind**: reminder.
   * 
   * @example
   * serious
   */
  levels?: string;
  /**
   * @remarks
   * The MD5 hash of the malicious file.
   * 
   * @example
   * d836968041f7683b5459****
   */
  maliciousMd5?: string;
  /**
   * @remarks
   * The maximum number of entries per page in a paging query. Default value: **20**.
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
   * > Call the [ListRepository](https://help.aliyun.com/document_detail/145293.html) operation of Container Registry to obtain the value of the **RepoId** response parameter.
   * 
   * @example
   * crr-vridcl4****
   */
  repoId?: string;
  /**
   * @remarks
   * The instance ID of the container image.
   * > Call the [ListRepository](https://help.aliyun.com/document_detail/145293.html) operation of Container Registry to obtain the value of the **InstanceId** response parameter.
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
   * cn-shanghai
   */
  repoRegionId?: string;
  /**
   * @remarks
   * The collection of scan ranges.
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

