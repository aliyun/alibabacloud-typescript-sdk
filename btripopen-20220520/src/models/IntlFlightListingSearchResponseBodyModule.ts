// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IntlFlightListingSearchResponseBodyModuleFlightItemList } from "./IntlFlightListingSearchResponseBodyModuleFlightItemList";


export class IntlFlightListingSearchResponseBodyModule extends $dara.Model {
  flightItemList?: IntlFlightListingSearchResponseBodyModuleFlightItemList[];
  /**
   * @example
   * false
   */
  needContinue?: boolean;
  /**
   * @example
   * ASDFASDFASDFASDFASDF
   */
  queryRecordId?: string;
  /**
   * @example
   * ee229f2d-1835-4199-bfe6-fd14afe8645e
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      flightItemList: 'flight_item_list',
      needContinue: 'need_continue',
      queryRecordId: 'query_record_id',
      token: 'token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flightItemList: { 'type': 'array', 'itemType': IntlFlightListingSearchResponseBodyModuleFlightItemList },
      needContinue: 'boolean',
      queryRecordId: 'string',
      token: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.flightItemList)) {
      $dara.Model.validateArray(this.flightItemList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

