// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightOrderQueryResponseBodyModuleInsuranceInfoList extends $dara.Model {
  /**
   * @example
   * 100
   */
  amount?: number;
  /**
   * @example
   * 345-987-098
   */
  insuranceNo?: string;
  name?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      insuranceNo: 'insurance_no',
      name: 'name',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      insuranceNo: 'string',
      name: 'string',
      status: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

