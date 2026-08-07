// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProductsResponseBodyDataContentProtectionScoreDistributionRange extends $dara.Model {
  /**
   * @remarks
   * The lower bound of the range (inclusive).
   * 
   * @example
   * 0
   */
  from?: number;
  /**
   * @remarks
   * The upper bound of the range (inclusive).
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
   * The number of resources within the range.
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
   * The number of failed check items.
   * 
   * @example
   * 1
   */
  checkFailedCount?: number;
  /**
   * @remarks
   * The number of resources that failed the check.
   * 
   * @example
   * 1
   */
  checkFailedResourceCount?: number;
  /**
   * @remarks
   * The number of resources for which the check is disabled.
   * 
   * @example
   * 1
   */
  disableCheckResourceCount?: number;
  /**
   * @remarks
   * Indicates whether data protection score assessment is enabled.
   * 
   * @example
   * true
   */
  enableCheck?: boolean;
  /**
   * @remarks
   * The cloud service type, such as ecs or oss.
   * 
   * @example
   * oss
   */
  productType?: string;
  /**
   * @remarks
   * The data protection score (0 to 100).
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
   * The time when the data protection score was last updated (UNIX timestamp).
   * 
   * @example
   * 1726036498
   */
  protectionScoreUpdatedTime?: number;
  /**
   * @remarks
   * The number of check items with risks.
   * 
   * @example
   * 1
   */
  riskCount?: number;
  /**
   * @remarks
   * The number of resources with risks.
   * 
   * @example
   * 1
   */
  riskyResourceCount?: number;
  /**
   * @remarks
   * The total number of resources.
   * 
   * @example
   * 100
   */
  totalResourceCount?: number;
  /**
   * @remarks
   * The number of resources pending check.
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
   * The collection of records returned in this request.
   */
  content?: DescribeProductsResponseBodyDataContent[];
  /**
   * @remarks
   * The maximum number of records returned in this request.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The position from which the current call starts reading. An empty value indicates that all data has been read.
   * 
   * @example
   * b4fd3cffcacafd65e3818a0b9b2ff9a2
   */
  nextToken?: string;
  /**
   * @remarks
   * The total number of records that match the request conditions. This is an optional parameter and may not be returned by default.
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
   * The unique ID of the request.
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

