// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the event bus.
   * 
   * This parameter is required.
   * 
   * @example
   * default
   */
  eventBusName?: string;
  /**
   * @remarks
   * The maximum number of entries to be returned in a single call. You can use this parameter and the NextToken parameter to implement paging. A maximum of 100 entries can be returned in a single call.
   * 
   * @example
   * 50
   */
  limit?: number;
  /**
   * @remarks
   * If you set the Limit parameter and excess return values exist, this parameter is returned.
   * 
   * @example
   * 1000
   */
  nextToken?: string;
  /**
   * @remarks
   * The prefix of the rule name.
   * 
   * @example
   * test
   */
  ruleNamePrefix?: string;
  static names(): { [key: string]: string } {
    return {
      eventBusName: 'EventBusName',
      limit: 'Limit',
      nextToken: 'NextToken',
      ruleNamePrefix: 'RuleNamePrefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventBusName: 'string',
      limit: 'number',
      nextToken: 'string',
      ruleNamePrefix: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

