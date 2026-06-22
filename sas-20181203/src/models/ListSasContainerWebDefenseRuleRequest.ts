// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSasContainerWebDefenseRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The conditions for searching assets. This parameter is in JSON format and contains the following fields:
   * - **name**: The search item.
   * - **value**: The value of the search item.
   * - **logicalExp**: The logical relationship among multiple search item values. Valid values:
   *     - **OR**: The search item values are evaluated by using the OR operator.
   *     - **AND**: The search item values are evaluated by using the AND operator.
   * 
   * @example
   * [{\\"name\\":\\"ruleName\\",\\"value\\":\\"test-1818\\",\\"logicalExp\\":\\"AND\\"}]
   */
  criteria?: string;
  /**
   * @remarks
   * The page number of the current page in a paged query. Minimum value: 1. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The logical relationship among multiple search conditions. Valid values:
   * 
   * - **OR**: The search conditions are evaluated by using the OR operator.
   * - **AND**: The search conditions are evaluated by using the AND operator.
   * 
   * @example
   * OR
   */
  logicalExp?: string;
  /**
   * @remarks
   * The number of entries per page in a paged query. Default value: **20**, which indicates that 20 entries are displayed per page.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      criteria: 'Criteria',
      currentPage: 'CurrentPage',
      logicalExp: 'LogicalExp',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      criteria: 'string',
      currentPage: 'number',
      logicalExp: 'string',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

