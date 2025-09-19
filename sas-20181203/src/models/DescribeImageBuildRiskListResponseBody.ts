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
   * The timestamp generated when the first scan was performed. Unit: milliseconds.
   * 
   * @example
   * 1723710827000
   */
  firstScanTime?: number;
  /**
   * @remarks
   * The timestamp generated when the last scan was performed. Unit: milliseconds.
   * 
   * @example
   * 1723710827999
   */
  lastScanTime?: number;
  /**
   * @remarks
   * The type key of the risk.
   * 
   * @example
   * other
   */
  riskClass?: string;
  /**
   * @remarks
   * The type name of the risk.
   * 
   * @example
   * other
   */
  riskClassName?: string;
  /**
   * @remarks
   * The key of the risk. You can call the [DescribeImageBuildRiskList](~~~~) operation to obtain the value of **RiskKey**.
   * 
   * @example
   * no_user
   */
  riskKey?: string;
  /**
   * @remarks
   * The rule name of the risk.
   * 
   * @example
   * no_user
   */
  riskKeyName?: string;
  /**
   * @remarks
   * The risk level. Valid values:
   * 
   * *   **high**
   * *   **medium**
   * *   **low**
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
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20. If you leave this parameter empty, 20 entries are returned on each page.
   * 
   * >  We recommend that you do not leave this parameter empty.
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
   * The risks.
   */
  list?: DescribeImageBuildRiskListResponseBodyDataList[];
  /**
   * @remarks
   * The pagination information.
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
   * The response code. The status code **200** indicates that the request was successful. Other status codes indicate that the request failed. You can identify the cause of the failure based on the status code.
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
   * The returned message.
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
   * BE120DAB-F4E7-4C53-ADC3-A97578AB****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
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

