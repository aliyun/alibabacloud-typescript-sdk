// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateComputeQuotaPlanRequestQuotaParameter extends $dara.Model {
  /**
   * @remarks
   * The value of elastic Reserved CUs in the level-1 quota.
   * > The default value is 0. The maximum value of this parameter must be equal to the number of subscription-based reserved CUs and cannot exceed 10,000 CUs.
   * 
   * This parameter is required.
   * 
   * @example
   * 50
   */
  elasticReservedCU?: number;
  static names(): { [key: string]: string } {
    return {
      elasticReservedCU: 'elasticReservedCU',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticReservedCU: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

