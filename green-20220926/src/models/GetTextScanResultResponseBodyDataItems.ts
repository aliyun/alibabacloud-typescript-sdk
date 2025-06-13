// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTextScanResultResponseBodyDataItemsResult } from "./GetTextScanResultResponseBodyDataItemsResult";


export class GetTextScanResultResponseBodyDataItems extends $dara.Model {
  bailianRequestId?: string;
  content?: string;
  /**
   * @example
   * miss
   */
  extFeedback?: string;
  /**
   * @example
   * {}
   */
  extra?: { [key: string]: any };
  /**
   * @example
   * 2023-07-11 14:21:36
   */
  gmtCreate?: string;
  /**
   * @example
   * nonLabel
   */
  labels?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * 2023-07-11 14:21:36
   */
  requestTime?: string;
  result?: GetTextScanResultResponseBodyDataItemsResult[];
  riskLevel?: string;
  /**
   * @example
   * {}
   */
  scanResult?: string;
  /**
   * @example
   * 20
   */
  score?: number;
  /**
   * @example
   * nickname_detection
   */
  serviceCode?: string;
  /**
   * @example
   * review
   */
  suggestion?: string;
  /**
   * @example
   * txtwkgb******AsYNXoJswy-1Aa1Qk
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      bailianRequestId: 'BailianRequestId',
      content: 'Content',
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
      bailianRequestId: 'string',
      content: 'string',
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

