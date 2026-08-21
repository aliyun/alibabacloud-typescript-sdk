// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodTranscodeDataRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. If you specify this parameter, transcoding usage data for the specified application is returned. By default, transcoding usage data for all applications is returned. You can obtain the value of this parameter from the AppId response parameter of the [CreateAppInfo](~~CreateAppInfo~~) operation.
   * 
   * @example
   * app-1000001
   */
  appId?: string;
  /**
   * @remarks
   * The end of the time range to query. The end time must be later than the start time. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-02-01T15:59:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The time granularity. Valid values:
   * 
   * - **day**: day.
   * - **hour**: hour.
   * 
   * @example
   * day
   */
  interval?: string;
  ownerId?: number;
  /**
   * @remarks
   * The storage region. By default, data for all regions is returned. You can specify multiple regions separated by commas (,). Valid values:
   * - **cn-shanghai**: Shanghai.
   * - **cn-beijing**: Beijing.
   * - **eu-central-1**: Germany.
   * - **ap-southeast-1**: Singapore.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The transcoding specification. By default, data for all transcoding specifications is returned. You can specify multiple specifications separated by commas (,). Valid values:
   * - **Audio**: audio-only.
   * - **Segmentation**: container format conversion.
   * - **H264.LD**, **H264.SD**, **H264.HD**, **H264.2K**, **H264.4K**, and more.
   * 
   * @example
   * Audio
   */
  specification?: string;
  /**
   * @remarks
   * The start of the time range to query. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-02-01T15:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The storage name (Alibaba Cloud OSS bucket name). By default, data for all storage locations is returned. You can specify multiple storage names separated by commas (,).
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

