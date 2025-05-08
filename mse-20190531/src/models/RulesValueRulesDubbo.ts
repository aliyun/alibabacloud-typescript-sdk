// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RulesValueRulesDubboArgumentItems } from "./RulesValueRulesDubboArgumentItems";


export class RulesValueRulesDubbo extends $dara.Model {
  appId?: string;
  tags?: string[];
  triggerPolicy?: string;
  serviceName?: string;
  group?: string;
  version?: string;
  methodName?: string;
  paramTypes?: string[];
  /**
   * @example
   * AND
   */
  condition?: string;
  argumentItems?: RulesValueRulesDubboArgumentItems[];
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      tags: 'tags',
      triggerPolicy: 'triggerPolicy',
      serviceName: 'serviceName',
      group: 'group',
      version: 'version',
      methodName: 'methodName',
      paramTypes: 'paramTypes',
      condition: 'condition',
      argumentItems: 'argumentItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      triggerPolicy: 'string',
      serviceName: 'string',
      group: 'string',
      version: 'string',
      methodName: 'string',
      paramTypes: { 'type': 'array', 'itemType': 'string' },
      condition: 'string',
      argumentItems: { 'type': 'array', 'itemType': RulesValueRulesDubboArgumentItems },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(Array.isArray(this.paramTypes)) {
      $dara.Model.validateArray(this.paramTypes);
    }
    if(Array.isArray(this.argumentItems)) {
      $dara.Model.validateArray(this.argumentItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

