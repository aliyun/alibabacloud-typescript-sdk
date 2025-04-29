// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListSignRuleInfo } from "./FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListSignRuleInfo";


export class FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListSignRule extends $dara.Model {
  /**
   * @example
   * true
   */
  able?: boolean;
  info?: FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListSignRuleInfo[];
  static names(): { [key: string]: string } {
    return {
      able: 'able',
      info: 'info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      able: 'boolean',
      info: { 'type': 'array', 'itemType': FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleListSignRuleInfo },
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

