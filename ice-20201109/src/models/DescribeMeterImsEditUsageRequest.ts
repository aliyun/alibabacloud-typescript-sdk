// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMeterImsEditUsageRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. The value is a 10-digit timestamp.
   * 
   * This parameter is required.
   * 
   * @example
   * 1656995036
   */
  endTs?: number;
  /**
   * @remarks
   * The time granularity of the query. Valid values: 3600 (hour) and 86400 (day).
   * 
   * This parameter is required.
   * 
   * @example
   * 86400
   */
  interval?: number;
  /**
   * @remarks
   * This parameter does not take effect. By default, the usage data of all regions is returned.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The value is a 10-digit timestamp.
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

