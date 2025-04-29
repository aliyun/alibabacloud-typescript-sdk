// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainNoListSearchResponseBodyModuleTrainTransferStationSearchVOsTransferDetailListSeatInfos extends $dara.Model {
  /**
   * @example
   * 40900
   */
  price?: number;
  seatName?: string;
  /**
   * @example
   * 14
   */
  seatType?: string;
  /**
   * @example
   * 33
   */
  stock?: string;
  static names(): { [key: string]: string } {
    return {
      price: 'price',
      seatName: 'seat_name',
      seatType: 'seat_type',
      stock: 'stock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      price: 'number',
      seatName: 'string',
      seatType: 'string',
      stock: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

