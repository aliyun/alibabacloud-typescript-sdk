// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListManagedRulesGroupsResponseBodyManagedRulesGroups extends $dara.Model {
  /**
   * @remarks
   * Name of the managed rule group.
   * 
   * @example
   * example
   */
  name?: string;
  /**
   * @remarks
   * Number of rules within the managed rule group.
   * 
   * @example
   * 1000
   */
  ruleCount?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      ruleCount: 'RuleCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      ruleCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

