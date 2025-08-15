// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LookupEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The end of the time range when event details were queried.
   * 
   * @example
   * 2020-07-22T14:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The returned event details.
   * 
   * For more information about the fields in an event log, see [ActionTrail event log reference](https://help.aliyun.com/document_detail/28819.html).
   */
  events?: { [key: string]: any }[];
  /**
   * @remarks
   * The token used to return the next page of query results.
   * 
   * > This parameter is not returned if no more results are to be returned.
   * 
   * @example
   * eyJhY2NvdW50IjoiMTQyNDM3OTU4NjM4NzE2MSIsImV2ZW50SWQiOiI3MkJDRTExRi02OTU3LTQ0NUItQjY0MC1CNEUyMkM4NUEwQzgiLCJsb2dJZCI6IjgyLTE0MjQzNzk1ODYzODcxNjEiLCJ0aW1lIjoxNjAyMzExNTQwMD****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * FD79665A-CE8B-49D4-82E6-5EE2E0E791DD
   */
  requestId?: string;
  /**
   * @remarks
   * The beginning of the time range when event details were queried.
   * 
   * @example
   * 2020-07-15T14:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      events: 'Events',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      events: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      nextToken: 'string',
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.events)) {
      $dara.Model.validateArray(this.events);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

