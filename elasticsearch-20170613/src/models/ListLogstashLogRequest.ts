// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLogstashLogRequest extends $dara.Model {
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
   * The returned data.
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
   * host:10.7.xx.xx AND level:info AND content:opening
   */
  query?: string;
  /**
   * @remarks
   * The severity level of the log entry. Including trace, debug, info, warn, error, etc. (GC logs have no level).
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
   * LOGSTASH_INSTANCE_LOG
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

