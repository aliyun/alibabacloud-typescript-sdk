// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTextScanResultResponseBodyDataItemsResult extends $dara.Model {
  /**
   * @remarks
   * The confidence score, ranging from 0 to 100 and rounded to two decimal places.
   * 
   * @example
   * 25.0
   */
  confidence?: number;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 疑似色情内容
   */
  description?: string;
  /**
   * @remarks
   * The labels.
   * 
   * @example
   * political_n
   */
  label?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      description: 'Description',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      description: 'string',
      label: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextScanResultResponseBodyDataItems extends $dara.Model {
  /**
   * @remarks
   * The AccountId passed in by the customer.
   * 
   * @example
   * accountIdtest123
   */
  accountId?: string;
  /**
   * @remarks
   * The Bailian request ID.
   * 
   * @example
   * xxx
   */
  bailianRequestId?: string;
  /**
   * @remarks
   * The content.
   * 
   * @example
   * 测试内容
   */
  content?: string;
  /**
   * @remarks
   * The DataId passed in by the customer.
   * 
   * @example
   * xxxx
   */
  dataId?: string;
  /**
   * @remarks
   * The feedback information.
   * 
   * @example
   * miss
   */
  extFeedback?: string;
  /**
   * @remarks
   * The reserved parameter.
   * 
   * @example
   * {}
   */
  extra?: { [key: string]: any };
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2023-07-11 14:21:36
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The labels.
   * 
   * @example
   * nonLabel
   */
  labels?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @remarks
   * The request time. Format: YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2023-07-11 14:21:36
   */
  requestTime?: string;
  /**
   * @remarks
   * The detection results.
   */
  result?: GetTextScanResultResponseBodyDataItemsResult[];
  /**
   * @remarks
   * The risk level, which is returned based on the configured high and low risk score thresholds. Valid values:
   * 
   * - high: high risk.
   * 
   * - medium: medium risk.
   *  
   * - low: low risk.
   * 
   * - none: no risk detected.
   * 
   * @example
   * none
   */
  riskLevel?: string;
  /**
   * @remarks
   * The result details.
   * 
   * @example
   * {}
   */
  scanResult?: string;
  /**
   * @remarks
   * The score.
   * 
   * @example
   * 20
   */
  score?: number;
  /**
   * @remarks
   * The service code.
   * 
   * @example
   * nickname_detection
   */
  serviceCode?: string;
  /**
   * @remarks
   * The suggested action.
   * 
   * @example
   * review
   */
  suggestion?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * txtwkgb******AsYNXoJswy-1Aa1Qk
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      bailianRequestId: 'BailianRequestId',
      content: 'Content',
      dataId: 'DataId',
      extFeedback: 'ExtFeedback',
      extra: 'Extra',
      gmtCreate: 'GmtCreate',
      labels: 'Labels',
      requestId: 'RequestId',
      requestTime: 'RequestTime',
      result: 'Result',
      riskLevel: 'RiskLevel',
      scanResult: 'ScanResult',
      score: 'Score',
      serviceCode: 'ServiceCode',
      suggestion: 'Suggestion',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      bailianRequestId: 'string',
      content: 'string',
      dataId: 'string',
      extFeedback: 'string',
      extra: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gmtCreate: 'string',
      labels: 'string',
      requestId: 'string',
      requestTime: 'string',
      result: { 'type': 'array', 'itemType': GetTextScanResultResponseBodyDataItemsResult },
      riskLevel: 'string',
      scanResult: 'string',
      score: 'number',
      serviceCode: 'string',
      suggestion: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(this.extra) {
      $dara.Model.validateMap(this.extra);
    }
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextScanResultResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The data on the current page.
   */
  items?: GetTextScanResultResponseBodyDataItems[];
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      items: 'Items',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': GetTextScanResultResponseBodyDataItems },
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextScanResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetTextScanResultResponseBodyData;
  /**
   * @remarks
   * The description of the error code.
   * 
   * @example
   * OK
   */
  msg?: string;
  /**
   * @remarks
   * The ID assigned by the backend to uniquely identify the request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetTextScanResultResponseBodyData,
      msg: 'string',
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

