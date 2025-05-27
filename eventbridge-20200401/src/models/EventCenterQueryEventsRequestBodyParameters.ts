// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EventCenterQueryEventsRequestBodyParametersCalculations } from "./EventCenterQueryEventsRequestBodyParametersCalculations";
import { EventCenterQueryEventsRequestBodyParametersFilters } from "./EventCenterQueryEventsRequestBodyParametersFilters";
import { EventCenterQueryEventsRequestBodyParametersOrders } from "./EventCenterQueryEventsRequestBodyParametersOrders";


export class EventCenterQueryEventsRequestBodyParameters extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to further split the data set based on the column name.
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
   * The time range during which events are queried. Unit: milliseconds. Minimum value: 1000.
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

