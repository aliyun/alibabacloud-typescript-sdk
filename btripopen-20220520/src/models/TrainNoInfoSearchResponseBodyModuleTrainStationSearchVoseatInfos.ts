// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainNoInfoSearchResponseBodyModuleTrainStationSearchVOSeatInfos extends $dara.Model {
  /**
   * @example
   * 10000
   */
  price?: number;
  seatName?: string;
  /**
   * @example
   * 14
   */
  seatType?: string;
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

