// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAggTaskGroupsRequestTags extends $dara.Model {
  /**
   * @remarks
   * The key of the resource group tag.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The value of the resource group tag.
   * 
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
   * @remarks
   * A list of aggregation task group IDs. The value must be a string that can be parsed as a JSON array.
   * 
   * @example
   * ["aggTaskGroup-xxx"]
   */
  filterAggTaskGroupIds?: string;
  /**
   * @remarks
   * A list of aggregation task group names. The value must be a string that can be parsed as a JSON array.
   * 
   * @example
   * ["apiserver_request_total"]
   */
  filterAggTaskGroupNames?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
   * 
   * @example
   * 28036394xxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The name to search for. Fuzzy search is supported.
   * 
   * @example
   * test
   */
  query?: string;
  /**
   * @remarks
   * The status of the aggregation task group. Valid values are \\`Running\\` and \\`Stopped\\`. The default value is \\`Running\\`.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The tags of the resource group.
   */
  tags?: ListAggTaskGroupsRequestTags[];
  /**
   * @remarks
   * The ID of the target Prometheus instance for the aggregation task group.
   * 
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

