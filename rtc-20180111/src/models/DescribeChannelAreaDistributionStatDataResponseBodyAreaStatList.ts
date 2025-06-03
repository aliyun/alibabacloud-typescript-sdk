// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeChannelAreaDistributionStatDataResponseBodyAreaStatList extends $dara.Model {
  /**
   * @example
   * 浙江省
   */
  areaName?: string;
  /**
   * @example
   * 1
   */
  callUserCount?: number;
  /**
   * @example
   * 0.9999
   */
  highQualityTransmissionRate?: string;
  /**
   * @example
   * 1
   */
  pubUserCount?: number;
  /**
   * @example
   * 1
   */
  subUserCount?: number;
  static names(): { [key: string]: string } {
    return {
      areaName: 'AreaName',
      callUserCount: 'CallUserCount',
      highQualityTransmissionRate: 'HighQualityTransmissionRate',
      pubUserCount: 'PubUserCount',
      subUserCount: 'SubUserCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areaName: 'string',
      callUserCount: 'number',
      highQualityTransmissionRate: 'string',
      pubUserCount: 'number',
      subUserCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

