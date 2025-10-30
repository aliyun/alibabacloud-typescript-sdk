// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAggTaskGroupsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * List of IDs for the aggregation task groups, which must be JSON parseable.
   * 
   * @example
   * ["aggTaskGroup-xxx"]
   */
  filterAggTaskGroupIds?: string;
  /**
   * @remarks
   * List of names for the aggregation task groups, which must be JSON parseable.
   * 
   * @example
   * ["apiserver_request_total"]
   */
  filterAggTaskGroupNames?: string;
  /**
   * @remarks
   * Maximum number of records to return.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * Query token.
   * 
   * @example
   * 28036394xxx
   */
  nextToken?: string;
  /**
   * @remarks
   * Name search, supports fuzzy matching.
   * 
   * @example
   * test
   */
  query?: string;
  /**
   * @remarks
   * Status of the aggregation task group, either \\"Running\\" or \\"Stopped\\". Default is Running.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * Resource group tags.
   */
  tagsShrink?: string;
  /**
   * @remarks
   * The target Prometheus instance ID for the aggregation task group.
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

