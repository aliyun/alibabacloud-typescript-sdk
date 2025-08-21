// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPushRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 333526247
   */
  appKey?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2021-09-29T06:24:58Z
   */
  endTime?: string;
  keyword?: string;
  /**
   * @example
   * FFPpkmhCPm*****************xjk=
   */
  nextToken?: string;
  /**
   * @example
   * 8
   */
  page?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * NOTICE
   */
  pushType?: string;
  /**
   * @example
   * API
   */
  source?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2021-09-15T02:05:24Z
   */
  startTime?: string;
  /**
   * @example
   * DEVICE
   */
  target?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      endTime: 'EndTime',
      keyword: 'Keyword',
      nextToken: 'NextToken',
      page: 'Page',
      pageSize: 'PageSize',
      pushType: 'PushType',
      source: 'Source',
      startTime: 'StartTime',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      endTime: 'string',
      keyword: 'string',
      nextToken: 'string',
      page: 'number',
      pageSize: 'number',
      pushType: 'string',
      source: 'string',
      startTime: 'string',
      target: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

