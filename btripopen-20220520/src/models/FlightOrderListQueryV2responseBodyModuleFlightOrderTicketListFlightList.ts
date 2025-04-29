// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightOrderListQueryV2ResponseBodyModuleFlightOrderTicketListFlightList extends $dara.Model {
  /**
   * @example
   * 2022-07-20T10:40Z
   */
  arrTime?: string;
  /**
   * @example
   * V
   */
  cabin?: string;
  /**
   * @example
   * Y
   */
  cabinClass?: string;
  cabinClassName?: string;
  /**
   * @example
   * 2022-07-20T10:40Z
   */
  depTime?: string;
  /**
   * @example
   * CA8572
   */
  flightNo?: string;
  static names(): { [key: string]: string } {
    return {
      arrTime: 'arr_time',
      cabin: 'cabin',
      cabinClass: 'cabin_class',
      cabinClassName: 'cabin_class_name',
      depTime: 'dep_time',
      flightNo: 'flight_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrTime: 'string',
      cabin: 'string',
      cabinClass: 'string',
      cabinClassName: 'string',
      depTime: 'string',
      flightNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

