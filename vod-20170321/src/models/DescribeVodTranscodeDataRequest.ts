// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodTranscodeDataRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application. You can specify this parameter to query the transcoding statistics of a specific application. By default, the transcoding statistics of all applications is returned. You can obtain the application ID from the `AppId` parameter in the response to the [CreateAppInfo](~~CreateAppInfo~~) operation.
   * 
   * @example
   * app-1000001
   */
  appId?: string;
  /**
   * @remarks
   * The end of the time range to query. The end time must be later than the start time. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-02-01T15:59:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The interval at which you want to query data. Valid values:
   * 
   * *   **day**: days
   * *   **hour**: hours
   * 
   * @example
   * day
   */
  interval?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region in which you want to query data. If you leave this parameter empty, data in all regions is returned. Separate multiple regions with commas (,). Valid values:
   * 
   * *   **cn-shanghai**: China (Shanghai)
   * *   **cn-beijing**: China (Beijing)
   * *   **eu-central-1**: Germany (Frankfurt)
   * *   **ap-southeast-1**: Singapore
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The transcoding specification. If you leave this parameter empty, data of all transcoding specifications is returned. Separate multiple transcoding specifications with commas (,). Valid values:
   * 
   * *   **Audio**: audio transcoding
   * *   **Segmentation**: container format conversion
   * *   **H264.LD**, **H264.SD**, **H264.HD**, **H264.2K**, **H264.4K**, and more
   * 
   * @example
   * Audio
   */
  specification?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-02-01T15:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The name of the Object Storage Service (OSS) bucket. If you leave this parameter empty, data of all buckets is returned. Separate multiple bucket names with commas (,).
   * 
   * @example
   * bucket01
   */
  storage?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endTime: 'EndTime',
      interval: 'Interval',
      ownerId: 'OwnerId',
      region: 'Region',
      specification: 'Specification',
      startTime: 'StartTime',
      storage: 'Storage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endTime: 'string',
      interval: 'string',
      ownerId: 'number',
      region: 'string',
      specification: 'string',
      startTime: 'string',
      storage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

