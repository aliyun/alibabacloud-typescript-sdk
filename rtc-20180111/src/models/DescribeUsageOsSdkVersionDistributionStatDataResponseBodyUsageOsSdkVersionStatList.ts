// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUsageOsSdkVersionDistributionStatDataResponseBodyUsageOsSdkVersionStatList extends $dara.Model {
  /**
   * @example
   * 3
   */
  audioCallDuration?: number;
  /**
   * @example
   * 0.0984
   */
  callDurationRatio?: string;
  /**
   * @example
   * 1.0.0
   */
  name?: string;
  /**
   * @example
   * macOS
   */
  os?: string;
  /**
   * @example
   * 476
   */
  totalCallDuration?: number;
  /**
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

