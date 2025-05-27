// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EventCenterQueryEventsResponseBodyDataTable } from "./EventCenterQueryEventsResponseBodyDataTable";
import { EventCenterQueryEventsResponseBodyDataTimeSeries } from "./EventCenterQueryEventsResponseBodyDataTimeSeries";


export class EventCenterQueryEventsResponseBodyData extends $dara.Model {
  /**
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @example
   * 100
   */
  nextToken?: string;
  table?: EventCenterQueryEventsResponseBodyDataTable[];
  timeSeries?: EventCenterQueryEventsResponseBodyDataTimeSeries[];
  /**
   * @example
   * 76
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      table: 'Table',
      timeSeries: 'TimeSeries',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      table: { 'type': 'array', 'itemType': EventCenterQueryEventsResponseBodyDataTable },
      timeSeries: { 'type': 'array', 'itemType': EventCenterQueryEventsResponseBodyDataTimeSeries },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.table)) {
      $dara.Model.validateArray(this.table);
    }
    if(Array.isArray(this.timeSeries)) {
      $dara.Model.validateArray(this.timeSeries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

