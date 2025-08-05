// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EventCenterQueryEventsResponseBodyDataTable extends $dara.Model {
  /**
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
   * @example
   * {
   *   "id":"xxx",
   *   "source":"acs.ecs"
   * }
   */
  rowData?: { [key: string]: any };
  /**
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

export class EventCenterQueryEventsResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: EventCenterQueryEventsResponseBodyData;
  /**
   * @example
   * Specified parameter Limit is not valid.
   */
  message?: string;
  /**
   * @example
   * 5DAF96FB-A4B6-548C-B999-XXXXXXXX
   */
  requestId?: string;
  /**
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

