// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUsageOsSdkVersionDistributionStatDataResponseBodyUsageOsSdkVersionStatList extends $dara.Model {
  /**
   * @remarks
   * Audio call duration, in minutes.
   * 
   * @example
   * 3
   */
  audioCallDuration?: number;
  /**
   * @remarks
   * Call duration ratio, represented as a four-decimal number, such as 0.0984.
   * 
   * @example
   * 0.0984
   */
  callDurationRatio?: string;
  /**
   * @remarks
   * SDK version name, such as 1.0.0 or 1.1.1.
   * 
   * @example
   * 1.0.0
   */
  name?: string;
  /**
   * @remarks
   * Operating system, such as iOS or Android.
   * 
   * @example
   * macOS
   */
  os?: string;
  /**
   * @remarks
   * Total call duration, in minutes.
   * 
   * @example
   * 476
   */
  totalCallDuration?: number;
  /**
   * @remarks
   * Video call duration, in minutes.
   * 
   * @example
   * 473
   */
  videoCallDuration?: number;
  static names(): { [key: string]: string } {
    return {
      audioCallDuration: 'AudioCallDuration',
      callDurationRatio: 'CallDurationRatio',
      name: 'Name',
      os: 'Os',
      totalCallDuration: 'TotalCallDuration',
      videoCallDuration: 'VideoCallDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioCallDuration: 'number',
      callDurationRatio: 'string',
      name: 'string',
      os: 'string',
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

export class DescribeUsageOsSdkVersionDistributionStatDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  /**
   * @remarks
   * List of SDK version data in usage statistics.
   */
  usageOsSdkVersionStatList?: DescribeUsageOsSdkVersionDistributionStatDataResponseBodyUsageOsSdkVersionStatList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      usageOsSdkVersionStatList: 'UsageOsSdkVersionStatList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      usageOsSdkVersionStatList: { 'type': 'array', 'itemType': DescribeUsageOsSdkVersionDistributionStatDataResponseBodyUsageOsSdkVersionStatList },
    };
  }

  validate() {
    if(Array.isArray(this.usageOsSdkVersionStatList)) {
      $dara.Model.validateArray(this.usageOsSdkVersionStatList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

