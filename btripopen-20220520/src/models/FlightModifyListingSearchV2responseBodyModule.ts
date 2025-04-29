// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightModifyListingSearchV2ResponseBodyModuleDirectFlightList } from "./FlightModifyListingSearchV2responseBodyModuleDirectFlightList";
import { FlightModifyListingSearchV2ResponseBodyModuleTransferFlightList } from "./FlightModifyListingSearchV2responseBodyModuleTransferFlightList";


export class FlightModifyListingSearchV2ResponseBodyModule extends $dara.Model {
  directFlightList?: FlightModifyListingSearchV2ResponseBodyModuleDirectFlightList[];
  nextReqWaitTime?: number;
  retry?: boolean;
  searchRetryToken?: string;
  /**
   * @example
   * a2ffebfe733742aab5c491d960ba3d59
   */
  sessionId?: string;
  transferFlightList?: FlightModifyListingSearchV2ResponseBodyModuleTransferFlightList[];
  transferTitle?: string;
  static names(): { [key: string]: string } {
    return {
      directFlightList: 'direct_flight_list',
      nextReqWaitTime: 'next_req_wait_time',
      retry: 'retry',
      searchRetryToken: 'search_retry_token',
      sessionId: 'session_id',
      transferFlightList: 'transfer_flight_list',
      transferTitle: 'transfer_title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directFlightList: { 'type': 'array', 'itemType': FlightModifyListingSearchV2ResponseBodyModuleDirectFlightList },
      nextReqWaitTime: 'number',
      retry: 'boolean',
      searchRetryToken: 'string',
      sessionId: 'string',
      transferFlightList: { 'type': 'array', 'itemType': FlightModifyListingSearchV2ResponseBodyModuleTransferFlightList },
      transferTitle: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.directFlightList)) {
      $dara.Model.validateArray(this.directFlightList);
    }
    if(Array.isArray(this.transferFlightList)) {
      $dara.Model.validateArray(this.transferFlightList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

