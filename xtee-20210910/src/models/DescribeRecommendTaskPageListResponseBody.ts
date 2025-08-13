// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRecommendTaskPageListResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Impact indicators
   */
  expectVelocities?: string[];
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 1621578648000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * Number of samples
   * 
   * @example
   * 100
   */
  normalCount?: number;
  /**
   * @remarks
   * Number of normal samples
   * 
   * @example
   * 10
   */
  normalSize?: number;
  /**
   * @remarks
   * Number of records displayed on the current page.
   * 
   * @example
   * 100
   */
  riskCount?: number;
  /**
   * @remarks
   * Number of risk samples
   * 
   * @example
   * 5
   */
  riskSize?: number;
  /**
   * @remarks
   * Sample name
   * 
   * @example
   * 白样本
   */
  sampleName?: string;
  /**
   * @remarks
   * Sample scenario
   * 
   * @example
   * account_abuse_detection
   */
  sampleScene?: string;
  /**
   * @remarks
   * Task ID.
   * 
   * @example
   * 240c93ddffa74e38be3a00375eb3041d
   */
  taskId?: number;
  /**
   * @remarks
   * Task name.
   * 
   * @example
   * 策略推荐任务
   */
  taskName?: string;
  /**
   * @remarks
   * Task status.
   * 
   * @example
   * CREATE
   */
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      expectVelocities: 'expectVelocities',
      gmtCreate: 'gmtCreate',
      normalCount: 'normalCount',
      normalSize: 'normalSize',
      riskCount: 'riskCount',
      riskSize: 'riskSize',
      sampleName: 'sampleName',
      sampleScene: 'sampleScene',
      taskId: 'taskId',
      taskName: 'taskName',
      taskStatus: 'taskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expectVelocities: { 'type': 'array', 'itemType': 'string' },
      gmtCreate: 'number',
      normalCount: 'number',
      normalSize: 'number',
      riskCount: 'number',
      riskSize: 'number',
      sampleName: 'string',
      sampleScene: 'string',
      taskId: 'number',
      taskName: 'string',
      taskStatus: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.expectVelocities)) {
      $dara.Model.validateArray(this.expectVelocities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecommendTaskPageListResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  /**
   * @remarks
   * Current page number
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Page size, with a default value of 10
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Returned object
   */
  resultObject?: DescribeRecommendTaskPageListResponseBodyResultObject[];
  /**
   * @remarks
   * Total number of items
   * 
   * @example
   * 3
   */
  totalItem?: number;
  /**
   * @remarks
   * Total number of pages.
   * 
   * @example
   * 1
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      currentPage: 'currentPage',
      pageSize: 'pageSize',
      resultObject: 'resultObject',
      totalItem: 'totalItem',
      totalPage: 'totalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      currentPage: 'number',
      pageSize: 'number',
      resultObject: { 'type': 'array', 'itemType': DescribeRecommendTaskPageListResponseBodyResultObject },
      totalItem: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resultObject)) {
      $dara.Model.validateArray(this.resultObject);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

