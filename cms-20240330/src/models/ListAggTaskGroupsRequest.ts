// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAggTaskGroupsRequestTags extends $dara.Model {
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

export class ListAggTaskGroupsRequest extends $dara.Model {
  /**
   * @example
   * ["aggTaskGroup-xxx"]
   */
  filterAggTaskGroupIds?: string;
  /**
   * @example
   * ["apiserver_request_total"]
   */
  filterAggTaskGroupNames?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * 28036394xxx
   */
  nextToken?: string;
  /**
   * @example
   * test
   */
  query?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  tags?: ListAggTaskGroupsRequestTags[];
  /**
   * @example
   * rw-pq4apob9jm
   */
  targetPrometheusId?: string;
  static names(): { [key: string]: string } {
    return {
      filterAggTaskGroupIds: 'filterAggTaskGroupIds',
      filterAggTaskGroupNames: 'filterAggTaskGroupNames',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      query: 'query',
      status: 'status',
      tags: 'tags',
      targetPrometheusId: 'targetPrometheusId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterAggTaskGroupIds: 'string',
      filterAggTaskGroupNames: 'string',
      maxResults: 'number',
      nextToken: 'string',
      query: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListAggTaskGroupsRequestTags },
      targetPrometheusId: 'string',
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

