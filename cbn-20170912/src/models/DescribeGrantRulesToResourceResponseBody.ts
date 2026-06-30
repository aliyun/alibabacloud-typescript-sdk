// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGrantRulesToResourceResponseBodyGrantRules extends $dara.Model {
  /**
   * @remarks
   * The ID of the Cloud Enterprise Network (CEN) instance.
   * 
   * @example
   * cen-44m0p68spvlrqq****
   */
  cenId?: string;
  /**
   * @remarks
   * The ID of the main account that owns the Cloud Enterprise Network (CEN) instance.
   * 
   * @example
   * 1250123456123456
   */
  cenOwnerId?: number;
  /**
   * @remarks
   * The timestamp when the permission was granted. The value is in UTC and follows the ISO 8601 standard: `YYYY-MM-DDThh:mmZ`.
   * 
   * @example
   * 2024-01-24T16:46Z
   */
  createTime?: string;
  /**
   * @example
   * PayByCenOwner
   */
  effectiveOrderType?: string;
  /**
   * @remarks
   * The payer for the network instance. Valid values:
   * 
   * - **PayByCenOwner**: The CEN instance owner pays the Transit Router connection and data processing fees for the network instance.
   * 
   * - **PayByResourceOwner**: The network instance owner pays the Transit Router connection and data processing fees for the network instance.
   * 
   * @example
   * PayByCenOwner
   */
  orderType?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      cenOwnerId: 'CenOwnerId',
      createTime: 'CreateTime',
      effectiveOrderType: 'EffectiveOrderType',
      orderType: 'OrderType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      cenOwnerId: 'number',
      createTime: 'string',
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

export class DescribeGrantRulesToResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of permission records.
   */
  grantRules?: DescribeGrantRulesToResourceResponseBodyGrantRules[];
  /**
   * @remarks
   * - If the **MaxResults** parameter was not included in the request, this field indicates the total number of entries.
   * 
   * - If the **MaxResults** parameter was included in the request, this field indicates the number of entries on the current page.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * The token to use in your next request to retrieve a new page of results. Valid values:
   * 
   * - If the **NextToken** parameter is empty, no more results are available.
   * 
   * - If a value is returned for **NextToken**, use it for the next request to get the next page of results.
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
   * C6E5992C-A57B-5A6C-9B26-568074DC68BA
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
      grantRules: 'GrantRules',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grantRules: { 'type': 'array', 'itemType': DescribeGrantRulesToResourceResponseBodyGrantRules },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.grantRules)) {
      $dara.Model.validateArray(this.grantRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

