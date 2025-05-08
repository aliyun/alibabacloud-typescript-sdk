// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListApplicationsWithTagRulesResponseBodyDataResultRouteRulesRulesDubboArgumentItems } from "./ListApplicationsWithTagRulesResponseBodyDataResultRouteRulesRulesDubboArgumentItems";


export class ListApplicationsWithTagRulesResponseBodyDataResultRouteRulesRulesDubbo extends $dara.Model {
  appId?: string;
  argumentItems?: ListApplicationsWithTagRulesResponseBodyDataResultRouteRulesRulesDubboArgumentItems[];
  condition?: string;
  group?: string;
  methodName?: string;
  paramTypes?: string[];
  serviceName?: string;
  tags?: string[];
  triggerPolicy?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      argumentItems: 'argumentItems',
      condition: 'condition',
      group: 'group',
      methodName: 'methodName',
      paramTypes: 'paramTypes',
      serviceName: 'serviceName',
      tags: 'tags',
      triggerPolicy: 'triggerPolicy',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      argumentItems: { 'type': 'array', 'itemType': ListApplicationsWithTagRulesResponseBodyDataResultRouteRulesRulesDubboArgumentItems },
      condition: 'string',
      group: 'string',
      methodName: 'string',
      paramTypes: { 'type': 'array', 'itemType': 'string' },
      serviceName: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      triggerPolicy: 'string',
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.argumentItems)) {
      $dara.Model.validateArray(this.argumentItems);
    }
    if(Array.isArray(this.paramTypes)) {
      $dara.Model.validateArray(this.paramTypes);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

