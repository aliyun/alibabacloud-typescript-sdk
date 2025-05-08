// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWafRulesetsResponseBodyRulesets extends $dara.Model {
  /**
   * @remarks
   * List of match objects.
   */
  fields?: string[];
  /**
   * @remarks
   * ID of the WAF rule set.
   * 
   * @example
   * 10000001
   */
  id?: number;
  /**
   * @remarks
   * Name of the rule set.
   * 
   * @example
   * example
   */
  name?: string;
  /**
   * @remarks
   * WAF operation phase.
   * 
   * @example
   * http_bot
   */
  phase?: string;
  /**
   * @remarks
   * Status of the rule set.
   * 
   * @example
   * on
   */
  status?: string;
  /**
   * @remarks
   * Protection target type in http_bot.
   * 
   * @example
   * web
   */
  target?: string;
  /**
   * @remarks
   * List of rule types.
   */
  types?: string[];
  /**
   * @remarks
   * Last modification time of the rule set.
   * 
   * @example
   * 2024-01-01T00:00:00Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      fields: 'Fields',
      id: 'Id',
      name: 'Name',
      phase: 'Phase',
      status: 'Status',
      target: 'Target',
      types: 'Types',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fields: { 'type': 'array', 'itemType': 'string' },
      id: 'number',
      name: 'string',
      phase: 'string',
      status: 'string',
      target: 'string',
      types: { 'type': 'array', 'itemType': 'string' },
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fields)) {
      $dara.Model.validateArray(this.fields);
    }
    if(Array.isArray(this.types)) {
      $dara.Model.validateArray(this.types);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

