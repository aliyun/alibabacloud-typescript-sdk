// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGrantRulesToCenResponseBodyGrantRulesGrantRule extends $dara.Model {
  /**
   * @remarks
   * The ID of the CEN instance.
   * 
   * @example
   * cen-nye53d7p3hzyu4****
   */
  cenId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the CEN instance belongs.
   * 
   * @example
   * 1210123456123456
   */
  cenOwnerId?: number;
  /**
   * @remarks
   * The ID of the network instance.
   * 
   * @example
   * vpc-bp1rgeww9mdstuuar****
   */
  childInstanceId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the network instance belongs.
   * 
   * @example
   * 1250123456123456
   */
  childInstanceOwnerId?: number;
  /**
   * @remarks
   * The region ID of the network instance.
   * 
   * @example
   * cn-hangzhou
   */
  childInstanceRegionId?: string;
  /**
   * @remarks
   * The type of the network instance. Valid values:
   * 
   * *   **VPC**: VPC
   * *   **VBR**: VBR
   * *   **CCN**: CCN instance
   * *   **VPN**: IPsec-VPN connection
   * 
   * @example
   * VPC
   */
  childInstanceType?: string;
  /**
   * @remarks
   * The time when the permissions were granted to the CEN instance.
   * 
   * The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2024-01-24T16:27Z
   */
  createTime?: number;
  /**
   * @remarks
   * The entity that pays the fees of the network instance. Valid values:
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
      childInstanceId: 'ChildInstanceId',
      childInstanceOwnerId: 'ChildInstanceOwnerId',
      childInstanceRegionId: 'ChildInstanceRegionId',
      childInstanceType: 'ChildInstanceType',
      createTime: 'CreateTime',
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
  /**
   * @remarks
   * The permissions that are granted to the CEN instance.
   */
  grantRules?: DescribeGrantRulesToCenResponseBodyGrantRules;
  /**
   * @remarks
   * *   If no value is specified for **MaxResults**, query results are returned in one batch. The value of **MaxResults** indicates the total number of entries.
   * *   If a value is specified for **MaxResults**, it indicates that you need to query results in batches. The value of **MaxResults** in the response indicates the number of entries in the current batch.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The returned value of NextToken is a pagination token, which can be used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If **NextToken** is empty, no next page exists.
   * *   If a value of **NextToken** was returned in the previous query, specify the value to obtain the next set of results.
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

