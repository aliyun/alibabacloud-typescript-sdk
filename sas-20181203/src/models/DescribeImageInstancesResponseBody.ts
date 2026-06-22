// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageInstancesResponseBodyImageInstanceList extends $dara.Model {
  /**
   * @remarks
   * The number of security alerts for the image.
   * 
   * @example
   * 0
   */
  alarmCount?: number;
  /**
   * @remarks
   * Indicates whether security alerts exist for the image. Valid values:
   * - **YES**: security alerts exist.
   * - **NO**: no security alerts exist.
   * 
   * @example
   * NO
   */
  alarmStatus?: string;
  /**
   * @remarks
   * Indicates whether the image has been deployed. Valid values:
   * - **0**: not deployed.
   * - **1**: deployed.
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
   * The endpoint addresses of the image resource.
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
   * The baseline risk status. Valid values:
   * 
   * - **NO**: no baseline risk exists.
   * - **YES**: baseline risk exists.
   * 
   * @example
   * NO
   */
  hcStatus?: string;
  /**
   * @remarks
   * The timestamp when the image was created. Unit: milliseconds.
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
   * The timestamp when the image was updated. Unit: milliseconds.
   * 
   * @example
   * 1600069948849
   */
  imageUpdate?: string;
  /**
   * @remarks
   * The instance ID of the image asset.
   * 
   * @example
   * 39010****
   */
  instanceId?: string;
  /**
   * @remarks
   * The timestamp of the latest scan. Unit: milliseconds.
   * 
   * @example
   * 1721363159000
   */
  lastScanTime?: number;
  /**
   * @remarks
   * The ID of the region where the image is located.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The registry type of the image. Valid values:
   * - **acr**: ACR.
   * - **harbor**: Harbor.
   * - **quay**: Quay.
   * - **CI/CD**: CI/CD repository type.
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
   * The namespace of the image repository.
   * 
   * @example
   * N/A
   */
  repoNamespace?: string;
  /**
   * @remarks
   * The repository type. Valid values:
   * 
   * - **private**: private repository.
   * - **public**: public repository.
   * 
   * @example
   * private
   */
  repoType?: string;
  /**
   * @remarks
   * Indicates whether a risk exists. Valid values:
   * 
   * - **NO**: no risk.
   * - **YES**: risk exists.
   * 
   * @example
   * NO
   */
  riskStatus?: string;
  /**
   * @remarks
   * The scan progress of the image. Value range: 0 to 100.
   * 
   * @example
   * 100
   */
  scaProgress?: number;
  /**
   * @remarks
   * The error code of the image scan result. Valid values:
   * 
   * - **TASK_NOT_EXISTS**: the task does not exist.
   * - **TASK_NOT_SUPPORT_REGION**: the task does not support the region.
   * - **forbid_create_repeat_task**: repeated tasks are not allowed.
   * 
   * @example
   * TASK_NOT_SUPPORT_REGION
   */
  scaResult?: string;
  /**
   * @remarks
   * The image scan status. Valid values:
   * - **INIT**: image scan pending.
   * - **START**: image scan started.
   * - **MESSAGE_SEND**: image scan message sent.
   * - **START_RUN**: image analysis task started.
   * - **DOWNLOAD**: image scan downloaded.
   * - **PRE_ANALYZER**: image pre-analysis started.
   * - **WEB_SHELL_ANALYZER**: image WebShell analysis completed.
   * - **CVE_ANALYZER**: image CVE analysis completed.
   * - **BIN_ANALYZER**: image binary analysis completed.
   * - **OTHER_ANALYZER**: image extended analysis completed.
   * - **SUCCESS**: image scan completed.
   * - **PRE_ANALYZER_SUCCESS**: image pre-analysis completed.
   * - **FAIL**: image scan failed.
   * - **TIMEOUT**: image scan timed out.
   * 
   * @example
   * SUCCESS
   */
  scaStatus?: string;
  /**
   * @remarks
   * The business tag of the image.
   * 
   * @example
   * PAI
   */
  sourceBizTag?: string;
  /**
   * @remarks
   * The image status. Valid values:
   * - **NORMAL**: normal.
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
   * - **YES**: vulnerabilities exist.
   * - **NO**: no vulnerabilities exist.
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
   * The number of images displayed on the current page of the returned results.
   * 
   * @example
   * 4
   */
  count?: number;
  /**
   * @remarks
   * The page number of the current page in the paged query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries of image information displayed on each page in the paged query.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of images.
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
   * The list of image information.
   */
  imageInstanceList?: DescribeImageInstancesResponseBodyImageInstanceList[];
  /**
   * @remarks
   * The pagination information of the query result.
   */
  pageInfo?: DescribeImageInstancesResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID, which is a unique identifier generated by Alibaba Cloud for the request. You can use the ID to troubleshoot issues.
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

