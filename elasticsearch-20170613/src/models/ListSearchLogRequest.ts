// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSearchLogRequest extends $dara.Model {
  /**
   * @remarks
   * 20
   * 
   * @example
   * 1531910852074
   */
  beginTime?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1531910852074
   */
  endTime?: number;
  /**
   * @remarks
   * The header of the response.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * 1
   * 
   * This parameter is required.
   * 
   * @example
   * host:``172.16.**.**`` AND content:netty
   */
  query?: string;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  size?: number;
  /**
   * @remarks
   * 1531910852074
   * 
   * This parameter is required.
   * 
   * @example
   * INSTANCELOG
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'beginTime',
      endTime: 'endTime',
      page: 'page',
      query: 'query',
      size: 'size',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      endTime: 'number',
      page: 'number',
      query: 'string',
      size: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

