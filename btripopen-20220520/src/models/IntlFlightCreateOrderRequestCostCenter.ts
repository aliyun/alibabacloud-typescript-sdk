// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightCreateOrderRequestCostCenter extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  costCenterName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 312434
   */
  costCenterNumber?: string;
  static names(): { [key: string]: string } {
    return {
      costCenterName: 'cost_center_name',
      costCenterNumber: 'cost_center_number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costCenterName: 'string',
      costCenterNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

