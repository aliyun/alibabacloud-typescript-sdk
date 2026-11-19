// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayWebsocketEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The connection ID.
   * 
   * @example
   * connection-example
   */
  connectionId?: string;
  /**
   * @remarks
   * The end time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1793919600
   */
  endTime?: number;
  /**
   * @remarks
   * The number of entries per page for cursor-based pagination. If not specified or set to 0, the default value is 50. If the value is greater than 100, it is capped at 100. Negative values are invalid.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The model.
   * 
   * @example
   * qwen-plus
   */
  model?: string;
  /**
   * @remarks
   * The pagination cursor. Do not specify this parameter for the first query. For subsequent pages, use the nextToken value returned in the previous response. The time range and filter conditions must remain unchanged, but you can adjust the maxResults value.
   * 
   * @example
   * opaque-token-from-previous-page
   */
  nextToken?: string;
  /**
   * @remarks
   * The provider.
   * 
   * @example
   * dashscope
   */
  provider?: string;
  /**
   * @remarks
   * The log source.
   * 
   * @example
   * access.log
   */
  source?: string;
  /**
   * @remarks
   * The start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1793916000
   */
  startTime?: number;
  /**
   * @remarks
   * The turn ID.
   * 
   * @example
   * turn-example
   */
  turnId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionId: 'connectionId',
      endTime: 'endTime',
      maxResults: 'maxResults',
      model: 'model',
      nextToken: 'nextToken',
      provider: 'provider',
      source: 'source',
      startTime: 'startTime',
      turnId: 'turnId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionId: 'string',
      endTime: 'number',
      maxResults: 'number',
      model: 'string',
      nextToken: 'string',
      provider: 'string',
      source: 'string',
      startTime: 'number',
      turnId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

