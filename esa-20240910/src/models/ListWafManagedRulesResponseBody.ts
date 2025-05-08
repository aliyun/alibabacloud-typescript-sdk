// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListWafManagedRulesResponseBodyRules } from "./ListWafManagedRulesResponseBodyRules";


export class ListWafManagedRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  /**
   * @remarks
   * List of managed rules.
   */
  rules?: ListWafManagedRulesResponseBodyRules[];
  /**
   * @remarks
   * Total number of rules after filtering.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      rules: 'Rules',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      rules: { 'type': 'array', 'itemType': ListWafManagedRulesResponseBodyRules },
      totalCount: 'number',
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

