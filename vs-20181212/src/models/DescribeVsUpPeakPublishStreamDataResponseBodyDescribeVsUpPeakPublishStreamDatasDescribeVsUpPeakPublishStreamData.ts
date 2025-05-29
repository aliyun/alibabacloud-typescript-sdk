// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVsUpPeakPublishStreamDataResponseBodyDescribeVsUpPeakPublishStreamDatasDescribeVsUpPeakPublishStreamData extends $dara.Model {
  bandWidth?: string;
  /**
   * @example
   * 1522252320000
   */
  peakTime?: string;
  /**
   * @example
   * 31
   */
  publishStreamNum?: number;
  /**
   * @example
   * 1522166400000
   */
  queryTime?: string;
  /**
   * @example
   * example.com
   */
  statName?: string;
  static names(): { [key: string]: string } {
    return {
      bandWidth: 'BandWidth',
      peakTime: 'PeakTime',
      publishStreamNum: 'PublishStreamNum',
      queryTime: 'QueryTime',
      statName: 'StatName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandWidth: 'string',
      peakTime: 'string',
      publishStreamNum: 'number',
      queryTime: 'string',
      statName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

