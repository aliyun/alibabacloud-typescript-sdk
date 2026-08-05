// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveGrtnDurationRequest extends $dara.Model {
  /**
   * @remarks
   * Application ID. You can query multiple application IDs separated by commas (half-width). A maximum of 30 IDs can be queried. By default, aggregated data for all applications is returned.
   * 
   * @example
   * 4346289a-a790-4869-9e23-22766d5e****
   */
  appId?: string;
  /**
   * @remarks
   * The area code. Valid values:
   * - CN: Chinese mainland.
   * - OverSeas: Overseas regions.
   * - AP1: Asia Pacific 1, including Hong Kong (China), Macao (China), Taiwan (China), Japan, and Southeast Asian countries except Vietnam and Indonesia.
   * - AP2: Asia Pacific 2, including Indonesia, South Korea, and Vietnam.
   * - AP3: Asia Pacific 3, including Australia and New Zealand.
   * - NA: North America, including the United States and Canada.
   * - SA: South America, specifically Brazil.
   * - EU: Europe, including Ukraine, the United Kingdom, France, the Netherlands, Spain, Italy, Sweden, and Germany.
   * - MEAA: Middle East and Africa, including South Africa, Oman, the United Arab Emirates, and Kuwait.
   * 
   * If not specified, aggregated data for all areas is returned by default.
   * 
   * @example
   * CN
   */
  area?: string;
  /**
   * @remarks
   * The end time must be later than the start time. The query granularity must be ≥ 5 minutes and ≤ 31 days. The date format follows the ISO 8601 notation and uses UTC time in the format: YYYY-MM-DDThh:mm:ssZ.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-10-10T21:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The time granularity for querying data. Unit: seconds. Valid values:
   * 
   * - 300
   * - 3600
   * - 86400
   * 
   * If not specified or an unsupported value is passed, the default value of 3600 seconds is used.
   * 
   * @example
   * 3600
   */
  interval?: string;
  ownerId?: number;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The start time for data retrieval. The date format follows the ISO 8601 notation and uses UTC time in the format: YYYY-MM-DDThh:mm:ssZ.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-10-10T20:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      area: 'Area',
      endTime: 'EndTime',
      interval: 'Interval',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      area: 'string',
      endTime: 'string',
      interval: 'string',
      ownerId: 'number',
      regionId: 'string',
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

