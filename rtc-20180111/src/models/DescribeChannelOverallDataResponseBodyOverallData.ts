// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeChannelOverallDataResponseBodyOverallData extends $dara.Model {
  /**
   * @example
   * 0.5
   */
  connAvgTime?: number;
  /**
   * @example
   * 0.91
   */
  fiveSecJoinRate?: number;
  /**
   * @example
   * 0.02
   */
  totalAudioStuckRate?: number;
  /**
   * @example
   * 0.02
   */
  totalVideoStuckRate?: number;
  /**
   * @example
   * 0.02
   */
  totalVideoVagueRate?: number;
  static names(): { [key: string]: string } {
    return {
      connAvgTime: 'ConnAvgTime',
      fiveSecJoinRate: 'FiveSecJoinRate',
      totalAudioStuckRate: 'TotalAudioStuckRate',
      totalVideoStuckRate: 'TotalVideoStuckRate',
      totalVideoVagueRate: 'TotalVideoVagueRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connAvgTime: 'number',
      fiveSecJoinRate: 'number',
      totalAudioStuckRate: 'number',
      totalVideoStuckRate: 'number',
      totalVideoVagueRate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

