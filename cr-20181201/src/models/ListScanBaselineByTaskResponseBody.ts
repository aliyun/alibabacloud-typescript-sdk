// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScanBaselineByTaskResponseBodyScanBaselines extends $dara.Model {
  /**
   * @remarks
   * The category to which the baseline risk belongs.
   */
  baselineClassAlias?: string;
  /**
   * @remarks
   * Suggestions about how to fix the baseline risk.
   */
  baselineDetailAdvice?: string;
  /**
   * @remarks
   * The description of the baseline risk.
   */
  baselineDetailDescription?: string;
  /**
   * @remarks
   * The path and content of the baseline risk.
   * 
   * @example
   * usr/local/www/project/environments/dev/common/config/paramsxxx
   */
  baselineDetailPrompt?: string;
  /**
   * @remarks
   * The number of baseline risks.
   * 
   * @example
   * 1
   */
  baselineItemCount?: number;
  /**
   * @remarks
   * The name of the baseline risk.
   */
  baselineNameAlias?: string;
  /**
   * @remarks
   * The key of the baseline name.
   * 
   * @example
   * ak_leak
   */
  baselineNameKey?: string;
  /**
   * @remarks
   * The severity of the baseline risk.
   * 
   * @example
   * high
   */
  baselineNameLevel?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1695090008000
   */
  createTime?: number;
  /**
   * @remarks
   * The time of the first scan.
   * 
   * @example
   * 2024-04-10 15:33:26
   */
  firstScanTime?: number;
  /**
   * @remarks
   * High risk quantity.
   * 
   * @example
   * 1
   */
  highRiskItemCount?: number;
  /**
   * @remarks
   * Low risk quantity.
   * 
   * @example
   * 1
   */
  lowRiskItemCount?: number;
  /**
   * @remarks
   * Medium risk quantity.
   * 
   * @example
   * 1
   */
  middleRiskItemCount?: number;
  /**
   * @remarks
   * The ID of the image scan task.
   * 
   * @example
   * 2328fcaa-f28a-405d-a357-asdvfrew23
   */
  scanTaskId?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 1684220824226
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      baselineClassAlias: 'BaselineClassAlias',
      baselineDetailAdvice: 'BaselineDetailAdvice',
      baselineDetailDescription: 'BaselineDetailDescription',
      baselineDetailPrompt: 'BaselineDetailPrompt',
      baselineItemCount: 'BaselineItemCount',
      baselineNameAlias: 'BaselineNameAlias',
      baselineNameKey: 'BaselineNameKey',
      baselineNameLevel: 'BaselineNameLevel',
      createTime: 'CreateTime',
      firstScanTime: 'FirstScanTime',
      highRiskItemCount: 'HighRiskItemCount',
      lowRiskItemCount: 'LowRiskItemCount',
      middleRiskItemCount: 'MiddleRiskItemCount',
      scanTaskId: 'ScanTaskId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineClassAlias: 'string',
      baselineDetailAdvice: 'string',
      baselineDetailDescription: 'string',
      baselineDetailPrompt: 'string',
      baselineItemCount: 'number',
      baselineNameAlias: 'string',
      baselineNameKey: 'string',
      baselineNameLevel: 'string',
      createTime: 'number',
      firstScanTime: 'number',
      highRiskItemCount: 'number',
      lowRiskItemCount: 'number',
      middleRiskItemCount: 'number',
      scanTaskId: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScanBaselineByTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: number;
  /**
   * @remarks
   * Indicates whether the API request was successful. Valid values:
   * 
   * *   `true`: successful
   * *   `false`: failed
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 5259118F-79E2-57E9-9AEA-551586F4FAED
   */
  requestId?: string;
  /**
   * @remarks
   * The scanned baseline risks.
   */
  scanBaselines?: ListScanBaselineByTaskResponseBodyScanBaselines[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      scanBaselines: 'ScanBaselines',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      isSuccess: 'boolean',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      scanBaselines: { 'type': 'array', 'itemType': ListScanBaselineByTaskResponseBodyScanBaselines },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.scanBaselines)) {
      $dara.Model.validateArray(this.scanBaselines);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

