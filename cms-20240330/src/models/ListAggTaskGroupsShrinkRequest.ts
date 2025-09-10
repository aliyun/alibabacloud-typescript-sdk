// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAggTaskGroupsShrinkRequest extends $dara.Model {
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
  tagsShrink?: string;
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

