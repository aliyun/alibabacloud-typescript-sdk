// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateQuotaRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * payasyougo
   */
  chargeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * odps
   */
  commodityCode?: string;
  /**
   * @example
   * {"CU":50,"ord_time":"1:Month","autoRenew":false}
   */
  commodityData?: string;
  /**
   * @example
   * MyQuota
   */
  partNickName?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'chargeType',
      commodityCode: 'commodityCode',
      commodityData: 'commodityData',
      partNickName: 'partNickName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      commodityCode: 'string',
      commodityData: 'string',
      partNickName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

