// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAutoDisposeConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto decision. Valid values:
   * 
   * - `enabled`: Enables auto decision.
   * 
   * - `disabled`: Disables auto decision.
   * 
   * This parameter is required.
   * 
   * @example
   * enabled
   */
  autoDecisionStatus?: string;
  /**
   * @remarks
   * The language of the response message. Valid values:
   * 
   * - **zh** (default): Chinese.
   * 
   * - **en**: English.
   * 
   * This parameter is required.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The code for the cloud product.
   * 
   * This parameter is required.
   * 
   * @example
   * alibaba_cloud_sas
   */
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      autoDecisionStatus: 'AutoDecisionStatus',
      lang: 'Lang',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoDecisionStatus: 'string',
      lang: 'string',
      productCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

