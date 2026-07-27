// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationPerformanceRequest extends $dara.Model {
  /**
   * @remarks
   * The application cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * The user.
   * 
   * @example
   * c-xxxxxxx
   */
  consumer?: string;
  /**
   * @remarks
   * The user group.
   * 
   * @example
   * cg-xxxxxx
   */
  consumerGroup?: string;
  /**
   * @remarks
   * The downsampling policy.
   * 
   * @example
   * raw_sample
   */
  downsample?: string;
  /**
   * @remarks
   * The end step number.
   * 
   * @example
   * 100
   */
  endStep?: number;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the yyyy-MM-ddTHH:mmZ format (UTC).
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-09-23T01:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The data granularity of performance data. Valid values:
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
   * 
   * > **Note** You can specify up to 5 performance metrics.
   * 
   * This parameter is required.
   * 
   * @example
   * PolarDBSupabaseMemUsage
   */
  key?: string;
  /**
   * @remarks
   * The maximum number of data points to return.
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
   * The start step number.
   * 
   * @example
   * 1
   */
  startStep?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the yyyy-MM-ddTHH:mmZ format (UTC).
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
      interval: 'string',
      key: 'string',
      maxPoints: 'number',
      modelService: 'string',
      startStep: 'number',
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

