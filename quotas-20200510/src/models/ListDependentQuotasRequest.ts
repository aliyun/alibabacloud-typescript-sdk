// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDependentQuotasRequest extends $dara.Model {
  /**
   * @remarks
   * The abbreviated name of the cloud service.
   * 
   * > For more information about how to obtain the abbreviated name of a cloud service, see `ProductCode` in [ListProducts](https://help.aliyun.com/document_detail/440555.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cloudsso
   */
  productCode?: string;
  /**
   * @remarks
   * The quota ID.
   * 
   * > For more information about how to obtain the quota ID of a target cloud service, see `QuotaActionCode` in [ListProductQuotas](https://help.aliyun.com/document_detail/440554.html).
   * 
   * This parameter is required.
   * 
   * @example
   * q_system-policy-per-access-configuration
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

