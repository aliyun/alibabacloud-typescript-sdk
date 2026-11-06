// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationPerformanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * The consumer.
   * 
   * @example
   * c-xxxxxxx
   */
  consumer?: string;
  /**
   * @remarks
   * The consumer group.
   * 
   * @example
   * cg-xxxxxx
   */
  consumerGroup?: string;
  /**
   * @remarks
   * The downsampling strategy.
   * 
   * @example
   * raw_sample
   */
  downsample?: string;
  /**
   * @remarks
   * The end step.
   * 
   * @example
   * 100
   */
  endStep?: number;
  /**
   * @remarks
   * The end time of the query. Specify the time in the yyyy-MM-ddTHH:mmZ format (UTC).
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-09-23T01:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The optional filter conditions for performance data, represented as a JSON object. If this parameter is not specified, no filtering is applied based on this condition.
   * 
   * @example
   * {}
   */
  filter?: { [key: string]: any };
  /**
   * @remarks
   * The performance data granularity. Valid values:
   * - 5
   * - 30
   * - 60
   * - 600
   * - 1800
   * - 3600
   * - 86400
   * 
   * @example
   * 5
   */
  interval?: string;
  /**
   * @remarks
   * The performance metrics to query. Separate multiple values with commas (,).
   * Note
   * You can specify up to 5 performance metrics.
   * 
   * This parameter is required.
   * 
   * @example
   * PolarDBSupabaseMemUsage
   */
  key?: string;
  /**
   * @remarks
   * The maximum number of points to return.
   * 
   * @example
   * 1000
   */
  maxPoints?: number;
  /**
   * @remarks
   * The model service.
   * 
   * @example
   * ms-xxxxxx
   */
  modelService?: string;
  /**
   * @remarks
   * The start step.
   * 
   * @example
   * 1
   */
  startStep?: number;
  /**
   * @remarks
   * The start time of the query. Specify the time in the yyyy-MM-ddTHH:mmZ format (UTC).
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-09-23T01:01Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      consumer: 'Consumer',
      consumerGroup: 'ConsumerGroup',
      downsample: 'Downsample',
      endStep: 'EndStep',
      endTime: 'EndTime',
      filter: 'Filter',
      interval: 'Interval',
      key: 'Key',
      maxPoints: 'MaxPoints',
      modelService: 'ModelService',
      startStep: 'StartStep',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      consumer: 'string',
      consumerGroup: 'string',
      downsample: 'string',
      endStep: 'number',
      endTime: 'string',
      filter: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      interval: 'string',
      key: 'string',
      maxPoints: 'number',
      modelService: 'string',
      startStep: 'number',
      startTime: 'string',
    };
  }

  validate() {
    if(this.filter) {
      $dara.Model.validateMap(this.filter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

