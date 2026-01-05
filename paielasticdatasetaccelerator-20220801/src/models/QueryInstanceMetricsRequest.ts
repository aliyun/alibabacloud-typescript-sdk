// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryInstanceMetricsRequest extends $dara.Model {
  /**
   * @example
   * SlotIDs: xxx
   */
  dimensions?: { [key: string]: any };
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
   * StorageUsage
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
      dimensions: 'Dimensions',
      endTime: 'EndTime',
      metricType: 'MetricType',
      startTime: 'StartTime',
      timeStep: 'TimeStep',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      endTime: 'string',
      metricType: 'string',
      startTime: 'string',
      timeStep: 'string',
    };
  }

  validate() {
    if(this.dimensions) {
      $dara.Model.validateMap(this.dimensions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

