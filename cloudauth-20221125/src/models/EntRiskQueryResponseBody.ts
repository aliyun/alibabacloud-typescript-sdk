// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EntRiskQueryResponseBodyResultRiskList extends $dara.Model {
  /**
   * @remarks
   * Unified Social Credit Code
   * 
   * @example
   * 92500112MA5UHU****
   */
  creditCode?: string;
  /**
   * @remarks
   * Company name.
   * 
   * @example
   * 杭州****
   */
  entName?: string;
  /**
   * @remarks
   * Date listed as abnormal
   * Example: 2023-02-03
   * 
   * @example
   * 2023-02-03
   */
  listedDate?: string;
  /**
   * @remarks
   * Reason for being listed as abnormal
   * 
   * @example
   * 未按照《个体工商户年度报告暂行办法》***
   */
  listedReason?: string;
  /**
   * @remarks
   * Authority that handled the inclusion
   * 
   * @example
   * ***市场监督***
   */
  operationOrg?: string;
  /**
   * @remarks
   * Business registration number
   * 
   * @example
   * 50011260996****
   */
  regNo?: string;
  /**
   * @remarks
   * Date removed from the abnormal list
   * Example: 2023-02-03
   * 
   * @example
   * 2023-02-06
   */
  removedDate?: string;
  /**
   * @remarks
   * Authority that handled the removal
   * 
   * @example
   * ***市场监督***
   */
  removedOrg?: string;
  /**
   * @remarks
   * Reason for being removed from the abnormal list
   * 
   * @example
   * 根据《个体工商户年度报告暂行办法》第十三条的规定******
   */
  removedReason?: string;
  static names(): { [key: string]: string } {
    return {
      creditCode: 'CreditCode',
      entName: 'EntName',
      listedDate: 'ListedDate',
      listedReason: 'ListedReason',
      operationOrg: 'OperationOrg',
      regNo: 'RegNo',
      removedDate: 'RemovedDate',
      removedOrg: 'RemovedOrg',
      removedReason: 'RemovedReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creditCode: 'string',
      entName: 'string',
      listedDate: 'string',
      listedReason: 'string',
      operationOrg: 'string',
      regNo: 'string',
      removedDate: 'string',
      removedOrg: 'string',
      removedReason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EntRiskQueryResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Query result
   * 0: Normal business operation
   * 1: Abnormal business operation
   * 2: Not found
   * 
   * @example
   * 1
   */
  bizCode?: string;
  /**
   * @remarks
   * List of abnormal information
   */
  riskList?: EntRiskQueryResponseBodyResultRiskList[];
  /**
   * @remarks
   * Business operation status.
   * - 1: In operation (open)
   * - 2: Relocated
   * - 3: Deregistered
   * - 4: Revoked
   * - 5: Canceled
   * - 6: Suspended
   * - 0: Other
   * 
   * @example
   * 1
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      riskList: 'RiskList',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      riskList: { 'type': 'array', 'itemType': EntRiskQueryResponseBodyResultRiskList },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.riskList)) {
      $dara.Model.validateArray(this.riskList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EntRiskQueryResponseBody extends $dara.Model {
  /**
   * @remarks
   * Error code. For details about error codes, see **[Error Codes](https://help.aliyun.com/document_detail/215420.html)**.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Response message for the request information.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 8FC3D6AC-9FED-4311-8DA7-C4BF47D9F260
   */
  requestId?: string;
  /**
   * @remarks
   * Result
   */
  result?: EntRiskQueryResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: EntRiskQueryResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

