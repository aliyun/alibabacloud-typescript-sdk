// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IntlFlightOtaSearchResponseBodyModuleItemListFlightRuleInfoListFlightRuleInfo } from "./IntlFlightOtaSearchResponseBodyModuleItemListFlightRuleInfoListFlightRuleInfo";
import { IntlFlightOtaSearchResponseBodyModuleItemListFlightRuleInfoListSegmentPosition } from "./IntlFlightOtaSearchResponseBodyModuleItemListFlightRuleInfoListSegmentPosition";


export class IntlFlightOtaSearchResponseBodyModuleItemListFlightRuleInfoList extends $dara.Model {
  flightRuleInfo?: IntlFlightOtaSearchResponseBodyModuleItemListFlightRuleInfoListFlightRuleInfo;
  segmentPosition?: IntlFlightOtaSearchResponseBodyModuleItemListFlightRuleInfoListSegmentPosition;
  static names(): { [key: string]: string } {
    return {
      flightRuleInfo: 'flight_rule_info',
      segmentPosition: 'segment_position',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flightRuleInfo: IntlFlightOtaSearchResponseBodyModuleItemListFlightRuleInfoListFlightRuleInfo,
      segmentPosition: IntlFlightOtaSearchResponseBodyModuleItemListFlightRuleInfoListSegmentPosition,
    };
  }

  validate() {
    if(this.flightRuleInfo && typeof (this.flightRuleInfo as any).validate === 'function') {
      (this.flightRuleInfo as any).validate();
    }
    if(this.segmentPosition && typeof (this.segmentPosition as any).validate === 'function') {
      (this.segmentPosition as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

