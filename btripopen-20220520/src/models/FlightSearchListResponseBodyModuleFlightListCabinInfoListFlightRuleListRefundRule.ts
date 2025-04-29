// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRuleInfo } from "./FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRuleInfo";


export class FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRule extends $dara.Model {
  /**
   * @example
   * true
   */
  able?: boolean;
  info?: FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRuleInfo[];
  static names(): { [key: string]: string } {
    return {
      able: 'able',
      info: 'info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      able: 'boolean',
      info: { 'type': 'array', 'itemType': FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRuleInfo },
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

