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

