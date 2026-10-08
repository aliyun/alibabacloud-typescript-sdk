// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTaskInfoHistoryRequest extends $dara.Model {
  /**
   * @remarks
   * Start time of the creation date range for the query, expressed as the number of milliseconds since 00:00 UTC on January 1, 1970. Currently supports queries by day only.
   * 
   * @example
   * 1522080000000
   */
  beginCreateTime?: number;
  /**
   * @remarks
   * Cursor for creation date (technical parameter).
   * 
   * @example
   * 1522080000000
   */
  createTimeCursor?: number;
  /**
   * @remarks
   * End time of the creation date range for the query, expressed as the number of milliseconds since 00:00 UTC on January 1, 1970. Currently supports queries by day only.
   * 
   * @example
   * 1522080000000
   */
  endCreateTime?: number;
  /**
   * @remarks
   * Language for API error messages. Valid values:  
   * - **zh**: Chinese  
   * - **en**: English  
   * 
   * Default value is **en**.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * Page size.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  pageSize?: number;
  /**
   * @remarks
   * Job cursor; pass in the job number from the corresponding page cursor during pagination (technical parameter).
   * 
   * @example
   * aa634d3f-927e-4d17-9d2c-test
   */
  taskNoCursor?: string;
  /**
   * @remarks
   * User IP address, which can be set to **127.0.0.1**.
   * 
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      beginCreateTime: 'BeginCreateTime',
      createTimeCursor: 'CreateTimeCursor',
      endCreateTime: 'EndCreateTime',
      lang: 'Lang',
      pageSize: 'PageSize',
      taskNoCursor: 'TaskNoCursor',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginCreateTime: 'number',
      createTimeCursor: 'number',
      endCreateTime: 'number',
      lang: 'string',
      pageSize: 'number',
      taskNoCursor: 'string',
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

