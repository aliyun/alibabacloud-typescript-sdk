// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTaskListRequest extends $dara.Model {
  /**
   * @remarks
   * Start time of the creation date range for the query, expressed as the number of milliseconds since 00:00 on January 1, 1970, UTC. Currently, queries are supported only by day.
   * 
   * @example
   * 1522080000000
   */
  beginCreateTime?: number;
  /**
   * @remarks
   * End time of the creation date range for the query, expressed as the number of milliseconds since 00:00 on January 1, 1970, UTC. Currently, queries are supported only by day.
   * 
   * @example
   * 1522080000000
   */
  endCreateTime?: number;
  /**
   * @remarks
   * Language for API error messages. Valid values:  
   * - **zh**: Chinese.  
   * - **en**: English.  
   * 
   * Default value: **en**.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * Page number for paging.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * Page size for paging.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  pageSize?: number;
  /**
   * @remarks
   * User IP address.
   * 
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      beginCreateTime: 'BeginCreateTime',
      endCreateTime: 'EndCreateTime',
      lang: 'Lang',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginCreateTime: 'number',
      endCreateTime: 'number',
      lang: 'string',
      pageNum: 'number',
      pageSize: 'number',
      userClientIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

