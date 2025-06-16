// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OrderDetailResponseBodyDataFlightItemDetailListFlightSegmentCabinRelation extends $dara.Model {
  /**
   * @remarks
   * RBD
   * 
   * @example
   * V
   */
  cabin?: string;
  /**
   * @remarks
   * cabin class
   * 
   * @example
   * Y
   */
  cabinClass?: string;
  /**
   * @remarks
   * cabin class description
   * 
   * @example
   * economy class
   */
  cabinClassName?: string;
  /**
   * @remarks
   * availability
   * 
   * @example
   * A
   */
  cabinQuantity?: string;
  /**
   * @remarks
   * segment ID format: flight no.+departure airport[IATA airport code]+arrival airport[IATA airport code]+departure time(yyMMddHHmm)
   * 
   * @example
   * HO1295-PVG-MFM-20230310
   */
  segmentId?: string;
  static names(): { [key: string]: string } {
    return {
      cabin: 'cabin',
      cabinClass: 'cabin_class',
      cabinClassName: 'cabin_class_name',
      cabinQuantity: 'cabin_quantity',
      segmentId: 'segment_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cabin: 'string',
      cabinClass: 'string',
      cabinClassName: 'string',
      cabinQuantity: 'string',
      segmentId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

