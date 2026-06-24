// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLogstashLogRequest extends $dara.Model {
  /**
   * @remarks
   * The beginning of the time range to query logs. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1531910852074
   */
  beginTime?: number;
  /**
   * @remarks
   * The end of the time range to query logs. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1531910852074
   */
  endTime?: number;
  /**
   * @remarks
   * The page number of the instance list. Default value: 1. Minimum value: 1. Maximum value: 200.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The keyword to query.
   * 
   * This parameter is required.
   * 
   * @example
   * host:10.7.xx.xx AND level:info AND content:opening
   */
  query?: string;
  /**
   * @remarks
   * The number of entries per page for a paged query. Default value: 20. Minimum value: 1. Maximum value: 100.
   * 
   * @example
   * 20
   */
  size?: number;
  /**
   * @remarks
   * The log type. Valid values:
   * 
   * - LOGSTASH_INSTANCE_LOG: main log.
   * - SEARCHSLOW: searching slow log.
   * - INDEXINGSLOW: indexing slow log.
   * - JVMLOG: GC log.
   * - LOGSTASH_DEBUG_LOG: debug log.
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

