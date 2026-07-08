// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTagApplyRuleResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The application material requirements. This parameter is returned when NeedApplyMaterial=1.
   * 
   * @example
   * 申请材料的要求是XXX
   */
  applyMaterialDesc?: string;
  /**
   * @remarks
   * Indicates whether to automatically approve. Valid values:
   * 
   * - 0: do not automatically approve.
   * 
   * - 1: automatically approve.
   * 
   * @example
   * 1
   */
  autoAudit?: number;
  /**
   * @remarks
   * The billing standard description link.
   * 
   * @example
   * aliyundoc.com
   */
  chargingStandardLink?: string;
  /**
   * @remarks
   * Indicates whether encrypted query is supported. Valid values:
   * 
   * - 0: not supported.
   * 
   * - 1: supported.
   * 
   * @example
   * 0
   */
  encryptedQuery?: number;
  /**
   * @remarks
   * Indicates whether application materials need to be provided. Valid values:
   * 
   * - 0: not required.
   * 
   * - 1: required.
   * 
   * @example
   * 1
   */
  needApplyMaterial?: number;
  /**
   * @remarks
   * The service agreement link.
   * 
   * @example
   * example.aliyundoc.com
   */
  slaLink?: string;
  static names(): { [key: string]: string } {
    return {
      applyMaterialDesc: 'ApplyMaterialDesc',
      autoAudit: 'AutoAudit',
      chargingStandardLink: 'ChargingStandardLink',
      encryptedQuery: 'EncryptedQuery',
      needApplyMaterial: 'NeedApplyMaterial',
      slaLink: 'SlaLink',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyMaterialDesc: 'string',
      autoAudit: 'number',
      chargingStandardLink: 'string',
      encryptedQuery: 'number',
      needApplyMaterial: 'number',
      slaLink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTagApplyRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request status code. **OK** indicates success.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: QueryTagApplyRuleResponseBodyData;
  /**
   * @remarks
   * The description of the returned status code.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CC3BB6D2-****-****-9DCE-B38165CE4C47
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * - true: successful.
   * 
   * - false: failed.
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
      data: QueryTagApplyRuleResponseBodyData,
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

