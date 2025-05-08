// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceQuotasResponseBodyQuotas extends $dara.Model {
  /**
   * @remarks
   * The quota name.
   * 
   * @example
   * customHttpCert
   */
  quotaName?: string;
  /**
   * @remarks
   * The quota value.
   * 
   * @example
   * 10
   */
  quotaValue?: string;
  /**
   * @remarks
   * The threshold type of the quota. Valid values:
   * 
   * *   value: enumerates the values of the quota.
   * *   bool: specifies whether the quota is available.
   * *   num: the upper limit of the quota.
   * *   range: the value range for the quota.
   * *   custom: other types than the preceding four quota threshold types.
   * 
   * @example
   * bool
   */
  quotaValueType?: string;
  static names(): { [key: string]: string } {
    return {
      quotaName: 'QuotaName',
      quotaValue: 'QuotaValue',
      quotaValueType: 'QuotaValueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaName: 'string',
      quotaValue: 'string',
      quotaValueType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

