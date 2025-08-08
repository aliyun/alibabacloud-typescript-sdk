// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProjectInfoResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 3
   */
  currentStepNo?: number;
  /**
   * @example
   * 27291111****
   */
  customerAliUid?: number;
  /**
   * @example
   * 4
   */
  finalStepNo?: number;
  /**
   * @example
   * null
   */
  finishType?: string;
  /**
   * @example
   * 1588834324000
   */
  gmtCreate?: number;
  /**
   * @example
   * 1620403200000
   */
  gmtExpired?: number;
  /**
   * @example
   * 1620403200000
   */
  gmtFinished?: number;
  /**
   * @example
   * 4****89
   */
  instanceId?: string;
  /**
   * @example
   * 2059111111111
   */
  orderId?: number;
  /**
   * @example
   * cmgj***055
   */
  productCode?: string;
  productName?: string;
  /**
   * @example
   * yuncode****500001
   */
  productSkuCode?: string;
  productSkuName?: string;
  /**
   * @example
   * Starting
   */
  projectStatus?: string;
  /**
   * @example
   * 45121111****
   */
  supplierAliUid?: number;
  /**
   * @example
   * 410
   */
  templateId?: number;
  /**
   * @example
   * Public
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      currentStepNo: 'CurrentStepNo',
      customerAliUid: 'CustomerAliUid',
      finalStepNo: 'FinalStepNo',
      finishType: 'FinishType',
      gmtCreate: 'GmtCreate',
      gmtExpired: 'GmtExpired',
      gmtFinished: 'GmtFinished',
      instanceId: 'InstanceId',
      orderId: 'OrderId',
      productCode: 'ProductCode',
      productName: 'ProductName',
      productSkuCode: 'ProductSkuCode',
      productSkuName: 'ProductSkuName',
      projectStatus: 'ProjectStatus',
      supplierAliUid: 'SupplierAliUid',
      templateId: 'TemplateId',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentStepNo: 'number',
      customerAliUid: 'number',
      finalStepNo: 'number',
      finishType: 'string',
      gmtCreate: 'number',
      gmtExpired: 'number',
      gmtFinished: 'number',
      instanceId: 'string',
      orderId: 'number',
      productCode: 'string',
      productName: 'string',
      productSkuCode: 'string',
      productSkuName: 'string',
      projectStatus: 'string',
      supplierAliUid: 'number',
      templateId: 'number',
      templateType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectInfoResponseBody extends $dara.Model {
  /**
   * @example
   * ee3e1b3b-6c38-4bcf-be40-5a946cfda761
   */
  requestId?: string;
  result?: DescribeProjectInfoResponseBodyResult;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeProjectInfoResponseBodyResult,
      success: 'boolean',
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

