// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWafManagedRulesResponseBodyRules extends $dara.Model {
  /**
   * @remarks
   * Protection action of the managed rule.
   * 
   * @example
   * deny
   */
  action?: string;
  /**
   * @remarks
   * ID of the managed rule.
   * 
   * @example
   * 100001
   */
  id?: number;
  /**
   * @remarks
   * Name of the managed rule.
   * 
   * @example
   * SQL injection
   */
  name?: string;
  /**
   * @remarks
   * Protection level of the managed rule.
   * 
   * @example
   * 1
   */
  protectionLevel?: number;
  /**
   * @remarks
   * Protection status of the managed rule.
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

