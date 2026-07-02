// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNetworkRulesResponseBodyNetworkRulesNetworkRule extends $dara.Model {
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkRulesResponseBodyNetworkRules extends $dara.Model {
  networkRule?: ListNetworkRulesResponseBodyNetworkRulesNetworkRule[];
  static names(): { [key: string]: string } {
    return {
      networkRule: 'NetworkRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkRule: { 'type': 'array', 'itemType': ListNetworkRulesResponseBodyNetworkRulesNetworkRule },
    };
  }

  validate() {
    if(Array.isArray(this.networkRule)) {
      $dara.Model.validateArray(this.networkRule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkRulesResponseBody extends $dara.Model {
  networkRules?: ListNetworkRulesResponseBodyNetworkRules;
  /**
   * @remarks
   * The page number.
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3bf02f7a-015b-4f34-be0f-cc043fda2d33
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      networkRules: 'NetworkRules',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkRules: ListNetworkRulesResponseBodyNetworkRules,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.networkRules && typeof (this.networkRules as any).validate === 'function') {
      (this.networkRules as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

