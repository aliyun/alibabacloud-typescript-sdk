// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInterAuthStatisticsZoneOverviewRequest extends $dara.Model {
  /**
   * @remarks
   * The statistical period. Valid values: DAY, WEEK, and MONTH.
   * 
   * @example
   * DAY、WEEK、MONTH
   */
  overviewPeriod?: string;
  /**
   * @remarks
   * The region.
   * 
   * @example
   * DescribeInterAuthStatisticsZoneOverview
   */
  serverRegion?: string;
  /**
   * @remarks
   * The name of the zone.
   * 
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

