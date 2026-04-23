// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterQueryCostTrendMetricsRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  clientId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1700086400
   */
  endTime?: number;
  /**
   * @example
   * hourly
   */
  granularity?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * LLM,VL
   */
  modelTypes?: string;
  /**
   * @remarks
   * nextToken
   * 
   * @example
   * xxxx-xxx-xxxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1700000000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      clientId: 'clientId',
      endTime: 'endTime',
      granularity: 'granularity',
      maxResults: 'maxResults',
      modelTypes: 'modelTypes',
      nextToken: 'nextToken',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'number',
      endTime: 'number',
      granularity: 'string',
      maxResults: 'number',
      modelTypes: 'string',
      nextToken: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

