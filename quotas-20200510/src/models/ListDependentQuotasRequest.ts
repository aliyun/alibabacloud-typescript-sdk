// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDependentQuotasRequest extends $dara.Model {
  /**
   * @remarks
   * The abbreviation of the Alibaba Cloud service name.
   * 
   * > For more information, see [Alibaba Cloud services that support Quota Center](https://help.aliyun.com/document_detail/182368.html).
   * 
   * This parameter is required.
   * 
   * @example
   * csk
   */
  productCode?: string;
  /**
   * @remarks
   * The quota ID.
   * 
   * This parameter is required.
   * 
   * @example
   * q_i5uzm3
   */
  quotaActionCode?: string;
  static names(): { [key: string]: string } {
    return {
      productCode: 'ProductCode',
      quotaActionCode: 'QuotaActionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productCode: 'string',
      quotaActionCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

