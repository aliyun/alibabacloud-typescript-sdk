// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LookupEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The end of the time range of the retrieved events.
   * 
   * @example
   * 2020-07-22T14:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The list of retrieved events.
   */
  events?: { [key: string]: any }[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * > If NextToken is empty, no next page exists.
   * 
   * @example
   * eyJhY2NvdW50IjoiMTQyNDM3OTU4NjM4NzE2MSIsImV2ZW50SWQiOiI3MkJDRTExRi02OTU3LTQ0NUItQjY0MC1CNEUyMkM4NUEwQzgiLCJsb2dJZCI6IjgyLTE0MjQzNzk1ODYzODcxNjEiLCJ0aW1lIjoxNjAyMzExNTQwMD****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FD79665A-CE8B-49D4-82E6-5EE2E0E7****
   */
  requestId?: string;
  /**
   * @remarks
   * The start of the time range of the retrieved events.
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

