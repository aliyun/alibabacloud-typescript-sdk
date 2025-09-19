// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCheckRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the check item.
   * 
   * > You can call the [ListCheckResult](~~ListCheckResult~~) API to get the check item ID.
   * 
   * @example
   * 58
   */
  checkId?: number;
  /**
   * @remarks
   * The name of the check item.
   * 
   * @example
   * checkName
   */
  checkName?: string;
  /**
   * @remarks
   * The page number displayed in a paginated query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Set the language type for the request and response messages. The default is **zh**. Values:
   * 
   * - zh: Chinese
   * - en: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The number of check items displayed per page in a paginated query. The default value is **20**, indicating 20 check items per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The type of rule. Default is **WHITE**. Values:
   * - **WHITE**: Add to whitelist
   * 
   * @example
   * WHITE
   */
  ruleType?: string;
  /**
   * @remarks
   * The scope where the rule applies. Values:
   * - **INSTNACE**: Instance
   * - **ITEM**: Check item
   * 
   * @example
   * INSTANCE
   */
  scopeType?: string;
  taskSources?: string[];
  static names(): { [key: string]: string } {
    return {
      checkId: 'CheckId',
      checkName: 'CheckName',
      currentPage: 'CurrentPage',
      lang: 'Lang',
      pageSize: 'PageSize',
      ruleType: 'RuleType',
      scopeType: 'ScopeType',
      taskSources: 'TaskSources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkId: 'number',
      checkName: 'string',
      currentPage: 'number',
      lang: 'string',
      pageSize: 'number',
      ruleType: 'string',
      scopeType: 'string',
      taskSources: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.taskSources)) {
      $dara.Model.validateArray(this.taskSources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

