// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WebSearchRequest extends $dara.Model {
  /**
   * @example
   * 1754973000000
   */
  endTime?: string;
  excludeDomain?: string[];
  includeDomain?: string[];
  /**
   * @example
   * 100
   */
  limit?: number;
  /**
   * @example
   * {\\"entityFilter\\":{\\"domain\\":\\"synthetics\\",\\"filters\\":[],\\"type\\":\\"synthetics.task\\"},\\"metric\\":\\"availability\\",\\"metricSet\\":\\"synthetics.metric.task\\",\\"type\\":\\"METRIC_SET_QUERY\\"}
   */
  query?: string;
  /**
   * @example
   * cn-hangzhou
   */
  region?: string;
  searchType?: string;
  /**
   * @example
   * 2026-03-06 10:04:45
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      excludeDomain: 'excludeDomain',
      includeDomain: 'includeDomain',
      limit: 'limit',
      query: 'query',
      region: 'region',
      searchType: 'searchType',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      excludeDomain: { 'type': 'array', 'itemType': 'string' },
      includeDomain: { 'type': 'array', 'itemType': 'string' },
      limit: 'number',
      query: 'string',
      region: 'string',
      searchType: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.excludeDomain)) {
      $dara.Model.validateArray(this.excludeDomain);
    }
    if(Array.isArray(this.includeDomain)) {
      $dara.Model.validateArray(this.includeDomain);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

