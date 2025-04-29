// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightListingSearchResponseBodyModuleFlightListFlightRuleListRefundRuleInfo } from "./FlightListingSearchResponseBodyModuleFlightListFlightRuleListRefundRuleInfo";


export class FlightListingSearchResponseBodyModuleFlightListFlightRuleListRefundRule extends $dara.Model {
  /**
   * @example
   * false
   */
  able?: boolean;
  info?: FlightListingSearchResponseBodyModuleFlightListFlightRuleListRefundRuleInfo[];
  static names(): { [key: string]: string } {
    return {
      able: 'able',
      info: 'info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      able: 'boolean',
      info: { 'type': 'array', 'itemType': FlightListingSearchResponseBodyModuleFlightListFlightRuleListRefundRuleInfo },
    };
  }

  validate() {
    if(Array.isArray(this.info)) {
      $dara.Model.validateArray(this.info);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

