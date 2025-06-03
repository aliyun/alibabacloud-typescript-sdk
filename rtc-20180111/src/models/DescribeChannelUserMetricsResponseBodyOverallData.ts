// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeChannelUserMetricsResponseBodyOverallData extends $dara.Model {
  /**
   * @example
   * 0
   */
  totalBadExpNum?: number;
  /**
   * @example
   * 0
   */
  totalJoinFailNum?: number;
  /**
   * @example
   * 1
   */
  totalPubUserNum?: number;
  /**
   * @example
   * 3
   */
  totalSubUserNum?: number;
  /**
   * @example
   * 5
   */
  totalUserNum?: number;
  static names(): { [key: string]: string } {
    return {
      totalBadExpNum: 'TotalBadExpNum',
      totalJoinFailNum: 'TotalJoinFailNum',
      totalPubUserNum: 'TotalPubUserNum',
      totalSubUserNum: 'TotalSubUserNum',
      totalUserNum: 'TotalUserNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalBadExpNum: 'number',
      totalJoinFailNum: 'number',
      totalPubUserNum: 'number',
      totalSubUserNum: 'number',
      totalUserNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

