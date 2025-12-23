// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTextScanResultResponseBodyDataItemsResult extends $dara.Model {
  /**
   * @remarks
   * Confidence score, ranging from 0 to 100, with two decimal places retained.
   * 
   * @example
   * 25.0
   */
  confidence?: number;
  /**
   * @remarks
   * Description.
   * 
   * @example
   * 疑似色情内容
   */
  description?: string;
  /**
   * @remarks
   * Label.
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
  accountId?: string;
  /**
   * @remarks
   * Bailian Request ID
   * 
   * @example
   * xxx
   */
  bailianRequestId?: string;
  /**
   * @remarks
   * Content.
   * 
   * @example
   * 测试内容
   */
  content?: string;
  dataId?: string;
  /**
   * @remarks
   * Feedback information.
   * 
   * @example
   * miss
   */
  extFeedback?: string;
  /**
   * @remarks
   * Spare parameters.
   * 
   * @example
   * {}
   */
  extra?: { [key: string]: any };
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 2023-07-11 14:21:36
   */
  gmtCreate?: string;
  /**
   * @remarks
   * Labels.
   * 
   * @example
   * nonLabel
   */
  labels?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @remarks
   * Request time.
   * 
   * @example
   * 2023-07-11 14:21:36
   */
  requestTime?: string;
  /**
   * @remarks
   * Detection results.
   */
  result?: GetTextScanResultResponseBodyDataItemsResult[];
  /**
   * @remarks
   * Risk level, returned based on the set high and low risk scores. The return values include:
   * 
   * - high: High risk
   * 
   * - medium: Medium risk
   *  
   * - low: Low risk
   * 
   * - none: No risk detected
   * 
   * @example
   * none
   */
  riskLevel?: string;
  /**
   * @remarks
   * Details of the result.
   * 
   * @example
   * {}
   */
  scanResult?: string;
  /**
   * @remarks
   * Score.
   * 
   * @example
   * 20
   */
  score?: number;
  /**
   * @remarks
   * Service code.
   * 
   * @example
   * nickname_detection
   */
  serviceCode?: string;
  /**
   * @remarks
   * Suggestion for handling.
   * 
   * @example
   * review
   */
  suggestion?: string;
  /**
   * @remarks
   * Task ID.
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
   * Current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Data for the current page.
   */
  items?: GetTextScanResultResponseBodyDataItems[];
  /**
   * @remarks
   * Page size.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Total number of records.
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
   * Error code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Returned data.
   */
  data?: GetTextScanResultResponseBodyData;
  /**
   * @remarks
   * Further description of the error code.
   * 
   * @example
   * OK
   */
  msg?: string;
  /**
   * @remarks
   * ID assigned by the backend to uniquely identify a request. It can be used for troubleshooting.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @remarks
   * Success indicator.
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

