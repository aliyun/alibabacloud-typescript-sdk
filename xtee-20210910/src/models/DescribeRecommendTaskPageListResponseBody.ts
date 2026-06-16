// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRecommendTaskPageListResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The affected metrics.
   */
  expectVelocities?: string[];
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1621578648000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The number of samples.
   * 
   * @example
   * 100
   */
  normalCount?: number;
  /**
   * @remarks
   * The number of normal samples.
   * 
   * @example
   * 10
   */
  normalSize?: number;
  /**
   * @remarks
   * The number of records displayed on the current page.
   * 
   * @example
   * 100
   */
  riskCount?: number;
  /**
   * @remarks
   * The number of risky samples.
   * 
   * @example
   * 5
   */
  riskSize?: number;
  /**
   * @remarks
   * The sample name.
   * 
   * @example
   * 白样本
   */
  sampleName?: string;
  /**
   * @remarks
   * The sample scenario.
   * 
   * @example
   * account_abuse_detection
   */
  sampleScene?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 240c93ddffa74e38be3a00375eb3041d
   */
  taskId?: number;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * 策略推荐任务
   */
  taskName?: string;
  /**
   * @remarks
   * The task status.
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
   * The request ID.
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The returned object.
   */
  resultObject?: DescribeRecommendTaskPageListResponseBodyResultObject[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 3
   */
  totalItem?: number;
  /**
   * @remarks
   * The total number of pages.
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

