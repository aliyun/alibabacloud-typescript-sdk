// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlertDestinationsResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  /**
   * @example
   * {}
   */
  data?: any;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * server error
   */
  message?: string;
  /**
   * @example
   * c2f78a783f49457caba6bace6f6f79e4
   */
  nextToken?: string;
  /**
   * @example
   * 2D693121-C925-5154-8DF6-C09A8B369822
   */
  requestId?: string;
  /**
   * @example
   * 623
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      maxResults: 'maxResults',
      message: 'message',
      nextToken: 'nextToken',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'any',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

