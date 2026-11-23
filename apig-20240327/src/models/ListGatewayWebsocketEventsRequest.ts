// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayWebsocketEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The connection identifier.
   * 
   * @example
   * connection-example
   */
  connectionId?: string;
  /**
   * @remarks
   * The end time. The value is a UNIX timestamp in seconds since the UTC epoch. Example: 1793919600.
   * 
   * This parameter is required.
   * 
   * @example
   * 1793919600
   */
  endTime?: number;
  /**
   * @remarks
   * The maximum number of results per page for cursor-based pagination.
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
   * The pagination token for the next page.
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
   * The start time. The value is a UNIX timestamp in seconds since the UTC epoch. Example: 1793916000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1793916000
   */
  startTime?: number;
  /**
   * @remarks
   * The turn identifier.
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

