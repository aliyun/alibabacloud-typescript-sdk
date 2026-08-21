// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodPlayerDimensionDataRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * app-1000000
   */
  appId?: string;
  /**
   * @remarks
   * The dimension type. Valid values:
   * 
   * - Os: operating system.
   * - AppVersion: application version.
   * - SdkVersion: SDK version.
   * - Codec: codec.
   * - VideoType: video format.
   * - Network: network type.
   * - Isp: Internet service provider.
   * - VideoDefinition: resolution.
   * - Domain: domain name.
   * - Country: country.
   * - Province: province.
   * - ErrorCode: error code.
   * - IsHw: whether hardware decoding is used.
   * 
   * This parameter is required.
   * 
   * @example
   * Os
   */
  dimension?: string;
  /**
   * @remarks
   * The end time of the query. Specify the time in the yyyy-mm-ddthh:mm:ssz format (UTC).
   * 
   * @example
   * 2025-06-05T15:59:59Z
   */
  endTime?: string;
  /**
   * @remarks
   * The region filter used when querying the Province or Isp dimension metadata. Valid values:
   * 
   * - ALL (default): all regions.
   * - CN: China.
   * - OVERSEAS: outside China.
   * 
   * @example
   * ALL
   */
  region?: string;
  /**
   * @remarks
   * The start time of the query. Specify the time in the <i>yyyy-mm-dd</i>t<i>hh:mm:ss</i>z format (UTC).
   * > 
   * > - Playback data from the last year is supported.
   * > - The time range for a single query cannot exceed 31 days.
   * > - The time interval is left-closed and right-open [StartTime, EndTime).
   * 
   * @example
   * 2025-06-24T00:55:06Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      dimension: 'Dimension',
      endTime: 'EndTime',
      region: 'Region',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      dimension: 'string',
      endTime: 'string',
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

