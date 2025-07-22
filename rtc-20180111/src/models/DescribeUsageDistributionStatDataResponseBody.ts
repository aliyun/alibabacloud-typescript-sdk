// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUsageDistributionStatDataResponseBodyUsageStatList extends $dara.Model {
  /**
   * @example
   * 51
   */
  audioCallDuration?: number;
  /**
   * @example
   * 0.9782
   */
  callDurationRatio?: string;
  /**
   * @example
   * ONE_TO_FIVE
   */
  name?: string;
  /**
   * @example
   * 10636
   */
  totalCallDuration?: number;
  /**
   * @example
   * 10585
   */
  videoCallDuration?: number;
  static names(): { [key: string]: string } {
    return {
      audioCallDuration: 'AudioCallDuration',
      callDurationRatio: 'CallDurationRatio',
      name: 'Name',
      totalCallDuration: 'TotalCallDuration',
      videoCallDuration: 'VideoCallDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioCallDuration: 'number',
      callDurationRatio: 'string',
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

export class DescribeUsageDistributionStatDataResponseBody extends $dara.Model {
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  usageStatList?: DescribeUsageDistributionStatDataResponseBodyUsageStatList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      usageStatList: 'UsageStatList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      usageStatList: { 'type': 'array', 'itemType': DescribeUsageDistributionStatDataResponseBodyUsageStatList },
    };
  }

  validate() {
    if(Array.isArray(this.usageStatList)) {
      $dara.Model.validateArray(this.usageStatList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

