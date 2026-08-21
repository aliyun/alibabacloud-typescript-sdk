// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodAIDataRequest extends $dara.Model {
  /**
   * @remarks
   * The AI type. By default, all types are returned. You can specify multiple types separated by commas (,). Valid values:
   * - **AIVideoCensor**: automated review.
   * - **AIVideoFPShot**: media fingerprint.
   * - **AIVideoTag**: smart tagging.
   * 
   * @example
   * AIVideoCensor
   */
  AIType?: string;
  /**
   * @remarks
   * The end of the time range to query. The end time must be later than the start time. Specify the time in the `yyyy-MM-ddTHH:mm:ssZ` format (UTC).
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
   * The storage region. By default, data in all regions is returned. You can specify multiple regions separated by commas (,). Valid values:
   * - **cn-shanghai**: Shanghai.
   * - **cn-beijing**: Beijing.
   * - **eu-central-1**: Germany.
   * - **ap-southeast-1**: Singapore.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * The start of the time range to query. Specify the time in the `yyyy-MM-ddTHH:mm:ssZ` format (UTC).
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

