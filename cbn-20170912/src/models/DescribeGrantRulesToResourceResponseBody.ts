// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGrantRulesToResourceResponseBodyGrantRules extends $dara.Model {
  /**
   * @remarks
   * The ID of the CEN instance.
   * 
   * @example
   * cen-44m0p68spvlrqq****
   */
  cenId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the CEN instance belongs.
   * 
   * @example
   * 1250123456123456
   */
  cenOwnerId?: number;
  /**
   * @remarks
   * The timestamp when the permissions were granted. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2024-01-24T16:46Z
   */
  createTime?: string;
  /**
   * @remarks
   * The entity that pays the fees of the network instance. Valid values: Valid values:
   * 
   * *   **PayByCenOwner**: The fees of the connections and data forwarding on the transit router are paid by the Alibaba Cloud account to which the CEN instance belongs.
   * *   **PayByResourceOwner**: The fees of the connections and data forwarding on the transit router are paid by the Alibaba Cloud account to which the network instance belongs.
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
      orderType: 'OrderType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      cenOwnerId: 'number',
      createTime: 'string',
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
   * The permissions that are granted to the CEN instance.
   */
  grantRules?: DescribeGrantRulesToResourceResponseBodyGrantRules[];
  /**
   * @remarks
   * *   If no value is specified for **MaxResults**, query results are returned in one batch. The value of **MaxResults** indicates the total number of entries.
   * *   If a value is specified for **MaxResults**, query results are returned in batches. The value of **MaxResults** in the response indicates the number of entries in the current batch.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * The returned value of NextToken is a pagination token, which can be used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If the **NextToken** parameter is empty, no next page exists.
   * *   If a value is returned for **NextToken**, the value is the token that determines the start point of the next query.
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

