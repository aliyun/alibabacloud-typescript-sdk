// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListElasticPlansResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 120123456
   */
  appGroupId?: string;
  /**
   * @example
   * 1588839490
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
   * 16
   */
  endHour?: number;
  /**
   * @example
   * 134
   */
  id?: number;
  /**
   * @example
   * elastic plan
   */
  name?: string;
  /**
   * @example
   * WEEK
   */
  scheduleType?: string;
  /**
   * @example
   * 11
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

export class ListElasticPlansResponseBody extends $dara.Model {
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
   * 100
   */
  maxResults?: number;
  /**
   * @example
   * Elastic plan not found
   */
  message?: string;
  /**
   * @example
   * 20
   */
  nextToken?: string;
  /**
   * @example
   * D77D0DAF-790D-F5F5-A9C0-133738165014
   */
  requestId?: string;
  result?: ListElasticPlansResponseBodyResult[];
  /**
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      httpCode: 'httpCode',
      maxResults: 'maxResults',
      message: 'message',
      nextToken: 'nextToken',
      requestId: 'requestId',
      result: 'result',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpCode: 'number',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListElasticPlansResponseBodyResult },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

