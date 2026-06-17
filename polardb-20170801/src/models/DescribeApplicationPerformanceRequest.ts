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
   * The ID of the consumer.
   * 
   * @example
   * c-xxxxxxx
   */
  consumer?: string;
  /**
   * @remarks
   * The ID of the consumer group.
   * 
   * @example
   * cg-xxxxxx
   */
  consumerGroup?: string;
  /**
   * @remarks
   * The end time for the query. Specify the time in UTC in the `yyyy-MM-ddTHH:mmZ` format.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-09-23T01:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The granularity of the performance data, in seconds. Valid values:
   * 
   * - 5
   * 
   * - 30
   * 
   * - 60
   * 
   * - 600
   * 
   * - 1800
   * 
   * - 3600
   * 
   * - 86400
   * 
   * @example
   * 5
   */
  interval?: string;
  /**
   * @remarks
   * The performance metrics to query. Separate multiple metrics with commas (,).<br>You can specify up to five performance metrics.<br>
   * 
   * This parameter is required.
   * 
   * @example
   * PolarDBSupabaseMemUsage
   */
  key?: string;
  /**
   * @remarks
   * The ID of the model service.
   * 
   * @example
   * ms-xxxxxx
   */
  modelService?: string;
  /**
   * @remarks
   * The start time for the query. Specify the time in UTC in the `yyyy-MM-ddTHH:mmZ` format.
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
      endTime: 'EndTime',
      interval: 'Interval',
      key: 'Key',
      modelService: 'ModelService',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      consumer: 'string',
      consumerGroup: 'string',
      endTime: 'string',
      interval: 'string',
      key: 'string',
      modelService: 'string',
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

