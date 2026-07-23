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
  /**
   * @remarks
   * The column name.
   */
  column?: string;
  /**
   * @remarks
   * The operator.
   */
  op?: string;
  /**
   * @remarks
   * A list of values to use with the operator.
   */
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
   * @remarks
   * The logical operator for combining nested filters.
   * 
   * @example
   * AND
   */
  nestedFilterCombination?: string;
  /**
   * @remarks
   * A list of nested filters.
   */
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
   * The values to use with the operator.
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
   * Specifies whether to sort the results in descending order.
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
   * An array of column names to use as dimensions for splitting the dataset.
   */
  breakdowns?: string[];
  /**
   * @remarks
   * The calculations to perform on specified columns.
   */
  calculations?: EventCenterQueryEventsRequestBodyParametersCalculations[];
  /**
   * @remarks
   * The end timestamp for the event query. Unit: milliseconds.
   * 
   * @example
   * 1687861201814
   */
  endTime?: number;
  /**
   * @remarks
   * The logical operator for combining filter conditions.
   * 
   * @example
   * AND
   */
  filterCombination?: string;
  /**
   * @remarks
   * A list of filter conditions.
   */
  filters?: EventCenterQueryEventsRequestBodyParametersFilters[];
  /**
   * @remarks
   * The time granularity, in seconds, for querying time series data. The minimum value is 1. This is a suggested value; the actual granularity is returned in the response.
   * 
   * @example
   * 30
   */
  granularity?: number;
  /**
   * @remarks
   * The maximum number of events to query. Valid values: 1 to 10,000.
   * 
   * @example
   * 100
   */
  limit?: number;
  /**
   * @remarks
   * The starting position of the query. The count starts from 0.
   * 
   * @example
   * 0
   */
  offset?: number;
  /**
   * @remarks
   * The sort order for the query results. This parameter applies only when QueryType is set to table.
   */
  orders?: EventCenterQueryEventsRequestBodyParametersOrders[];
  /**
   * @remarks
   * The start timestamp for the event query. Unit: milliseconds.
   * 
   * @example
   * 1687860901814
   */
  startTime?: number;
  /**
   * @remarks
   * The time range. Unit: milliseconds. The minimum value is 1,000.
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
   * - **timeseries**: queries time series data.
   * 
   * - **table**: queries table data.
   * 
   * - **timeseries_and_table**: queries both time series data and table data.
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
   * The maximum number of results to return. Valid values: 0 to 10,000. The default value is 100.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The token to retrieve the next page of results.
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

