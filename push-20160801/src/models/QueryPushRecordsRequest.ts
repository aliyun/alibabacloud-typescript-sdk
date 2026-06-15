// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPushRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The AppKey of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * 333526247
   */
  appKey?: number;
  /**
   * @remarks
   * The end time for the query. Specify the time in UTC, using the ISO-8601 format `YYYY-MM-DDThh:mm:ssZ`.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-09-29T06:24:58Z
   */
  endTime?: string;
  /**
   * @remarks
   * The keyword used for the query. The search covers the `MessageId`, `Title`, and `Body` fields. For `Title` and `Body`, the system applies Chinese word segmentation and matches whole tokens instead of substrings.
   * 
   * @example
   * 统计数据测试通知805
   */
  keyword?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * FFPpkmhCPm*****************xjk=
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number to query. Default: 1. Maximum: 10,000.
   * 
   * @example
   * 8
   */
  page?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default: 20. Maximum: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The push type. Valid values:
   * 
   * - **MESSAGE**: A message.
   * 
   * - **NOTICE**: A notification.
   * 
   * - **LIVE_ACTIVITY**: A Live Activity.
   * 
   * @example
   * NOTICE
   */
  pushType?: string;
  /**
   * @remarks
   * The push source. Valid values:
   * 
   * - **API**: Pushes initiated via an OpenAPI call.
   * 
   * - **CONSOLE**: Pushes initiated from the Mobile Push console.
   * 
   * - **OpenAPIExplorer**: Pushes initiated from Alibaba Cloud OpenAPI Explorer.
   * 
   * @example
   * API
   */
  source?: string;
  /**
   * @remarks
   * The start time for the query. Specify the time in UTC, using the ISO-8601 format `YYYY-MM-DDThh:mm:ssZ`.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-09-15T02:05:24Z
   */
  startTime?: string;
  /**
   * @remarks
   * The push target. Valid values:
   * 
   * - **DEVICE**: Push to devices.
   * 
   * - **ACCOUNT**: Push to accounts.
   * 
   * - **ALIAS**: Push to aliases.
   * 
   * - **TAG**: Push to tags.
   * 
   * - **ALL**: Push to all devices.
   * 
   * - **TBD**: Initializes a continuous push. The push target is specified in a subsequent call to the `ContinuouslyPush` API operation.
   * 
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

