// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateElasticPlanResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 100298370
   */
  appGroupId?: string;
  /**
   * @example
   * 1588836130
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
   * True
   */
  enabled?: boolean;
  /**
   * @example
   * 15
   */
  endHour?: number;
  /**
   * @example
   * 89047
   */
  id?: number;
  /**
   * @example
   * name
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
   * 1588839490
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
      appGroupId: 'string',
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

export class CreateElasticPlanResponseBody extends $dara.Model {
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
   * 0FFF39C5-ED93-5234-806D-0824B967E6A3
   */
  requestId?: string;
  result?: CreateElasticPlanResponseBodyResult;
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
      result: CreateElasticPlanResponseBodyResult,
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

