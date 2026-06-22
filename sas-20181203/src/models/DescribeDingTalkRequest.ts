// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDingTalkRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page to display in a paged query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of notifications to display per page in a paged query. Default value: **20**, which indicates that up to 20 entries are displayed per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The notification name.
   * 
   * @example
   * TestRuleAction
   */
  ruleActionName?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      ruleActionName: 'RuleActionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      ruleActionName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

