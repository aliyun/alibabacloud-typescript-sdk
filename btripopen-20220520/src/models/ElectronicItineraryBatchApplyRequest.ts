// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ElectronicItineraryBatchApplyRequestApplyItineraryList extends $dara.Model {
  purchaserName?: string;
  purchaserTaxNo?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  purchaserType?: number;
  /**
   * @remarks
   * This parameter is required.
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

export class ElectronicItineraryBatchApplyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  applyItineraryList?: ElectronicItineraryBatchApplyRequestApplyItineraryList[];
  canReprint?: boolean;
  static names(): { [key: string]: string } {
    return {
      applyItineraryList: 'apply_itinerary_list',
      canReprint: 'can_reprint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyItineraryList: { 'type': 'array', 'itemType': ElectronicItineraryBatchApplyRequestApplyItineraryList },
      canReprint: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.applyItineraryList)) {
      $dara.Model.validateArray(this.applyItineraryList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

