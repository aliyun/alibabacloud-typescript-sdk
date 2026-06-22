// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageListByBuildRiskResponseBodyDataList extends $dara.Model {
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
   * The timestamp of the first scan. Unit: milliseconds.
   * 
   * @example
   * 1723710827000
   */
  firstScanTime?: number;
  /**
   * @remarks
   * The instance ID of the image repository.
   * 
   * @example
   * 39010****
   */
  instanceId?: string;
  /**
   * @remarks
   * The timestamp of the most recent scan. Unit: milliseconds.
   * 
   * @example
   * 1723710827999
   */
  lastScanTime?: number;
  /**
   * @remarks
   * The region ID.
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
   * test-tepo
   */
  repoName?: string;
  /**
   * @remarks
   * The namespace of the image repository.
   * 
   * @example
   * namespace
   */
  repoNamespace?: string;
  /**
   * @remarks
   * The risk level. Valid values:
   * 
   * - **high**
   * - **medium**
   * - **low**.
   * 
   * @example
   * medium
   */
  riskLevel?: string;
  /**
   * @remarks
   * The status of the alert event to query. Valid values:
   * - **0**: Unhandled.
   * - **1**: Ignored.
   * - **2**: False positive.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The tag of the image.
   * 
   * @example
   * v1
   */
  tag?: string;
  /**
   * @remarks
   * The UUID of the image.
   * 
   * @example
   * 6ec898e6274f942e0e4a053eff1c****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      digest: 'Digest',
      firstScanTime: 'FirstScanTime',
      instanceId: 'InstanceId',
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
      lastScanTime: 'number',
      regionId: 'string',
      repoName: 'string',
      repoNamespace: 'string',
      riskLevel: 'string',
      status: 'number',
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

export class DescribeImageListByBuildRiskResponseBodyDataPageInfo extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page in paging query. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of entries per page in paging query. Default value: 20. If you leave this parameter empty, 20 entries are returned.
   * > Do not leave PageSize empty.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 109
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DescribeImageListByBuildRiskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of images.
   */
  list?: DescribeImageListByBuildRiskResponseBodyDataList[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeImageListByBuildRiskResponseBodyDataPageInfo;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageInfo: 'PageInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': DescribeImageListByBuildRiskResponseBodyDataList },
      pageInfo: DescribeImageListByBuildRiskResponseBodyDataPageInfo,
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
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

export class DescribeImageListByBuildRiskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribeImageListByBuildRiskResponseBodyData;
  /**
   * @remarks
   * The detailed information about the error code.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 52870893-48A7-5A9E-9E05-6253E5B6****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - **true**: The call was successful.
   * - **false**: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeImageListByBuildRiskResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

