// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSasContainerWebDefenseRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The search conditions for assets. The value of this parameter is in the JSON format and contains the following fields:
   * 
   * *   **name**: the name of the search condition.
   * 
   * *   **value**: the value of the search condition.
   * 
   * *   **logicalExp**: the logical relation for multiple search conditions. Valid values:
   * 
   *     *   **OR**: The search conditions use a logical **OR**.
   *     *   **AND**: The search conditions use a logical **AND**.
   * 
   * @example
   * [{\\"name\\":\\"ruleName\\",\\"value\\":\\"test-1818\\",\\"logicalExp\\":\\"AND\\"}]
   */
  criteria?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The logical relation for multiple search conditions. Valid values:
   * 
   * *   **OR**: The search conditions use a logical **OR**.
   * *   **AND**: The search conditions use a logical **AND**.
   * 
   * @example
   * OR
   */
  logicalExp?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: **20**.
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

