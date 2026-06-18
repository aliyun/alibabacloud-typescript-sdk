// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWafManagedRulesResponseBodyRules extends $dara.Model {
  /**
   * @remarks
   * The managed rule\\"s action.
   * 
   * @example
   * deny
   */
  action?: string;
  /**
   * @remarks
   * The managed rule ID.
   * 
   * @example
   * 100001
   */
  id?: number;
  /**
   * @remarks
   * The managed rule name.
   * 
   * @example
   * SQL injection
   */
  name?: string;
  /**
   * @remarks
   * The managed rule\\"s protection level.
   * 
   * @example
   * 1
   */
  protectionLevel?: number;
  /**
   * @remarks
   * The managed rule\\"s status.
   * 
   * @example
   * on
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      id: 'Id',
      name: 'Name',
      protectionLevel: 'ProtectionLevel',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      id: 'number',
      name: 'string',
      protectionLevel: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWafManagedRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  /**
   * @remarks
   * An array of managed rules.
   */
  rules?: ListWafManagedRulesResponseBodyRules[];
  /**
   * @remarks
   * The total number of rules after filtering.
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

