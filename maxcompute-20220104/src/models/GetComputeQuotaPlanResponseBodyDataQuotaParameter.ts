// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetComputeQuotaPlanResponseBodyDataQuotaParameter extends $dara.Model {
  /**
   * @remarks
   * The value of elastic Reserved CUs.
   * 
   * @example
   * 50
   */
  elasticReservedCU?: number;
  /**
   * @remarks
   * The value of maxCU in Reserved CUs.
   * 
   * @example
   * 50
   */
  maxCU?: number;
  /**
   * @remarks
   * The value of minCU in Reserved CUs.
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

