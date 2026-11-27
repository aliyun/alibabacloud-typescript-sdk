// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUsageAreaDistributionStatDataResponseBodyUsageAreaStatList extends $dara.Model {
  /**
   * @remarks
   * Audio call duration, in minutes.
   * 
   * @example
   * 45
   */
  audioCallDuration?: number;
  /**
   * @remarks
   * Region name, such as China.
   * 
   * @example
   * 中国_浙江省
   */
  name?: string;
  /**
   * @remarks
   * Total call duration, in minutes.
   * 
   * @example
   * 4821
   */
  totalCallDuration?: number;
  /**
   * @remarks
   * Video call duration, in minutes.
   * 
   * @example
   * 4776
   */
  videoCallDuration?: number;
  static names(): { [key: string]: string } {
    return {
      audioCallDuration: 'AudioCallDuration',
      name: 'Name',
      totalCallDuration: 'TotalCallDuration',
      videoCallDuration: 'VideoCallDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioCallDuration: 'number',
      name: 'string',
      totalCallDuration: 'number',
      videoCallDuration: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageAreaDistributionStatDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  /**
   * @remarks
   * The regional distribution data of usage statistics.
   */
  usageAreaStatList?: DescribeUsageAreaDistributionStatDataResponseBodyUsageAreaStatList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      usageAreaStatList: 'UsageAreaStatList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      usageAreaStatList: { 'type': 'array', 'itemType': DescribeUsageAreaDistributionStatDataResponseBodyUsageAreaStatList },
    };
  }

  validate() {
    if(Array.isArray(this.usageAreaStatList)) {
      $dara.Model.validateArray(this.usageAreaStatList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

