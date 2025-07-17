// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInsightsEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. The value is a timestamp.
   * 
   * This parameter is required.
   * 
   * @example
   * 1480607940000
   */
  endTime?: string;
  /**
   * @remarks
   * The types of the events that you want to query. Separate multiple event types with commas (,). If you do not specify this parameter, all events are queried.
   * 
   * *   errorIncrease: API error-rate spike events. Examples: HTTP API error-rate spike events and Dubbo API error-rate spike events.
   * *   topErrorIncrease: the top five API error-rate spike events with the highest traffic.
   * *   topRtIncrease: API response-time spike events. Examples: HTTP API response-time spike events and Dubbo API response-time spike events.
   * *   rtIncrease: the top five API response-time spike events with the highest traffic.
   * 
   * @example
   * errorIncrease,topErrorIncrease,topExceptionIncrease,topRtIncrease,rtIncrease
   */
  insightsTypes?: string;
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * aokcdqn3ly@a195c6d6421****
   */
  pid?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The start of the time range to query. The value is a timestamp.
   * 
   * This parameter is required.
   * 
   * @example
   * 1595174400000
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      insightsTypes: 'InsightsTypes',
      pid: 'Pid',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      insightsTypes: 'string',
      pid: 'string',
      regionId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

