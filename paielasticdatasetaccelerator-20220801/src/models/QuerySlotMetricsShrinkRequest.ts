// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySlotMetricsShrinkRequest extends $dara.Model {
  /**
   * @example
   * SlotIDs: xxx
   */
  dimensionsShrink?: string;
  /**
   * @example
   * 2020-11-08T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * NetworkReceiveBytesPerSecond
   */
  metricType?: string;
  /**
   * @example
   * 2020-11-08T15:00:00Z
   */
  startTime?: string;
  /**
   * @example
   * 5m
   */
  timeStep?: string;
  static names(): { [key: string]: string } {
    return {
      dimensionsShrink: 'Dimensions',
      endTime: 'EndTime',
      metricType: 'MetricType',
      startTime: 'StartTime',
      timeStep: 'TimeStep',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensionsShrink: 'string',
      endTime: 'string',
      metricType: 'string',
      startTime: 'string',
      timeStep: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

