// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUsageDistributionStatDataResponseBodyUsageStatList extends $dara.Model {
  /**
   * @remarks
   * The duration of audio calls, in minutes.
   * 
   * @example
   * 51
   */
  audioCallDuration?: number;
  /**
   * @remarks
   * The ratio of the call duration, represented by four decimal places, such as 0.9782.
   * 
   * @example
   * 0.9782
   */
  callDurationRatio?: string;
  /**
   * @remarks
   * The statistical dimension. Valid values:
   * - When StatDim is set to CHANNEL_ONLINE, valid values are **ONE_TO_FIVE** (1 to 5 users), **SIX_TO_TEN** (6 to 10 users), **ELEVEN_TO_TWENTY** (11 to 20 users), **TWENTY_ONE_TO_FIFTY** (21 to 50 users), and **ABOVE_FIFTY** (more than 50 users).  
   * - When StatDim is set to NETWORK, valid values are **WiFi**, **4G**, and others.  
   * - When StatDim is set to OS, valid values are **iOS**, **Android**, and others.
   * 
   * @example
   * ONE_TO_FIVE
   */
  name?: string;
  /**
   * @remarks
   * The total duration of calls, in minutes.
   * 
   * @example
   * 10636
   */
  totalCallDuration?: number;
  /**
   * @remarks
   * The duration of video calls, in minutes.
   * 
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
   * @remarks
   * The request ID.
   * 
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  /**
   * @remarks
   * The list of usage statistics.
   */
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

