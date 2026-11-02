// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMeterImsEditUsageRequest extends $dara.Model {
  /**
   * @remarks
   * The end timestamp. The value is a 10-digit UNIX timestamp.
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
   * 86400
   */
  interval?: number;
  /**
   * @remarks
   * This parameter does not take effect. By default, the usage of all regions is returned.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The start timestamp. The value is a 10-digit UNIX timestamp.
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

