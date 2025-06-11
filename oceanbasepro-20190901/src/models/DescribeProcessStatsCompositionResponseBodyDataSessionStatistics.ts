// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeProcessStatsCompositionResponseBodyDataSessionStatisticsDataBaseStatistics } from "./DescribeProcessStatsCompositionResponseBodyDataSessionStatisticsDataBaseStatistics";
import { DescribeProcessStatsCompositionResponseBodyDataSessionStatisticsSourceStatistics } from "./DescribeProcessStatsCompositionResponseBodyDataSessionStatisticsSourceStatistics";
import { DescribeProcessStatsCompositionResponseBodyDataSessionStatisticsUserStatistics } from "./DescribeProcessStatsCompositionResponseBodyDataSessionStatisticsUserStatistics";


export class DescribeProcessStatsCompositionResponseBodyDataSessionStatistics extends $dara.Model {
  /**
   * @remarks
   * The session data in the database dimension.
   */
  dataBaseStatistics?: DescribeProcessStatsCompositionResponseBodyDataSessionStatisticsDataBaseStatistics[];
  /**
   * @remarks
   * The session data in the client dimension.
   */
  sourceStatistics?: DescribeProcessStatsCompositionResponseBodyDataSessionStatisticsSourceStatistics[];
  /**
   * @remarks
   * The session data in the user dimension.
   */
  userStatistics?: DescribeProcessStatsCompositionResponseBodyDataSessionStatisticsUserStatistics[];
  static names(): { [key: string]: string } {
    return {
      dataBaseStatistics: 'DataBaseStatistics',
      sourceStatistics: 'SourceStatistics',
      userStatistics: 'UserStatistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataBaseStatistics: { 'type': 'array', 'itemType': DescribeProcessStatsCompositionResponseBodyDataSessionStatisticsDataBaseStatistics },
      sourceStatistics: { 'type': 'array', 'itemType': DescribeProcessStatsCompositionResponseBodyDataSessionStatisticsSourceStatistics },
      userStatistics: { 'type': 'array', 'itemType': DescribeProcessStatsCompositionResponseBodyDataSessionStatisticsUserStatistics },
    };
  }

  validate() {
    if(Array.isArray(this.dataBaseStatistics)) {
      $dara.Model.validateArray(this.dataBaseStatistics);
    }
    if(Array.isArray(this.sourceStatistics)) {
      $dara.Model.validateArray(this.sourceStatistics);
    }
    if(Array.isArray(this.userStatistics)) {
      $dara.Model.validateArray(this.userStatistics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

