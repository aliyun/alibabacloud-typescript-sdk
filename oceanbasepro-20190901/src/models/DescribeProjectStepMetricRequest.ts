// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProjectStepMetricRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * AVG
   */
  aggregator?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1689244696
   */
  beginTimestamp?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1689254646
   */
  endTimestamp?: number;
  /**
   * @example
   * 6
   */
  maxPointNum?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * RPS
   */
  metricType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * np_dr****
   */
  projectId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FULL_TRANSFER
   */
  stepName?: string;
  static names(): { [key: string]: string } {
    return {
      aggregator: 'Aggregator',
      beginTimestamp: 'BeginTimestamp',
      endTimestamp: 'EndTimestamp',
      maxPointNum: 'MaxPointNum',
      metricType: 'MetricType',
      projectId: 'ProjectId',
      stepName: 'StepName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregator: 'string',
      beginTimestamp: 'number',
      endTimestamp: 'number',
      maxPointNum: 'number',
      metricType: 'string',
      projectId: 'string',
      stepName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

