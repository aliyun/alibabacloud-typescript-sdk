// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightListingSearchResponseBodyModuleFlightListFlightRuleListSignRuleInfo } from "./FlightListingSearchResponseBodyModuleFlightListFlightRuleListSignRuleInfo";


export class FlightListingSearchResponseBodyModuleFlightListFlightRuleListSignRule extends $dara.Model {
  /**
   * @example
   * false
   */
  able?: boolean;
  info?: FlightListingSearchResponseBodyModuleFlightListFlightRuleListSignRuleInfo[];
  static names(): { [key: string]: string } {
    return {
      able: 'able',
      info: 'info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      able: 'boolean',
      info: { 'type': 'array', 'itemType': FlightListingSearchResponseBodyModuleFlightListFlightRuleListSignRuleInfo },
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

