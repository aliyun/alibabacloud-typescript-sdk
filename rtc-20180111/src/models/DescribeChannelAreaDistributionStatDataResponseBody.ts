// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeChannelAreaDistributionStatDataResponseBodyAreaStatList extends $dara.Model {
  /**
   * @remarks
   * The region name, such as China_Zhejiang Province_Hangzhou.
   * 
   * @example
   * China_Zhejiang Province_Hangzhou
   */
  areaName?: string;
  /**
   * @remarks
   * The number of communicating users.
   * 
   * @example
   * 1
   */
  callUserCount?: number;
  /**
   * @remarks
   * The high-quality transmission rate, represented as a decimal. For example, 0.9999 indicates a high-quality transmission rate of 99.99%.
   * 
   * @example
   * 0.9999
   */
  highQualityTransmissionRate?: string;
  /**
   * @remarks
   * The number of publishers.
   * 
   * @example
   * 1
   */
  pubUserCount?: number;
  /**
   * @remarks
   * The number of subscribers.
   * 
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

export class DescribeChannelAreaDistributionStatDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The regional statistics list.
   */
  areaStatList?: DescribeChannelAreaDistributionStatDataResponseBodyAreaStatList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      areaStatList: 'AreaStatList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areaStatList: { 'type': 'array', 'itemType': DescribeChannelAreaDistributionStatDataResponseBodyAreaStatList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.areaStatList)) {
      $dara.Model.validateArray(this.areaStatList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

