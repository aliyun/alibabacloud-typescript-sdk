// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BroadcastTemplate } from "./BroadcastTemplate";


export class ListBroadcastTemplatesResponseBody extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  data?: BroadcastTemplate[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  maxResults?: number;
  /**
   * @example
   * SUCCESS
   */
  message?: string;
  nextToken?: string;
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 7239F9E5-A4DB-55BA-B701-0CE47DBDB0A8
   */
  requestId?: string;
  /**
   * @example
   * 20
   */
  size?: number;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      maxResults: 'maxResults',
      message: 'message',
      nextToken: 'nextToken',
      page: 'page',
      requestId: 'requestId',
      size: 'size',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': BroadcastTemplate },
      httpStatusCode: 'number',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      page: 'number',
      requestId: 'string',
      size: 'number',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

