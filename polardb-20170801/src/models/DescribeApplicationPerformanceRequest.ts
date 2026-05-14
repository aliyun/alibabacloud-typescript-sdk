// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationPerformanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @example
   * c-xxxxxxx
   */
  consumer?: string;
  /**
   * @example
   * cg-xxxxxx
   */
  consumerGroup?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2020-09-23T01:00Z
   */
  endTime?: string;
  /**
   * @example
   * 5
   */
  interval?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PolarDBSupabaseMemUsage
   */
  key?: string;
  /**
   * @example
   * ms-xxxxxx
   */
  modelService?: string;
  /**
   * @remarks
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

