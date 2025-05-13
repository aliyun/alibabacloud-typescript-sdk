// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CapacityPlanRequestDataInfo } from "./CapacityPlanRequestDataInfo";
import { CapacityPlanRequestMetric } from "./CapacityPlanRequestMetric";


export class CapacityPlanRequest extends $dara.Model {
  /**
   * @remarks
   * Indicates whether there is a need for complex aggregation queries. Options:
   * 
   * - true: Yes
   * - false (default): No
   * 
   * @example
   * true
   */
  complexQueryAvailable?: boolean;
  /**
   * @remarks
   * Disk usage status.
   */
  dataInfo?: CapacityPlanRequestDataInfo[];
  /**
   * @remarks
   * Metrics information including disk usage, search and write operations, aggregation requests, etc.
   */
  metric?: CapacityPlanRequestMetric[];
  /**
   * @remarks
   * Usage scenarios, options:
   * 
   * - general: General scenario
   * - analysisVisualization: Data analysis scenario
   * - dbAcceleration: Database acceleration scenario
   * - search: Search scenario
   * - log: Log scenario
   * 
   * @example
   * general
   */
  usageScenario?: string;
  static names(): { [key: string]: string } {
    return {
      complexQueryAvailable: 'complexQueryAvailable',
      dataInfo: 'dataInfo',
      metric: 'metric',
      usageScenario: 'usageScenario',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complexQueryAvailable: 'boolean',
      dataInfo: { 'type': 'array', 'itemType': CapacityPlanRequestDataInfo },
      metric: { 'type': 'array', 'itemType': CapacityPlanRequestMetric },
      usageScenario: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataInfo)) {
      $dara.Model.validateArray(this.dataInfo);
    }
    if(Array.isArray(this.metric)) {
      $dara.Model.validateArray(this.metric);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

