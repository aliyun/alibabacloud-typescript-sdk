// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAegisContainerPluginRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The query conditions. The format is as follows:
   * ```json
   * [
   *   {
   *     "name": "ruleName",
   *     "value": "test"
   *   }
   * ]
   * ```
   * **- name**: The condition name. The following conditions are supported:
   * - **ruleName**: The rule name.
   * 
   * **- value**: The condition value.
   * 
   * @example
   * [{\\"name\\": \\"name\\", \\"value\\": \\"test-1818\\"}]
   */
  criteria?: string;
  /**
   * @remarks
   * The page number of the current page in a paginated query.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Specifies the language type for the request and response messages. Default value: **zh**. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries to return on each page in a paginated query.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The rule type. Valid values:
   * - **0**: User-defined.
   * - **1**: System built-in.
   * 
   * @example
   * 0
   */
  ruleType?: number;
  static names(): { [key: string]: string } {
    return {
      criteria: 'Criteria',
      currentPage: 'CurrentPage',
      lang: 'Lang',
      pageSize: 'PageSize',
      ruleType: 'RuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      criteria: 'string',
      currentPage: 'number',
      lang: 'string',
      pageSize: 'number',
      ruleType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

