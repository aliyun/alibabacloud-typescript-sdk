// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTagApplyRuleResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The requirements for application materials.
   * 
   * @example
   * Requirements for application materials
   */
  applyMaterialDesc?: string;
  /**
   * @remarks
   * Indicates whether the application is automatically approved.
   * 
   * @example
   * 16
   */
  autoAudit?: number;
  /**
   * @remarks
   * The URL for the billing documentation.
   * 
   * @example
   * aliyundoc.com
   */
  chargingStandardLink?: string;
  /**
   * @remarks
   * indicates whether encrypted queries are supported.
   * 
   * @example
   * 99
   */
  encryptedQuery?: number;
  /**
   * @remarks
   * Indicates whether application materials are required.
   * 
   * @example
   * 46
   */
  needApplyMaterial?: number;
  /**
   * @remarks
   * The URL for the service agreement.
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

