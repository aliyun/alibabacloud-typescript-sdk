// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EventCenterQueryEventsRequestBodyParameters } from "./EventCenterQueryEventsRequestBodyParameters";


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

