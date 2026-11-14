// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PublicWarmPoolConfig } from "./PublicWarmPoolConfig";


export class ListWarmPoolsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business code in the response.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The actual maximum number of results returned per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The pagination token. An empty value indicates that no more results are available.
   * 
   * @example
   * example-token
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 01234567-89AB-CDEF-0123-456789ABCDEF
   */
  requestId?: string;
  /**
   * @remarks
   * The list of warm pools.
   */
  warmPools?: PublicWarmPoolConfig[];
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      maxResults: 'maxResults',
      message: 'message',
      nextToken: 'nextToken',
      requestId: 'requestId',
      warmPools: 'warmPools',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      warmPools: { 'type': 'array', 'itemType': PublicWarmPoolConfig },
    };
  }

  validate() {
    if(Array.isArray(this.warmPools)) {
      $dara.Model.validateArray(this.warmPools);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

