// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserAssetIPTrafficInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The IP address of the asset.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.0.XX.XX
   */
  assetIP?: string;
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The time range to query. The value is a UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1656923760
   */
  trafficTime?: string;
  static names(): { [key: string]: string } {
    return {
      assetIP: 'AssetIP',
      lang: 'Lang',
      trafficTime: 'TrafficTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetIP: 'string',
      lang: 'string',
      trafficTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

