// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGrantRulesToCenResponseBodyGrantRulesGrantRule extends $dara.Model {
  cenId?: string;
  cenOwnerId?: number;
  childInstanceId?: string;
  childInstanceOwnerId?: number;
  childInstanceRegionId?: string;
  childInstanceType?: string;
  createTime?: number;
  /**
   * @example
   * PayByCenOwner
   */
  effectiveOrderType?: string;
  /**
   * @example
   * PayByCenOwner
   */
  orderType?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      cenOwnerId: 'CenOwnerId',
      childInstanceId: 'ChildInstanceId',
      childInstanceOwnerId: 'ChildInstanceOwnerId',
      childInstanceRegionId: 'ChildInstanceRegionId',
      childInstanceType: 'ChildInstanceType',
      createTime: 'CreateTime',
      effectiveOrderType: 'EffectiveOrderType',
      orderType: 'OrderType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      cenOwnerId: 'number',
      childInstanceId: 'string',
      childInstanceOwnerId: 'number',
      childInstanceRegionId: 'string',
      childInstanceType: 'string',
      createTime: 'number',
      effectiveOrderType: 'string',
      orderType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGrantRulesToCenResponseBodyGrantRules extends $dara.Model {
  grantRule?: DescribeGrantRulesToCenResponseBodyGrantRulesGrantRule[];
  static names(): { [key: string]: string } {
    return {
      grantRule: 'GrantRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grantRule: { 'type': 'array', 'itemType': DescribeGrantRulesToCenResponseBodyGrantRulesGrantRule },
    };
  }

  validate() {
    if(Array.isArray(this.grantRule)) {
      $dara.Model.validateArray(this.grantRule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGrantRulesToCenResponseBody extends $dara.Model {
  grantRules?: DescribeGrantRulesToCenResponseBodyGrantRules;
  /**
   * @remarks
   * - The maximum number of entries to return per page.
   * 
   * - This value is the same as the **MaxResults** value that you specified in the request.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * - If the **NextToken** parameter is empty, no more results are available.
   * 
   * - To retrieve the next page, set the NextToken request parameter to this value.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4906B209-8613-5C19-9CC9-B7A3FFDA731C
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      grantRules: 'GrantRules',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grantRules: DescribeGrantRulesToCenResponseBodyGrantRules,
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.grantRules && typeof (this.grantRules as any).validate === 'function') {
      (this.grantRules as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

