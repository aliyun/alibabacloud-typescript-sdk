// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageRepoDetailListResponseBodyImageRepoResponses extends $dara.Model {
  /**
   * @remarks
   * The number of alerts that are generated for the image repository.
   * 
   * @example
   * 0
   */
  alarmCount?: number;
  /**
   * @remarks
   * Indicates whether alerts are generated for the image repository. Valid values:
   * 
   * *   **YES**
   * *   **NO**
   * 
   * @example
   * NO
   */
  alarmStatus?: string;
  /**
   * @remarks
   * The address of the image repository.
   * 
   * @example
   * [
   *       {
   *             "domains": [
   *                   "****.cn-shenzhen.cr.aliyuncs.com"
   *             ],
   *             "type": "internet"
   *       },
   *       {
   *             "domains": [
   *                   "****.cn-shenzhen.cr.aliyuncs.com"
   *             ],
   *             "type": "intranet"
   *       },
   *       {
   *             "domains": [
   *                   "****.cn-shenzhen.cr.aliyuncs.com"
   *             ],
   *             "type": "vpc"
   *       }
   * ]
   */
  endpoints?: string;
  /**
   * @remarks
   * The number of the images on which risks are detected.
   * 
   * @example
   * 2
   */
  hasRiskImageCount?: number;
  /**
   * @remarks
   * The number of baseline risk items on the image repository.
   * 
   * @example
   * 0
   */
  hcCount?: number;
  /**
   * @remarks
   * Indicates whether baseline risk items are detected on the image repository. Valid values:
   * 
   * *   **NO**
   * *   **YES**
   * 
   * @example
   * NO
   */
  hcStatus?: string;
  /**
   * @remarks
   * The number of images.
   * 
   * @example
   * 3
   */
  imageCount?: number;
  /**
   * @remarks
   * The ID of the image.
   * 
   * @example
   * i-uf6fsg6xlmorug5****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the image.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The type of the image repository. Valid values:
   * 
   * *   **acr**
   * *   **harbor**
   * *   **quay**
   * *   **CI/CD**
   * 
   * @example
   * acr
   */
  registryType?: string;
  /**
   * @remarks
   * The ID of the image repository.
   * 
   * @example
   * crr-2chlzf47w2rk****
   */
  repoId?: string;
  /**
   * @remarks
   * The name of the image repository.
   * 
   * @example
   * zeus
   */
  repoName?: string;
  /**
   * @remarks
   * The namespace to which the image repository belongs.
   * 
   * @example
   * test-dev
   */
  repoNamespace?: string;
  /**
   * @remarks
   * Indicates whether the image repository is at risk. Valid values:
   * 
   * *   **YES**
   * *   **NO**
   * 
   * @example
   * NO
   */
  riskStatus?: string;
  /**
   * @remarks
   * The usage label of the image.
   * 
   * @example
   * PAI
   */
  sourceBizTag?: string;
  /**
   * @remarks
   * The number of vulnerabilities detected on the image repository.
   * 
   * @example
   * 0
   */
  vulCount?: number;
  /**
   * @remarks
   * Indicates whether vulnerabilities are detected on the image repository. Valid values:
   * 
   * *   **YES**
   * *   **NO**
   * 
   * @example
   * NO
   */
  vulStatus?: string;
  static names(): { [key: string]: string } {
    return {
      alarmCount: 'AlarmCount',
      alarmStatus: 'AlarmStatus',
      endpoints: 'Endpoints',
      hasRiskImageCount: 'HasRiskImageCount',
      hcCount: 'HcCount',
      hcStatus: 'HcStatus',
      imageCount: 'ImageCount',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      registryType: 'RegistryType',
      repoId: 'RepoId',
      repoName: 'RepoName',
      repoNamespace: 'RepoNamespace',
      riskStatus: 'RiskStatus',
      sourceBizTag: 'SourceBizTag',
      vulCount: 'VulCount',
      vulStatus: 'VulStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmCount: 'number',
      alarmStatus: 'string',
      endpoints: 'string',
      hasRiskImageCount: 'number',
      hcCount: 'number',
      hcStatus: 'string',
      imageCount: 'number',
      instanceId: 'string',
      regionId: 'string',
      registryType: 'string',
      repoId: 'string',
      repoName: 'string',
      repoNamespace: 'string',
      riskStatus: 'string',
      sourceBizTag: 'string',
      vulCount: 'number',
      vulStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageRepoDetailListResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of image repositories.
   * 
   * @example
   * 19
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageRepoDetailListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about image repositories.
   */
  imageRepoResponses?: DescribeImageRepoDetailListResponseBodyImageRepoResponses[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeImageRepoDetailListResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 0B48AB3C-84FC-424D-A01D-B9270EF46038
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      imageRepoResponses: 'ImageRepoResponses',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageRepoResponses: { 'type': 'array', 'itemType': DescribeImageRepoDetailListResponseBodyImageRepoResponses },
      pageInfo: DescribeImageRepoDetailListResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.imageRepoResponses)) {
      $dara.Model.validateArray(this.imageRepoResponses);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

