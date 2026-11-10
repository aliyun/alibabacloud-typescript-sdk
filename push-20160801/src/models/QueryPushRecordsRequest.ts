// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPushRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The AppKey information.
   * 
   * This parameter is required.
   * 
   * @example
   * 333526247
   */
  appKey?: number;
  /**
   * @remarks
   * The end time of the query. The time is in UTC and follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-09-29T06:24:58Z
   */
  endTime?: string;
  /**
   * @remarks
   * The query keyword. The query is performed based on the MessageId, Title, and Body fields. The system performs Chinese word segmentation on the title and body of the push, and uses the segmented words for the query instead of substring matching.
   * 
   * @example
   * Statistics data test notification 805
   */
  keyword?: string;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated and no longer used.
   * 
   * @example
   * FFPpkmhCPm*****************xjk=
   */
  nextToken?: string;
  /**
   * @remarks
   * The current page number of the push records. Default value: 1. Maximum value: 10000.
   * 
   * @example
   * 8
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The push type. Valid values:
   * 
   * - **MESSAGE**: message
   * 
   * - **NOTICE**: notification
   * 
   * - **LIVE_ACTIVITY**: live activity
   * 
   * @example
   * NOTICE
   */
  pushType?: string;
  /**
   * @remarks
   * The push source. Valid values:
   * 
   * - **API**: push initiated by OpenAPI, including pushes initiated from the OpenAPI platform console
   * - **CONSOLE**: push initiated from the Mobile Push console
   * - **OpenAPIExplorer**: push initiated from the Alibaba Cloud OpenAPI Explorer platform
   * 
   * @example
   * API
   */
  source?: string;
  /**
   * @remarks
   * The start time of the query. The time is in UTC and follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format.
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
   * - **DEVICE**: push by device
   * 
   * - **ACCOUNT**: push by account
   * 
   * - **ALIAS**: push by alias
   * 
   * - **TAG**: push by tag
   * 
   * - **ALL**: push to all devices
   * 
   * - **TBD**: initialize continuous push, where the push target is specified by the subsequent ContinuouslyPush operation
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

