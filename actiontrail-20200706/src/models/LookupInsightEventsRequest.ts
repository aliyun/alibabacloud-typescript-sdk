// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LookupInsightEventsRequestLookupAttribute extends $dara.Model {
  /**
   * @remarks
   * The attribute key. For more information about valid values, see [How do I configure the LookupAttribute parameter when calling LookupInsightEvents?](https://help.aliyun.com/document_detail/3011147.html)
   * 
   * @example
   * InsightType
   */
  key?: string;
  /**
   * @remarks
   * The attribute value. For more information about valid values, see [How do I configure the LookupAttribute parameter when calling LookupInsightEvents?](https://help.aliyun.com/document_detail/3011147.html)
   * 
   * @example
   * IpInsight
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LookupInsightEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. The default value is the current time.
   * 
   * Specify the time in the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.
   * 
   * @example
   * 2026-01-07T07:10:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * An array of fliter conditions.
   * 
   * > - You can specify one or two query conditions. For more information, see [Limitations](https://help.aliyun.com/document_detail/3011147.html).
   */
  lookupAttribute?: LookupInsightEventsRequestLookupAttribute[];
  /**
   * @remarks
   * The maximum number of entries to return.
   * 
   * - Valid values: 1 to 50.
   * 
   * - Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * - You do not need to specify this parameter for the first request.
   * 
   * - You must specify the token that is obtained from the previous query as the value of `NextToken`.
   * 
   * @example
   * VjE6dLbnNpVmbz06****
   */
  nextToken?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The default value is seven days before the current time.
   * 
   * Specify the time in the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.
   * 
   * > - The maximum time range that can be queried is 93 days. If the specified time range is longer than 93 days, only events from the last 93 days are returned.
   * 
   * @example
   * 2026-01-07T04:10:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      lookupAttribute: 'LookupAttribute',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      lookupAttribute: { 'type': 'array', 'itemType': LookupInsightEventsRequestLookupAttribute },
      maxResults: 'string',
      nextToken: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.lookupAttribute)) {
      $dara.Model.validateArray(this.lookupAttribute);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

