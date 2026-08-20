// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProjectInfoResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The current step in the process.
   * 
   * @example
   * 3
   */
  currentStepNo?: number;
  /**
   * @remarks
   * The Alibaba Cloud UID of the customer.
   * 
   * @example
   * 27291111****
   */
  customerAliUid?: number;
  /**
   * @remarks
   * The sequence number of the last step.
   * 
   * @example
   * 4
   */
  finalStepNo?: number;
  /**
   * @remarks
   * The completion method of the project. Valid values:
   * 
   * - null: The default value for unfinished projects.
   * - CustomerConfirm: Manually confirmed by the customer.
   * - SystemAutoConfirm: Automatically confirmed by the system due to timeout.
   * 
   * @example
   * null
   */
  finishType?: string;
  /**
   * @remarks
   * The creation time of the project. The value is a UNIX timestamp.
   * 
   * @example
   * 1588834324000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The expiration time of the project. The value is a UNIX timestamp.
   * 
   * @example
   * 1620403200000
   */
  gmtExpired?: number;
  /**
   * @remarks
   * The completion time of the project. The value is a UNIX timestamp.
   * 
   * @example
   * 1620403200000
   */
  gmtFinished?: number;
  /**
   * @remarks
   * The business instance ID in Cloud Marketplace.
   * 
   * @example
   * 4****89
   */
  instanceId?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 2059111111111
   */
  orderId?: number;
  /**
   * @remarks
   * The product code.
   * 
   * @example
   * cmgj***055
   */
  productCode?: string;
  /**
   * @remarks
   * The name of the Cloud Marketplace product.
   * 
   * @example
   * 公司宝****记账
   */
  productName?: string;
  /**
   * @remarks
   * The code of the Cloud Marketplace product SKU.
   * 
   * @example
   * yuncode****500001
   */
  productSkuCode?: string;
  /**
   * @remarks
   * The name of the Cloud Marketplace product SKU.
   * 
   * @example
   * 小***纳税人
   */
  productSkuName?: string;
  /**
   * @remarks
   * The execution status of the project. Valid values:
   * 
   * - Starting: In progress.
   * - Cancel: Canceled.
   * - Pause: Paused.
   * - Finish: Completed.
   * 
   * @example
   * Starting
   */
  projectStatus?: string;
  /**
   * @remarks
   * The UID of the supplier to which the project belongs.
   * 
   * @example
   * 45121111****
   */
  supplierAliUid?: number;
  /**
   * @remarks
   * The ID of the process template to which the project belongs.
   * 
   * @example
   * 410
   */
  templateId?: number;
  /**
   * @remarks
   * The template type of the project. Valid values:
   * 
   * - Public: Public template.
   * - Private: Private template.
   * 
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
   * @remarks
   * The request ID.
   * 
   * @example
   * ee3e1b3b-6c38-4bcf-be40-5a946cfda761
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: DescribeProjectInfoResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
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

