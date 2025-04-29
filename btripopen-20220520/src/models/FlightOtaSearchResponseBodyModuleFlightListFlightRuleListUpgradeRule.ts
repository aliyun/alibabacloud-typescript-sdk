// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightOtaSearchResponseBodyModuleFlightListFlightRuleListUpgradeRuleInfo } from "./FlightOtaSearchResponseBodyModuleFlightListFlightRuleListUpgradeRuleInfo";


export class FlightOtaSearchResponseBodyModuleFlightListFlightRuleListUpgradeRule extends $dara.Model {
  /**
   * @example
   * false
   */
  able?: boolean;
  info?: FlightOtaSearchResponseBodyModuleFlightListFlightRuleListUpgradeRuleInfo[];
  static names(): { [key: string]: string } {
    return {
      able: 'able',
      info: 'info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      able: 'boolean',
      info: { 'type': 'array', 'itemType': FlightOtaSearchResponseBodyModuleFlightListFlightRuleListUpgradeRuleInfo },
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

