// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceInstanceSubscriptionEstimateCostResponseBodyResourcePricesRules extends $dara.Model {
  /**
   * @remarks
   * Promotion description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Promotion name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * Promotion ID.
   * 
   * @example
   * 1021199213
   */
  ruleDescId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      ruleDescId: 'RuleDescId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      ruleDescId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

