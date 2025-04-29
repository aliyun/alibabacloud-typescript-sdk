// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightSearchListResponseBodyModuleFlightListFlightRuleListUpgradeRuleInfo } from "./FlightSearchListResponseBodyModuleFlightListFlightRuleListUpgradeRuleInfo";


export class FlightSearchListResponseBodyModuleFlightListFlightRuleListUpgradeRule extends $dara.Model {
  /**
   * @example
   * false
   */
  able?: boolean;
  info?: FlightSearchListResponseBodyModuleFlightListFlightRuleListUpgradeRuleInfo[];
  static names(): { [key: string]: string } {
    return {
      able: 'able',
      info: 'info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      able: 'boolean',
      info: { 'type': 'array', 'itemType': FlightSearchListResponseBodyModuleFlightListFlightRuleListUpgradeRuleInfo },
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

