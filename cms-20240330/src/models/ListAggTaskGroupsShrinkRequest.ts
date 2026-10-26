// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAggTaskGroupsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of IDs of the aggregation task groups. The value must be in JSON format.
   * 
   * @example
   * ["aggTaskGroup-xxx"]
   */
  filterAggTaskGroupIds?: string;
  /**
   * @remarks
   * The list of names of the aggregation task groups. The value must be in JSON format.
   * 
   * @example
   * ["apiserver_request_total"]
   */
  filterAggTaskGroupNames?: string;
  /**
   * @remarks
   * The maximum number of records to return.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The query token.
   * 
   * @example
   * 28036394xxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The search keyword for names. Fuzzy match is supported.
   * 
   * @example
   * test
   */
  query?: string;
  /**
   * @remarks
   * The status of the aggregation task group. Valid values: Running and Stopped. Default value: Running.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The tags of the resource group.
   */
  tagsShrink?: string;
  /**
   * @remarks
   * The instance ID of the target Prometheus instance for the aggregation node group.
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
      tagsShrink: 'tags',
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
      tagsShrink: 'string',
      targetPrometheusId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

