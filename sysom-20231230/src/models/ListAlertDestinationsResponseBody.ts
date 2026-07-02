// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlertDestinationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code
   * - `code == Success` indicates that the authorization was successful;
   * - Other status codes indicate authorization failure. When authorization fails, check the `message` field for detailed error information;
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Response data.
   * 
   * @example
   * {}
   */
  data?: any;
  /**
   * @remarks
   * Maximum number of records to retrieve at a time.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * Error message
   * - If `code == Success`, this field is empty;
   * - Otherwise, this field contains the request error information.
   * 
   * @example
   * server error
   */
  message?: string;
  /**
   * @remarks
   * Pagination token for the next request.
   * 
   * @example
   * c2f78a783f49457caba6bace6f6f79e4
   */
  nextToken?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 2D693121-C925-5154-8DF6-C09A8B369822
   */
  requestId?: string;
  /**
   * @remarks
   * Maximum number of records returned by this request
   * 
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

