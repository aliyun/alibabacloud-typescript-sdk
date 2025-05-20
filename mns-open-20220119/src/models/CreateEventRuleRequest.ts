// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateEventRuleRequestEndpoints } from "./CreateEventRuleRequestEndpoints";
import { EventMatchRule } from "./EventMatchRule";


export class CreateEventRuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  endpoints?: CreateEventRuleRequestEndpoints[];
  /**
   * @remarks
   * This parameter is required.
   */
  eventTypes?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  matchRules?: EventMatchRule[][];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * oss
   */
  productName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rule-xsXDW
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      endpoints: 'Endpoints',
      eventTypes: 'EventTypes',
      matchRules: 'MatchRules',
      productName: 'ProductName',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoints: { 'type': 'array', 'itemType': CreateEventRuleRequestEndpoints },
      eventTypes: { 'type': 'array', 'itemType': 'string' },
      matchRules: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': EventMatchRule } },
      productName: 'string',
      ruleName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.endpoints)) {
      $dara.Model.validateArray(this.endpoints);
    }
    if(Array.isArray(this.eventTypes)) {
      $dara.Model.validateArray(this.eventTypes);
    }
    if(Array.isArray(this.matchRules)) {
      $dara.Model.validateArray(this.matchRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

