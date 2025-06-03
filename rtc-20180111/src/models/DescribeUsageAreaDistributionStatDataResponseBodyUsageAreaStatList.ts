// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUsageAreaDistributionStatDataResponseBodyUsageAreaStatList extends $dara.Model {
  /**
   * @example
   * 45
   */
  audioCallDuration?: number;
  /**
   * @example
   * 中国
   */
  name?: string;
  /**
   * @example
   * 4821
   */
  totalCallDuration?: number;
  /**
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

