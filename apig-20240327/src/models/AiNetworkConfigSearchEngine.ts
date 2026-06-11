// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AiNetworkConfigSearchEngine extends $dara.Model {
  /**
   * @remarks
   * Required. The API key to authenticate requests to the search engine service.
   */
  apiKey?: string;
  /**
   * @remarks
   * The search content mode, which determines how the service interprets the query and returns results.
   */
  contentMode?: string;
  /**
   * @remarks
   * The number of search results to return. If this parameter is omitted, the service uses a default value.
   */
  count?: number;
  /**
   * @remarks
   * The endpoint URL for the search engine service.
   */
  endpoint?: string;
  /**
   * @remarks
   * The industry context for tailoring search results to a specific domain.
   */
  industry?: string;
  /**
   * @remarks
   * Optional. A key-value map for service-specific parameters not covered by the standard configuration.
   */
  optionArgs?: { [key: string]: string };
  /**
   * @remarks
   * The starting offset for the search results, used for pagination. For example, a value of 10 skips the first 10 results. The default is 0.
   */
  start?: number;
  /**
   * @remarks
   * The time range for filtering results by their creation or modification date.
   */
  timeRange?: string;
  /**
   * @remarks
   * The request timeout in milliseconds. If a request exceeds this time, the service terminates it.
   */
  timeoutMillisecond?: number;
  /**
   * @remarks
   * Specifies the search engine service to use.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'apiKey',
      contentMode: 'contentMode',
      count: 'count',
      endpoint: 'endpoint',
      industry: 'industry',
      optionArgs: 'optionArgs',
      start: 'start',
      timeRange: 'timeRange',
      timeoutMillisecond: 'timeoutMillisecond',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      contentMode: 'string',
      count: 'number',
      endpoint: 'string',
      industry: 'string',
      optionArgs: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      start: 'number',
      timeRange: 'string',
      timeoutMillisecond: 'number',
      type: 'string',
    };
  }

  validate() {
    if(this.optionArgs) {
      $dara.Model.validateMap(this.optionArgs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

