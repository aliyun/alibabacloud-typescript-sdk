// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceGroupsResponseBodyPagingInfoResourceGroupListSpec extends $dara.Model {
  /**
   * @remarks
   * Quantity
   * 
   * @example
   * 1
   */
  amount?: number;
  /**
   * @remarks
   * Specification details
   * 
   * @example
   * 2CU
   */
  standard?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      standard: 'Standard',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      standard: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

