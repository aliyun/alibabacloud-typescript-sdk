// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListApplicationsWithTagRulesResponseBodyDataResultRouteRulesRulesDubbo } from "./ListApplicationsWithTagRulesResponseBodyDataResultRouteRulesRulesDubbo";
import { ListApplicationsWithTagRulesResponseBodyDataResultRouteRulesRulesSpringcloud } from "./ListApplicationsWithTagRulesResponseBodyDataResultRouteRulesRulesSpringcloud";


export class ListApplicationsWithTagRulesResponseBodyDataResultRouteRulesRules extends $dara.Model {
  dubbo?: ListApplicationsWithTagRulesResponseBodyDataResultRouteRulesRulesDubbo[];
  springcloud?: ListApplicationsWithTagRulesResponseBodyDataResultRouteRulesRulesSpringcloud[];
  static names(): { [key: string]: string } {
    return {
      dubbo: 'dubbo',
      springcloud: 'springcloud',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dubbo: { 'type': 'array', 'itemType': ListApplicationsWithTagRulesResponseBodyDataResultRouteRulesRulesDubbo },
      springcloud: { 'type': 'array', 'itemType': ListApplicationsWithTagRulesResponseBodyDataResultRouteRulesRulesSpringcloud },
    };
  }

  validate() {
    if(Array.isArray(this.dubbo)) {
      $dara.Model.validateArray(this.dubbo);
    }
    if(Array.isArray(this.springcloud)) {
      $dara.Model.validateArray(this.springcloud);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

