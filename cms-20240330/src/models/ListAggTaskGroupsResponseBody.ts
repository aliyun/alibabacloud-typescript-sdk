// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAggTaskGroupsResponseBodyAggTaskGroupsTags extends $dara.Model {
  /**
   * @example
   * key1
   */
  key?: string;
  /**
   * @example
   * value1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggTaskGroupsResponseBodyAggTaskGroups extends $dara.Model {
  /**
   * @example
   * a54136014xxx
   */
  aggTaskGroupConfigHash?: string;
  /**
   * @example
   * aggTaskGroup-xxxx
   */
  aggTaskGroupId?: string;
  /**
   * @example
   * pipeline-aggtask-group
   */
  aggTaskGroupName?: string;
  /**
   * @example
   * 0 10 8 1 * ? *
   */
  cronExpr?: string;
  /**
   * @example
   * 30
   */
  delay?: number;
  /**
   * @example
   * workspace api monitor update test
   */
  description?: string;
  /**
   * @example
   * 1757409499000
   */
  fromTime?: number;
  /**
   * @example
   * 2025-04-24 00:00:00,2025-04-24 00:00:00
   */
  interval?: string;
  /**
   * @example
   * 2
   */
  maxRetries?: number;
  /**
   * @example
   * 200
   */
  maxRunTimeInSeconds?: number;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * FixedRate
   */
  scheduleMode?: string;
  /**
   * @example
   * @m
   */
  scheduleTimeExpr?: string;
  /**
   * @example
   * rw-xxx
   */
  sourcePrometheusId?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  tags?: ListAggTaskGroupsResponseBodyAggTaskGroupsTags[];
  /**
   * @example
   * rw-xxx
   */
  targetPrometheusId?: string;
  /**
   * @example
   * 0
   */
  toTime?: number;
  /**
   * @example
   * 1757409499000
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      aggTaskGroupConfigHash: 'aggTaskGroupConfigHash',
      aggTaskGroupId: 'aggTaskGroupId',
      aggTaskGroupName: 'aggTaskGroupName',
      cronExpr: 'cronExpr',
      delay: 'delay',
      description: 'description',
      fromTime: 'fromTime',
      interval: 'interval',
      maxRetries: 'maxRetries',
      maxRunTimeInSeconds: 'maxRunTimeInSeconds',
      regionId: 'regionId',
      scheduleMode: 'scheduleMode',
      scheduleTimeExpr: 'scheduleTimeExpr',
      sourcePrometheusId: 'sourcePrometheusId',
      status: 'status',
      tags: 'tags',
      targetPrometheusId: 'targetPrometheusId',
      toTime: 'toTime',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggTaskGroupConfigHash: 'string',
      aggTaskGroupId: 'string',
      aggTaskGroupName: 'string',
      cronExpr: 'string',
      delay: 'number',
      description: 'string',
      fromTime: 'number',
      interval: 'string',
      maxRetries: 'number',
      maxRunTimeInSeconds: 'number',
      regionId: 'string',
      scheduleMode: 'string',
      scheduleTimeExpr: 'string',
      sourcePrometheusId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListAggTaskGroupsResponseBodyAggTaskGroupsTags },
      targetPrometheusId: 'string',
      toTime: 'number',
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggTaskGroupsResponseBody extends $dara.Model {
  aggTaskGroups?: ListAggTaskGroupsResponseBodyAggTaskGroups[];
  /**
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @example
   * aa9d0e569b880xxx
   */
  nextToken?: string;
  /**
   * @example
   * 7BF1F4D6-B9A8-5F0B-8C1D-4347FFCB798E
   */
  requestId?: string;
  /**
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      aggTaskGroups: 'aggTaskGroups',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggTaskGroups: { 'type': 'array', 'itemType': ListAggTaskGroupsResponseBodyAggTaskGroups },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.aggTaskGroups)) {
      $dara.Model.validateArray(this.aggTaskGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

