// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageInstancesResponseBodyImageInstanceList extends $dara.Model {
  /**
   * @remarks
   * The number of alerts that are generated for the image.
   * 
   * @example
   * 0
   */
  alarmCount?: number;
  /**
   * @remarks
   * Indicates whether alerts are generated for the image. Valid values:
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
   * Indicates whether the image was deployed. Valid values:
   * 
   * *   **0**: The image was not deployed.
   * *   **1**: The image was deployed.
   * 
   * @example
   * 1
   */
  deployed?: number;
  /**
   * @remarks
   * The digest value of the image.
   * 
   * @example
   * a5ccdd9b166b67e02954aa9b618fe19b7968bd56a15463d2ad7f2643ba5b****
   */
  digest?: string;
  /**
   * @remarks
   * The address of the image.
   * 
   * @example
   * []
   */
  endpoints?: string;
  /**
   * @remarks
   * The number of baseline risks.
   * 
   * @example
   * 0
   */
  hcCount?: number;
  /**
   * @remarks
   * Indicates whether baseline risks exist. Valid values:
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
   * The timestamp generated when the image was created. Unit: milliseconds.
   * 
   * @example
   * 1600069948849
   */
  imageCreate?: string;
  /**
   * @remarks
   * The ID of the image.
   * 
   * @example
   * c20987f18b130f9d144c9828df630417e2a9523148930dc3963e9d0dab30****
   */
  imageId?: string;
  /**
   * @remarks
   * The size of the image. Unit: MB.
   * 
   * @example
   * 1604487690
   */
  imageSize?: string;
  /**
   * @remarks
   * The timestamp generated when the image was updated. Unit: milliseconds.
   * 
   * @example
   * 1600069948849
   */
  imageUpdate?: string;
  /**
   * @remarks
   * The instance ID of the image.
   * 
   * @example
   * 39010****
   */
  instanceId?: string;
  /**
   * @remarks
   * The timestamp when the last scan was performed. Unit: milliseconds.
   * 
   * @example
   * 1721363159000
   */
  lastScanTime?: number;
  /**
   * @remarks
   * The region ID of the image.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The type of the image. Valid values:
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
   * f2b86d20bf0855af6aa268ce90fd****
   */
  repoId?: string;
  /**
   * @remarks
   * The name of the image repository.
   * 
   * @example
   * sas-script-test
   */
  repoName?: string;
  /**
   * @remarks
   * The namespace to which the image repository belongs.
   * 
   * @example
   * N/A
   */
  repoNamespace?: string;
  /**
   * @remarks
   * The type of the repository. Valid values:
   * 
   * *   **private**
   * *   **public**
   * 
   * @example
   * private
   */
  repoType?: string;
  /**
   * @remarks
   * Indicates whether risks exist. Valid values:
   * 
   * *   **NO**
   * *   **YES**
   * 
   * @example
   * NO
   */
  riskStatus?: string;
  /**
   * @remarks
   * The scan progress of the image. Valid values: 0 to 100.
   * 
   * @example
   * 100
   */
  scaProgress?: number;
  /**
   * @remarks
   * The error code of the image scan result. Valid values:
   * 
   * *   **TASK_NOT_EXISTS**: The image scan task does not exist.
   * *   **TASK_NOT_SUPPORT_REGION**: The image scan task cannot be performed in the current region.
   * *   **forbid_create_repeat_task**: The image scan task already exists.
   * 
   * @example
   * TASK_NOT_SUPPORT_REGION
   */
  scaResult?: string;
  /**
   * @remarks
   * The scan status of the image. Valid values:
   * 
   * *   **INIT**: The image scan task is pending startup.
   * *   **START**: The image scan task is started.
   * *   **MESSAGE_SEND**: The message about the image scan task is sent.
   * *   **START_RUN**: The image analysis task is started.
   * *   **DOWNLOAD**: The image scan result is downloaded.
   * *   **PRE_ANALYZER**: The image pre-analysis is started.
   * *   **WEB_SHELL_ANALYZER**: The WebShell analysis of the image is complete.
   * *   **CVE_ANALYZER**: The Common Vulnerabilities and Exposures (CVE) analysis of the image is complete.
   * *   **BIN_ANALYZER**: The binary analysis of the image is complete.
   * *   **OTHER_ANALYZER**: The extended analysis of the image is complete.
   * *   **SUCCESS**: The image scan task is complete.
   * *   **PRE_ANALYZER_SUCCESS**: The image pre-analysis is complete.
   * *   **FAIL**: The image scan task failed.
   * *   **TIMEOUT**: The image scan task timed out.
   * 
   * @example
   * SUCCESS
   */
  scaStatus?: string;
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
   * The status of the image. Valid values:
   * 
   * *   **NORMAL**
   * 
   * @example
   * NORMAL
   */
  status?: string;
  /**
   * @remarks
   * The tag of the image.
   * 
   * @example
   * mysql_5.7
   */
  tag?: string;
  /**
   * @remarks
   * The UUID of the server.
   * 
   * @example
   * 12f80307-60aa-4efa-863a-56d72fb****
   */
  uuid?: string;
  /**
   * @remarks
   * The number of vulnerabilities in the image.
   * 
   * @example
   * 0
   */
  vulCount?: number;
  /**
   * @remarks
   * Indicates whether vulnerabilities exist in the image. Valid values:
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
      deployed: 'Deployed',
      digest: 'Digest',
      endpoints: 'Endpoints',
      hcCount: 'HcCount',
      hcStatus: 'HcStatus',
      imageCreate: 'ImageCreate',
      imageId: 'ImageId',
      imageSize: 'ImageSize',
      imageUpdate: 'ImageUpdate',
      instanceId: 'InstanceId',
      lastScanTime: 'LastScanTime',
      regionId: 'RegionId',
      registryType: 'RegistryType',
      repoId: 'RepoId',
      repoName: 'RepoName',
      repoNamespace: 'RepoNamespace',
      repoType: 'RepoType',
      riskStatus: 'RiskStatus',
      scaProgress: 'ScaProgress',
      scaResult: 'ScaResult',
      scaStatus: 'ScaStatus',
      sourceBizTag: 'SourceBizTag',
      status: 'Status',
      tag: 'Tag',
      uuid: 'Uuid',
      vulCount: 'VulCount',
      vulStatus: 'VulStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmCount: 'number',
      alarmStatus: 'string',
      deployed: 'number',
      digest: 'string',
      endpoints: 'string',
      hcCount: 'number',
      hcStatus: 'string',
      imageCreate: 'string',
      imageId: 'string',
      imageSize: 'string',
      imageUpdate: 'string',
      instanceId: 'string',
      lastScanTime: 'number',
      regionId: 'string',
      registryType: 'string',
      repoId: 'string',
      repoName: 'string',
      repoNamespace: 'string',
      repoType: 'string',
      riskStatus: 'string',
      scaProgress: 'number',
      scaResult: 'string',
      scaStatus: 'string',
      sourceBizTag: 'string',
      status: 'string',
      tag: 'string',
      uuid: 'string',
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

export class DescribeImageInstancesResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of images returned on the current page.
   * 
   * @example
   * 4
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
   * The total number of returned entries.
   * 
   * @example
   * 69
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

export class DescribeImageInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the images.
   */
  imageInstanceList?: DescribeImageInstancesResponseBodyImageInstanceList[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeImageInstancesResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * BE120DAB-F4E7-4C53-ADC3-A97578ABF384
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      imageInstanceList: 'ImageInstanceList',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageInstanceList: { 'type': 'array', 'itemType': DescribeImageInstancesResponseBodyImageInstanceList },
      pageInfo: DescribeImageInstancesResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.imageInstanceList)) {
      $dara.Model.validateArray(this.imageInstanceList);
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

