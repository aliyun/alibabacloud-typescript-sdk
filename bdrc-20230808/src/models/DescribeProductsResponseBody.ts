// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProductsResponseBodyDataContentProtectionScoreDistributionRange extends $dara.Model {
  /**
   * @remarks
   * The lower bound of the score range, inclusive.
   * 
   * @example
   * 0
   */
  from?: number;
  /**
   * @remarks
   * The upper bound of the score range, inclusive.
   * 
   * @example
   * 60
   */
  to?: number;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      to: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductsResponseBodyDataContentProtectionScoreDistribution extends $dara.Model {
  /**
   * @remarks
   * The count of resources within this score range.
   * 
   * @example
   * 5
   */
  count?: number;
  /**
   * @remarks
   * The score range.
   */
  range?: DescribeProductsResponseBodyDataContentProtectionScoreDistributionRange;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      range: 'Range',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      range: DescribeProductsResponseBodyDataContentProtectionScoreDistributionRange,
    };
  }

  validate() {
    if(this.range && typeof (this.range as any).validate === 'function') {
      (this.range as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductsResponseBodyDataContent extends $dara.Model {
  /**
   * @remarks
   * The count of failed check items.
   * 
   * @example
   * 1
   */
  checkFailedCount?: number;
  /**
   * @remarks
   * The count of resources that failed the check.
   * 
   * @example
   * 1
   */
  checkFailedResourceCount?: number;
  /**
   * @remarks
   * The count of resources for which the check is disabled.
   * 
   * @example
   * 1
   */
  disableCheckResourceCount?: number;
  /**
   * @remarks
   * Indicates whether the data protection score is enabled for the cloud product.
   * 
   * @example
   * true
   */
  enableCheck?: boolean;
  /**
   * @remarks
   * The cloud product type, such as `ECS` and `OSS`.
   * 
   * @example
   * oss
   */
  productType?: string;
  /**
   * @remarks
   * The data protection score, ranging from 0 to 100.
   * 
   * @example
   * 90
   */
  protectionScore?: number;
  /**
   * @remarks
   * The distribution of resources across different score ranges.
   */
  protectionScoreDistribution?: DescribeProductsResponseBodyDataContentProtectionScoreDistribution[];
  /**
   * @remarks
   * The UNIX timestamp of the last data protection score update.
   * 
   * @example
   * 1726036498
   */
  protectionScoreUpdatedTime?: number;
  /**
   * @remarks
   * The count of risky check items.
   * 
   * @example
   * 1
   */
  riskCount?: number;
  /**
   * @remarks
   * The count of risky resources.
   * 
   * @example
   * 1
   */
  riskyResourceCount?: number;
  /**
   * @remarks
   * The total count of resources for the cloud product.
   * 
   * @example
   * 100
   */
  totalResourceCount?: number;
  /**
   * @remarks
   * The count of resources pending a check.
   * 
   * @example
   * 1
   */
  waitForCheckResourceCount?: number;
  static names(): { [key: string]: string } {
    return {
      checkFailedCount: 'CheckFailedCount',
      checkFailedResourceCount: 'CheckFailedResourceCount',
      disableCheckResourceCount: 'DisableCheckResourceCount',
      enableCheck: 'EnableCheck',
      productType: 'ProductType',
      protectionScore: 'ProtectionScore',
      protectionScoreDistribution: 'ProtectionScoreDistribution',
      protectionScoreUpdatedTime: 'ProtectionScoreUpdatedTime',
      riskCount: 'RiskCount',
      riskyResourceCount: 'RiskyResourceCount',
      totalResourceCount: 'TotalResourceCount',
      waitForCheckResourceCount: 'WaitForCheckResourceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkFailedCount: 'number',
      checkFailedResourceCount: 'number',
      disableCheckResourceCount: 'number',
      enableCheck: 'boolean',
      productType: 'string',
      protectionScore: 'number',
      protectionScoreDistribution: { 'type': 'array', 'itemType': DescribeProductsResponseBodyDataContentProtectionScoreDistribution },
      protectionScoreUpdatedTime: 'number',
      riskCount: 'number',
      riskyResourceCount: 'number',
      totalResourceCount: 'number',
      waitForCheckResourceCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.protectionScoreDistribution)) {
      $dara.Model.validateArray(this.protectionScoreDistribution);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * A list of cloud products and their data protection status.
   */
  content?: DescribeProductsResponseBodyDataContent[];
  /**
   * @remarks
   * The maximum number of entries returned per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page of results. If this parameter is absent from the response, all results have been retrieved.
   * 
   * @example
   * b4fd3cffcacafd65e3818a0b9b2ff9a2
   */
  nextToken?: string;
  /**
   * @remarks
   * The total number of entries that match the query. This parameter is not returned by default.
   * 
   * @example
   * 50
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': DescribeProductsResponseBodyDataContent },
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribeProductsResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30FB202A-1D22-5394-AB02-4477CDFCF51F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeProductsResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

