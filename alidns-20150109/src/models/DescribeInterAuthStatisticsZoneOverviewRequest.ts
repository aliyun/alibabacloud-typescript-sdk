// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInterAuthStatisticsZoneOverviewRequest extends $dara.Model {
  /**
   * @example
   * DAY、WEEK、MONTH
   */
  overviewPeriod?: string;
  /**
   * @example
   * DescribeInterAuthStatisticsZoneOverview
   */
  serverRegion?: string;
  /**
   * @example
   * cheng.suow.cc
   */
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      overviewPeriod: 'OverviewPeriod',
      serverRegion: 'ServerRegion',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overviewPeriod: 'string',
      serverRegion: 'string',
      zoneName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

