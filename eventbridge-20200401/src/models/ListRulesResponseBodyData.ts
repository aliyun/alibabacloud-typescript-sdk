// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListRulesResponseBodyDataRules } from "./ListRulesResponseBodyDataRules";


export class ListRulesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * If excess return values exist, this parameter is returned.
   * 
   * @example
   * 1000
   */
  nextToken?: string;
  /**
   * @remarks
   * The event rules.
   */
  rules?: ListRulesResponseBodyDataRules[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 6
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      rules: 'Rules',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      rules: { 'type': 'array', 'itemType': ListRulesResponseBodyDataRules },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

