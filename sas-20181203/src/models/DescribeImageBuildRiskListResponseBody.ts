// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageBuildRiskListResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The number of affected images.
   * 
   * @example
   * 2
   */
  count?: number;
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
   * The timestamp of the most recent scan. Unit: milliseconds.
   * 
   * @example
   * 1723710827999
   */
  lastScanTime?: number;
  /**
   * @remarks
   * The key of the build risk rule category.
   * 
   * @example
   * other
   */
  riskClass?: string;
  /**
   * @remarks
   * The category name of the build risk rule.
   * 
   * @example
   * other
   */
  riskClassName?: string;
  /**
   * @remarks
   * The key of the build risk rule. You can call the [DescribeImageBuildRiskList](~~~~) operation to obtain the value of **RiskKey**.
   * 
   * @example
   * no_user
   */
  riskKey?: string;
  /**
   * @remarks
   * The name of the build risk rule.
   * 
   * @example
   * no_user
   */
  riskKeyName?: string;
  /**
   * @remarks
   * The risk level. Valid values:
   * 
   * - **high**: High.
   * 
   * - **medium**: Medium.
   * 
   * - **low**: Low.
   * 
   * @example
   * medium
   */
  riskLevel?: string;
  /**
   * @remarks
   * The number of unprocessed images.
   * 
   * @example
   * 1
   */
  unprocessedNum?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      firstScanTime: 'FirstScanTime',
      lastScanTime: 'LastScanTime',
      riskClass: 'RiskClass',
      riskClassName: 'RiskClassName',
      riskKey: 'RiskKey',
      riskKeyName: 'RiskKeyName',
      riskLevel: 'RiskLevel',
      unprocessedNum: 'UnprocessedNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      firstScanTime: 'number',
      lastScanTime: 'number',
      riskClass: 'string',
      riskClassName: 'string',
      riskKey: 'string',
      riskKeyName: 'string',
      riskLevel: 'string',
      unprocessedNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageBuildRiskListResponseBodyDataPageInfo extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page when paging is used. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of entries per page when paging is used. Default value: 20. If you leave this parameter empty, 20 entries are returned per page.
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

export class DescribeImageBuildRiskListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The summary list of build risks.
   */
  list?: DescribeImageBuildRiskListResponseBodyDataList[];
  /**
   * @remarks
   * The paging parameters.
   */
  pageInfo?: DescribeImageBuildRiskListResponseBodyDataPageInfo;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageInfo: 'PageInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': DescribeImageBuildRiskListResponseBodyDataList },
      pageInfo: DescribeImageBuildRiskListResponseBodyDataPageInfo,
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

export class DescribeImageBuildRiskListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result code. A value of **200** indicates success. Any other value indicates failure. You can use this field to determine the cause of the failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribeImageBuildRiskListResponseBodyData;
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
   * The ID of the request.
   * 
   * @example
   * BE120DAB-F4E7-4C53-ADC3-A97578AB****
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
      data: DescribeImageBuildRiskListResponseBodyData,
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

