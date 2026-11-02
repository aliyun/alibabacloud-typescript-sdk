// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMeterImsMediaConvertUHDUsageRequest extends $dara.Model {
  /**
   * @remarks
   * The end timestamp, which is a 10-digit UNIX timestamp.
   * 
   * This parameter is required.
   * 
   * @example
   * 1656995036
   */
  endTs?: number;
  /**
   * @remarks
   * The time granularity of the query. Valid values:
   * - 3600: hourly
   * - 86400: daily
   * 
   * This parameter is required.
   * 
   * @example
   * 3600
   */
  interval?: string;
  /**
   * @remarks
   * This parameter does not take effect. By default, the usage data for all regions is returned.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The start timestamp, which is a 10-digit UNIX timestamp.
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
      regionId: 'RegionId',
      startTs: 'StartTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTs: 'number',
      interval: 'string',
      regionId: 'string',
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

