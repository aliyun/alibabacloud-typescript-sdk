// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyElasticPlanResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 120123456
   */
  appGroupId?: number;
  /**
   * @example
   * 1588839490
   */
  created?: number;
  customDates?: string[];
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * 100
   */
  elasticLcu?: number;
  /**
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @example
   * 10
   */
  endHour?: number;
  /**
   * @example
   * 286
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
   * 6
   */
  startHour?: number;
  /**
   * @example
   * 1539158313
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

export class ModifyElasticPlanResponseBody extends $dara.Model {
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
   * D77D0DAF-790D-F5F5-A9C0-133738165014
   */
  requestId?: string;
  result?: ModifyElasticPlanResponseBodyResult;
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
      result: ModifyElasticPlanResponseBodyResult,
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

