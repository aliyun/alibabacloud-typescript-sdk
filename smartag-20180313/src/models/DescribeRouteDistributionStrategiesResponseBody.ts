// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRouteDistributionStrategiesResponseBodyStrategiesStrategy extends $dara.Model {
  conflictInfo?: string;
  createTime?: number;
  destCidrBlock?: string;
  hcInstanceId?: string;
  isConflict?: boolean;
  routeDistribution?: string;
  routeSource?: string;
  smartAGId?: string;
  sourceType?: string;
  status?: string;
  strategyPublishStatus?: string;
  static names(): { [key: string]: string } {
    return {
      conflictInfo: 'ConflictInfo',
      createTime: 'CreateTime',
      destCidrBlock: 'DestCidrBlock',
      hcInstanceId: 'HcInstanceId',
      isConflict: 'IsConflict',
      routeDistribution: 'RouteDistribution',
      routeSource: 'RouteSource',
      smartAGId: 'SmartAGId',
      sourceType: 'SourceType',
      status: 'Status',
      strategyPublishStatus: 'StrategyPublishStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conflictInfo: 'string',
      createTime: 'number',
      destCidrBlock: 'string',
      hcInstanceId: 'string',
      isConflict: 'boolean',
      routeDistribution: 'string',
      routeSource: 'string',
      smartAGId: 'string',
      sourceType: 'string',
      status: 'string',
      strategyPublishStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteDistributionStrategiesResponseBodyStrategies extends $dara.Model {
  strategy?: DescribeRouteDistributionStrategiesResponseBodyStrategiesStrategy[];
  static names(): { [key: string]: string } {
    return {
      strategy: 'Strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      strategy: { 'type': 'array', 'itemType': DescribeRouteDistributionStrategiesResponseBodyStrategiesStrategy },
    };
  }

  validate() {
    if(Array.isArray(this.strategy)) {
      $dara.Model.validateArray(this.strategy);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteDistributionStrategiesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 944C2533-1BB7-4578-B6EB-DA05BB61C02A
   */
  requestId?: string;
  strategies?: DescribeRouteDistributionStrategiesResponseBodyStrategies;
  /**
   * @remarks
   * The total number of routes.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      strategies: 'Strategies',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      strategies: DescribeRouteDistributionStrategiesResponseBodyStrategies,
      totalCount: 'number',
    };
  }

  validate() {
    if(this.strategies && typeof (this.strategies as any).validate === 'function') {
      (this.strategies as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

