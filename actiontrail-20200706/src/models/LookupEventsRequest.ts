// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LookupEventsRequestLookupAttribute extends $dara.Model {
  /**
   * @remarks
   * The attribute key. For information about valid values, see [How do I configure the LookupAttribute parameter when calling LookupInsightEvents?](https://help.aliyun.com/document_detail/2920829.html)
   * 
   * @example
   * ServiceName
   */
  key?: string;
  /**
   * @remarks
   * The attribute value. For information about valid values, see [How do I configure the LookupAttribute parameter when calling LookupInsightEvents?](https://help.aliyun.com/document_detail/2920829.html)
   * 
   * @example
   * Ecs
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

export class LookupEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The order in which events are retrieved. Valid values:
   * 
   * - FORWARD: Chronological order.
   * 
   * - BACKWARD (default): Reverse chronological order.
   * 
   * @example
   * BACKWARD
   */
  direction?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * > You must specify both `StartTime` and `EndTime`, or leave both unspecified. If you leave them unspecified, the default value of `EndTime` is the current time.
   * 
   * @example
   * 2020-10-15T11:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The filter conditions.
   * 
   * > You can specify one or two filter conditions at a time. For more information, see [Limitations](https://help.aliyun.com/document_detail/2920829.html).
   */
  lookupAttribute?: LookupEventsRequestLookupAttribute[];
  /**
   * @remarks
   * The maximum number of results to return.<br>Valid values: 1 to 50.
   * 
   * @example
   * 20
   */
  maxResults?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * > You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * eyJhY2NvdW50IjoiMTQyNDM3OTU4NjM4NzE2MSIsImV2ZW50SWQiOiI3MkJDRTExRi02OTU3LTQ0NUItQjY0MC1CNEUyMkM4NUEwQzgiLCJsb2dJZCI6IjgyLTE0MjQzNzk1ODYzODcxNjEiLCJ0aW1lIjoxNjAyMzExNTQwMD****
   */
  nextToken?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.
   * 
   * > You must specify both `StartTime` and `EndTime`, or leave both unspecified. If you leave them unspecified, the default value of `StartTime` is 7 days before the current time.
   * 
   * @example
   * 2020-10-08T11:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      endTime: 'EndTime',
      lookupAttribute: 'LookupAttribute',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      endTime: 'string',
      lookupAttribute: { 'type': 'array', 'itemType': LookupEventsRequestLookupAttribute },
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

