// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AiNetworkConfigSearchEngine extends $dara.Model {
  /**
   * @remarks
   * The API key of the search engine.
   * 
   * @example
   * sk-xxx
   */
  apiKey?: string;
  /**
   * @remarks
   * The content mode. This parameter is specific to Quark.
   * 
   * @example
   * summary
   */
  contentMode?: string;
  /**
   * @remarks
   * The number of results returned per search.
   * 
   * @example
   * 5
   */
  count?: number;
  /**
   * @remarks
   * The endpoint of the search engine.
   * 
   * @example
   * https://cloud-iqs.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The industry filter. This parameter is specific to Quark.
   * 
   * @example
   * Internet
   */
  industry?: string;
  /**
   * @remarks
   * The search engine-specific parameters in key-value pair format.
   */
  optionArgs?: { [key: string]: string };
  /**
   * @remarks
   * The offset of the search results.
   * 
   * @example
   * 0
   */
  start?: number;
  /**
   * @remarks
   * The time range filter. This parameter is specific to Quark.
   * 
   * @example
   * 7d
   */
  timeRange?: string;
  /**
   * @remarks
   * The timeout period for the API call, in milliseconds.
   * 
   * @example
   * 5000
   */
  timeoutMillisecond?: number;
  /**
   * @remarks
   * The search engine type.
   * 
   * @example
   * aliyunQuark
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

