// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodEditingUsageDataRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. For more information, see [Multi-application](https://help.aliyun.com/document_detail/113600.html).
   * 
   * @example
   * app-****
   */
  appId?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mmZ format. The time must be in UTC.
   * 
   * @example
   * 2024-11-07T16:00:00Z
   */
  endTime?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region. By default, data from all regions is returned. You can specify multiple regions separated by commas (,).
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * The output specification.
   * 
   * @example
   * H264.SD
   */
  specification?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mmZ format. The time must be in UTC.
   * 
   * If you leave this parameter empty, data from the last 24 hours is queried by default.
   * 
   * @example
   * 2024-11-06T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      region: 'Region',
      specification: 'Specification',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endTime: 'string',
      ownerId: 'number',
      region: 'string',
      specification: 'string',
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

