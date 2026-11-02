// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMeterImsMpsAiUsageRequest extends $dara.Model {
  /**
   * @remarks
   * The end timestamp, which is a 10-digit UNIX timestamp. The maximum query interval is 31 days, which means the interval between this parameter and StartTs cannot exceed 31 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 1656995036
   */
  endTs?: number;
  /**
   * @remarks
   * The time granularity. Valid values:
   * - 3600: hourly granularity.
   * - 86400: daily granularity.
   * 
   * This parameter is required.
   * 
   * @example
   * 86400
   */
  interval?: number;
  /**
   * @remarks
   * The region. This parameter does not take effect. By default, the usage across all regions is returned.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The start timestamp, which is a 10-digit UNIX timestamp. Data from up to 90 days ago can be queried.
   * 
   * This parameter is required.
   * 
   * @example
   * 1654403036
   */
  startTs?: number;
  static names(): { [key: string]: string } {
    return {
      endTs: 'EndTs',
      interval: 'Interval',
      region: 'Region',
      startTs: 'StartTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTs: 'number',
      interval: 'number',
      region: 'string',
      startTs: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

