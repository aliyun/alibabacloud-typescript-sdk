// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EventCenterQueryEventsResponseBodyDataTable extends $dara.Model {
  /**
   * @remarks
   * A query result entry, represented as a key-value pair.
   * 
   * @example
   * {
   *   "id":"xxx",
   *   "source":"acs.ecs"
   * }
   */
  rowData?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      rowData: 'RowData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rowData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.rowData) {
      $dara.Model.validateMap(this.rowData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EventCenterQueryEventsResponseBodyDataTimeSeries extends $dara.Model {
  /**
   * @remarks
   * A query result entry, represented as a key-value pair.
   * 
   * @example
   * {
   *   "id":"xxx",
   *   "source":"acs.ecs"
   * }
   */
  rowData?: { [key: string]: any };
  /**
   * @remarks
   * The timestamp.
   * 
   * @example
   * 1683561600000
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      rowData: 'RowData',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rowData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      time: 'string',
    };
  }

  validate() {
    if(this.rowData) {
      $dara.Model.validateMap(this.rowData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EventCenterQueryEventsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries to return.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used to retrieve the next page of results. If this parameter is empty, all results have been returned.
   * 
   * @example
   * 100
   */
  nextToken?: string;
  /**
   * @remarks
   * The query results for the `table` query type.
   */
  table?: EventCenterQueryEventsResponseBodyDataTable[];
  /**
   * @remarks
   * The query results for the `time series` query type.
   */
  timeSeries?: EventCenterQueryEventsResponseBodyDataTimeSeries[];
  /**
   * @remarks
   * The total number of entries that meet the filter conditions. This parameter is optional and is not returned by default.
   * 
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

export class EventCenterQueryEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status of the API call, which can be Success or a POP error code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: EventCenterQueryEventsResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Specified parameter Limit is not valid.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5DAF96FB-A4B6-548C-B999-XXXXXXXX
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. `true` indicates success, and `false` indicates failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: EventCenterQueryEventsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

