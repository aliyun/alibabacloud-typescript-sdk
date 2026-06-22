// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageListBySensitiveFileResponseBodyImageInfos extends $dara.Model {
  /**
   * @remarks
   * The image digest.
   * 
   * @example
   * v005
   */
  digest?: string;
  /**
   * @remarks
   * The timestamp of the first scan, in milliseconds.
   * 
   * @example
   * 1649814050000
   */
  firstScanTime?: number;
  /**
   * @remarks
   * The ID of the image instance.
   * 
   * @example
   * cri-a595qp31knh9****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * sec-NessusSc
   */
  instanceName?: string;
  /**
   * @remarks
   * The timestamp of the most recent scan, in milliseconds.
   * 
   * @example
   * 1649814050000
   */
  lastScanTime?: number;
  /**
   * @remarks
   * The region ID of the image instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the image repository.
   * 
   * @example
   * opa-test
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
   * The risk level. Valid values:
   * 
   * - **high**: High risk.
   * - **medium**: Medium risk.
   * - **low**: Low risk.
   * 
   * @example
   * low
   */
  riskLevel?: string;
  /**
   * @remarks
   * The status of the sensitive file. Valid values:
   * - **0**: Unhandled.
   * - **1**: Ignored.
   * - **2**: False positive.
   * 
   * @example
   * 0
   */
  status?: string;
  /**
   * @remarks
   * The image tag.
   * 
   * @example
   * nuxeo6
   */
  tag?: string;
  /**
   * @remarks
   * The unique identifier of the image.
   * 
   * @example
   * f58681174f944623345379e23b7b****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      digest: 'Digest',
      firstScanTime: 'FirstScanTime',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      lastScanTime: 'LastScanTime',
      regionId: 'RegionId',
      repoName: 'RepoName',
      repoNamespace: 'RepoNamespace',
      riskLevel: 'RiskLevel',
      status: 'Status',
      tag: 'Tag',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      digest: 'string',
      firstScanTime: 'number',
      instanceId: 'string',
      instanceName: 'string',
      lastScanTime: 'number',
      regionId: 'string',
      repoName: 'string',
      repoNamespace: 'string',
      riskLevel: 'string',
      status: 'string',
      tag: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageListBySensitiveFileResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries displayed on the current page in a paginated query.
   * 
   * @example
   * 4
   */
  count?: number;
  /**
   * @remarks
   * The page number of the current page in a paginated query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The key of the last entry.
   * 
   * @example
   * CAESGgoSChAKDGNvbXBsZXRlVGltZRABCgQiAggAGAAiQAoJAGYXFWIAAAAACjMDLgAAADFTNzMyZDMwMzAzMDM1Mzc3Njc4MzA2ODY5NmI2YTY1Nzg2NTcxNjE2NDc4NjE=
   */
  lastRowKey?: string;
  /**
   * @remarks
   * The number of alert events displayed per page in a paginated query. Default value: **20**, indicating that 20 alert events are displayed per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 83
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      lastRowKey: 'LastRowKey',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      lastRowKey: 'string',
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

export class DescribeImageListBySensitiveFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result code. A value of **200** indicates success. Other values indicate failure. You can use this field to determine the cause of failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The list of image information.
   */
  imageInfos?: DescribeImageListBySensitiveFileResponseBodyImageInfos[];
  /**
   * @remarks
   * The detailed information of the error code.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeImageListBySensitiveFileResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID, which is a unique identifier generated by Alibaba Cloud for the request. It can be used to troubleshoot issues.
   * 
   * @example
   * E0C5C07F-1576-509A-AE44-1C36B8445B37
   */
  requestId?: string;
  /**
   * @remarks
   * The result status of the API call. Valid values:
   * - **true**: The API call was successful.
   * - **false**: The API call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      imageInfos: 'ImageInfos',
      message: 'Message',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      imageInfos: { 'type': 'array', 'itemType': DescribeImageListBySensitiveFileResponseBodyImageInfos },
      message: 'string',
      pageInfo: DescribeImageListBySensitiveFileResponseBodyPageInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.imageInfos)) {
      $dara.Model.validateArray(this.imageInfos);
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

