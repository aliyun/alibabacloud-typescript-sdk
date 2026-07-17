// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeElasticPlanResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 120123456
   */
  appGroupId?: number;
  /**
   * @example
   * 1590139542
   */
  created?: number;
  customDates?: string[];
  /**
   * @example
   * desc
   */
  description?: string;
  /**
   * @example
   * 100
   */
  elasticLcu?: number;
  /**
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @example
   * 13
   */
  endHour?: number;
  /**
   * @example
   * 11
   */
  id?: number;
  /**
   * @example
   * plan name
   */
  name?: string;
  /**
   * @example
   * WEEK
   */
  scheduleType?: string;
  /**
   * @example
   * 9
   */
  startHour?: number;
  /**
   * @example
   * 1581065904
   */
  updated?: number;
  static names(): { [key: string]: string } {
    return {
      appGroupId: 'appGroupId',
      created: 'created',
      customDates: 'customDates',
      description: 'description',
      elasticLcu: 'elasticLcu',
      enabled: 'enabled',
      endHour: 'endHour',
      id: 'id',
      name: 'name',
      scheduleType: 'scheduleType',
      startHour: 'startHour',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGroupId: 'number',
      created: 'number',
      customDates: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      elasticLcu: 'number',
      enabled: 'boolean',
      endHour: 'number',
      id: 'number',
      name: 'string',
      scheduleType: 'string',
      startHour: 'number',
      updated: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.customDates)) {
      $dara.Model.validateArray(this.customDates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticPlanResponseBody extends $dara.Model {
  /**
   * @example
   * ElasticPlan.NotFound
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @example
   * Elastic plan not found
   */
  message?: string;
  /**
   * @example
   * 0A6EB64B-B4C8-CF02-810F-E660812972FF
   */
  requestId?: string;
  result?: DescribeElasticPlanResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      httpCode: 'httpCode',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpCode: 'number',
      message: 'string',
      requestId: 'string',
      result: DescribeElasticPlanResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

