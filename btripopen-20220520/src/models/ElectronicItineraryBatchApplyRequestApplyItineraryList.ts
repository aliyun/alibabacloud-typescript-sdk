// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ElectronicItineraryBatchApplyRequestApplyItineraryList extends $dara.Model {
  purchaserName?: string;
  /**
   * @example
   * tax3213132131
   */
  purchaserTaxNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  purchaserType?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 781-2205431917
   */
  ticketNo?: string;
  static names(): { [key: string]: string } {
    return {
      purchaserName: 'purchaser_name',
      purchaserTaxNo: 'purchaser_tax_no',
      purchaserType: 'purchaser_type',
      ticketNo: 'ticket_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      purchaserName: 'string',
      purchaserTaxNo: 'string',
      purchaserType: 'number',
      ticketNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

