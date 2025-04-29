// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListSignRuleInfo } from "./FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListSignRuleInfo";


export class FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListSignRule extends $dara.Model {
  /**
   * @example
   * true
   */
  able?: boolean;
  info?: FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListSignRuleInfo[];
  static names(): { [key: string]: string } {
    return {
      able: 'able',
      info: 'info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      able: 'boolean',
      info: { 'type': 'array', 'itemType': FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListSignRuleInfo },
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

