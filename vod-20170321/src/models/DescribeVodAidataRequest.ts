// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodAIDataRequest extends $dara.Model {
  /**
   * @remarks
   * The type of video AI. If you leave this parameter empty, statistics on video AI of all types are returned. Separate multiple types with commas (,). Valid values:
   * 
   * *   **AIVideoCensor**: automated review
   * *   **AIVideoFPShot**: media fingerprinting
   * *   **AIVideoTag**: smart tagging
   * 
   * @example
   * AIVideoCensor
   */
  AIType?: string;
  /**
   * @remarks
   * The end of the time range to query. The end time must be later than the start time. Specify the time in the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-02-01T15:00:00Z
   */
  endTime?: string;
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
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-02-01T13:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      AIType: 'AIType',
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      region: 'Region',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIType: 'string',
      endTime: 'string',
      ownerId: 'number',
      region: 'string',
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

