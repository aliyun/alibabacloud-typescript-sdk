// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSearchLogRequest extends $dara.Model {
  /**
   * @remarks
   * The start timestamp of the log, in milliseconds. The value must be within the last 7 days. If this parameter is not specified, all logs within the [current time - 7 days, endTime\\] range are queried.
   * 
   * @example
   * 1531910852074
   */
  beginTime?: number;
  /**
   * @remarks
   * The end timestamp of the log, in milliseconds. The value must be within the last 7 days. Specify this parameter. If this parameter is not specified, an empty result is returned.
   * 
   * @example
   * 1531910852074
   */
  endTime?: number;
  /**
   * @remarks
   * The page number of the plug-in list. Minimum value: 1. Default value: 1.
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
   * host:``172.16.**.**`` AND content:netty
   */
  query?: string;
  /**
   * @remarks
   * The number of entries per page for a paged query. Default value: 20. Minimum value: 1. Maximum value: 50.
   * 
   * @example
   * 20
   */
  size?: number;
  /**
   * @remarks
   * The log type. Valid values:
   * - INSTANCELOG: primary log.
   * - SEARCHSLOW: searching slow log.
   * - INDEXINGSLOW: indexing slow log.
   * - JVMLOG: GC log.
   * - ES_SEARCH_ACCESS_LOG: Elasticsearch access log.
   * - AUDIT: audit log.
   * 
   * For limits on viewing logs, see [Query logs](https://help.aliyun.com/document_detail/72026.html).
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

