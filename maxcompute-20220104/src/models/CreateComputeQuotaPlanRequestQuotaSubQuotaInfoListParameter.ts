// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateComputeQuotaPlanRequestQuotaSubQuotaInfoListParameter extends $dara.Model {
  /**
   * @remarks
   * The value of elastic Reserved CUs.
   * > The total number of elastically reserved CUs in all the level-2 quotas is equal to the number of elastically reserved CUs in the level-1 quota.
   * 
   * This parameter is required.
   * 
   * @example
   * 50
   */
  elasticReservedCU?: number;
  /**
   * @remarks
   * The value of maxCU in Reserved CUs.
   * > The value of maxCU must be less than or equal to the value of maxCU in the level-1 quota that you purchased.
   * 
   * This parameter is required.
   * 
   * @example
   * 50
   */
  maxCU?: number;
  /**
   * @remarks
   * The value of minCU in Reserved CUs.
   * > 
   * >- The total value of minCU in all the level-2 quotas is equal to the value of minCU in the level-1 quota.
   * >- The value of minCU must be less than or equal to the value of maxCU in the level-2 quota and less than or equal to the value of minCU in the level-1 quota that you purchased.
   * 
   * This parameter is required.
   * 
   * @example
   * 50
   */
  minCU?: number;
  static names(): { [key: string]: string } {
    return {
      elasticReservedCU: 'elasticReservedCU',
      maxCU: 'maxCU',
      minCU: 'minCU',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticReservedCU: 'number',
      maxCU: 'number',
      minCU: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

