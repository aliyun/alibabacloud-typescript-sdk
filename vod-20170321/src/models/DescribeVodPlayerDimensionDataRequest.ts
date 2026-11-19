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
   * - Os: Operating system.
   * - AppVersion: App version.
   * - SdkVersion: SDK version.
   * - Codec: Codec.
   * - VideoType: Video format.
   * - Network: Network type.
   * - Isp: ISP.
   * - VideoDefinition: Resolution.
   * - Domain: Domain name.
   * - Country: Country.
   * - Province: Province.
   * - ErrorCode: Error code.
   * - IsHw: Hardware decoding.
   * 
   * This parameter is required.
   * 
   * @example
   * Os
   */
  dimension?: string;
  /**
   * @remarks
   * The end time of the query. Format: yyyy-mm-ddThh:mm:ssZ (UTC).
   * 
   * @example
   * 2025-06-05T15:59:59Z
   */
  endTime?: string;
  /**
   * @remarks
   * The region used to limit the query scope when querying the metadata for the Province and ISP dimensions. Valid values:
   * 
   * - ALL (default): All regions.
   * - CN: China.
   * - OVERSEAS: Outside China.
   * 
   * @example
   * ALL
   */
  region?: string;
  /**
   * @remarks
   * The start time of the query. Format: <i>yyyy-mm-dd</i>T<i>hh:mm:ss</i>Z (UTC).
   * > 
   * > - You can query playback data history for the past year.
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

