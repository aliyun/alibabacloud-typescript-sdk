// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EventCenterQueryEventsRequestBodyParametersCalculations extends $dara.Model {
  /**
   * @remarks
   * The column name.
   * 
   * @example
   * source
   */
  column?: string;
  /**
   * @remarks
   * The operator.
   * 
   * @example
   * COUNT_DISTINCT
   */
  op?: string;
  static names(): { [key: string]: string } {
    return {
      column: 'Column',
      op: 'Op',
    };
  }

  static types(): { [key: string]: any } {
    return {
      column: 'string',
      op: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EventCenterQueryEventsRequestBodyParametersFiltersNestedFilters extends $dara.Model {
  column?: string;
  op?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      column: 'Column',
      op: 'Op',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      column: 'string',
      op: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EventCenterQueryEventsRequestBodyParametersFilters extends $dara.Model {
  /**
   * @remarks
   * The column name.
   * 
   * @example
   * source
   */
  column?: string;
  /**
   * @example
   * AND
   */
  nestedFilterCombination?: string;
  nestedFilters?: EventCenterQueryEventsRequestBodyParametersFiltersNestedFilters[];
  /**
   * @remarks
   * The operator.
   * 
   * @example
   * =
   */
  op?: string;
  /**
   * @remarks
   * The values that are used together with the operator.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      column: 'Column',
      nestedFilterCombination: 'NestedFilterCombination',
      nestedFilters: 'NestedFilters',
      op: 'Op',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      column: 'string',
      nestedFilterCombination: 'string',
      nestedFilters: { 'type': 'array', 'itemType': EventCenterQueryEventsRequestBodyParametersFiltersNestedFilters },
      op: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.nestedFilters)) {
      $dara.Model.validateArray(this.nestedFilters);
    }
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EventCenterQueryEventsRequestBodyParametersOrders extends $dara.Model {
  /**
   * @remarks
   * The column name.
   * 
   * @example
   * source
   */
  column?: string;
  /**
   * @remarks
   * Specifies whether to sort the query results in descending order.
   * 
   * @example
   * true
   */
  desc?: boolean;
  /**
   * @remarks
   * The operator.
   * 
   * @example
   * AVG
   */
  op?: string;
  static names(): { [key: string]: string } {
    return {
      column: 'Column',
      desc: 'Desc',
      op: 'Op',
    };
  }

  static types(): { [key: string]: any } {
    return {
      column: 'string',
      desc: 'boolean',
      op: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EventCenterQueryEventsRequestBodyParameters extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to further split the dataset based on the column name.
   */
  breakdowns?: string[];
  /**
   * @remarks
   * The operator that is used to calculate the specified column.
   */
  calculations?: EventCenterQueryEventsRequestBodyParametersCalculations[];
  /**
   * @remarks
   * The timestamp that specifies the end of the time range to query. Unit: milliseconds.
   * 
   * @example
   * 1687861201814
   */
  endTime?: number;
  /**
   * @remarks
   * The logic used to filter the combination of conditions.
   * 
   * @example
   * AND
   */
  filterCombination?: string;
  /**
   * @remarks
   * The filter conditions.
   */
  filters?: EventCenterQueryEventsRequestBodyParametersFilters[];
  /**
   * @remarks
   * The minimum time unit for querying time series data. Minimum value: 1. Unit: seconds. The value of this parameter is a recommended value. The actual value returned shall prevail.
   * 
   * @example
   * 30
   */
  granularity?: number;
  /**
   * @remarks
   * The maximum number of events to query. Valid values: 1 to 10000.
   * 
   * @example
   * 100
   */
  limit?: number;
  /**
   * @remarks
   * The offset of the start position for this query. The offset starts from 0.
   * 
   * @example
   * 0
   */
  offset?: number;
  /**
   * @remarks
   * The order of the query results. This parameter is valid only if you set QueryType to table.
   */
  orders?: EventCenterQueryEventsRequestBodyParametersOrders[];
  /**
   * @remarks
   * The timestamp that specifies the beginning of the time range to query. Unit: milliseconds.
   * 
   * @example
   * 1687860901814
   */
  startTime?: number;
  /**
   * @remarks
   * The time range during which events are queried. Minimum value: 1000. Unit: milliseconds.
   * 
   * @example
   * 1000000
   */
  timeRange?: number;
  static names(): { [key: string]: string } {
    return {
      breakdowns: 'Breakdowns',
      calculations: 'Calculations',
      endTime: 'EndTime',
      filterCombination: 'FilterCombination',
      filters: 'Filters',
      granularity: 'Granularity',
      limit: 'Limit',
      offset: 'Offset',
      orders: 'Orders',
      startTime: 'StartTime',
      timeRange: 'TimeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      breakdowns: { 'type': 'array', 'itemType': 'string' },
      calculations: { 'type': 'array', 'itemType': EventCenterQueryEventsRequestBodyParametersCalculations },
      endTime: 'number',
      filterCombination: 'string',
      filters: { 'type': 'array', 'itemType': EventCenterQueryEventsRequestBodyParametersFilters },
      granularity: 'number',
      limit: 'number',
      offset: 'number',
      orders: { 'type': 'array', 'itemType': EventCenterQueryEventsRequestBodyParametersOrders },
      startTime: 'number',
      timeRange: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.breakdowns)) {
      $dara.Model.validateArray(this.breakdowns);
    }
    if(Array.isArray(this.calculations)) {
      $dara.Model.validateArray(this.calculations);
    }
    if(Array.isArray(this.filters)) {
      $dara.Model.validateArray(this.filters);
    }
    if(Array.isArray(this.orders)) {
      $dara.Model.validateArray(this.orders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EventCenterQueryEventsRequestBody extends $dara.Model {
  /**
   * @remarks
   * The query parameters.
   * 
   * This parameter is required.
   */
  parameters?: EventCenterQueryEventsRequestBodyParameters;
  /**
   * @remarks
   * The query type. Valid values:
   * 
   * *   **timeseries**: queries time series data.
   * *   **table**: queries table data.
   * *   **timeseries_and_table**: queries time series data and table data at the same time.
   * 
   * This parameter is required.
   * 
   * @example
   * timeseries_and_table
   */
  queryType?: string;
  /**
   * @remarks
   * The schema ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs:GeneralSchema
   */
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      parameters: 'Parameters',
      queryType: 'QueryType',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameters: EventCenterQueryEventsRequestBodyParameters,
      queryType: 'string',
      schemaId: 'string',
    };
  }

  validate() {
    if(this.parameters && typeof (this.parameters as any).validate === 'function') {
      (this.parameters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EventCenterQueryEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The request body.
   * 
   * This parameter is required.
   */
  body?: EventCenterQueryEventsRequestBody;
  /**
   * @remarks
   * The name of the event bus.
   * 
   * @example
   * default
   */
  busName?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: 0 to 10000. Default value: 100.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * 用来标记当前开始读取的位置。置空表示从头开始。
   * 
   * @example
   * 100
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      busName: 'BusName',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: EventCenterQueryEventsRequestBody,
      busName: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

