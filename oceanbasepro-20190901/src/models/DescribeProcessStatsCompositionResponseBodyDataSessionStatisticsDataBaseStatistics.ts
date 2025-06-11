// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProcessStatsCompositionResponseBodyDataSessionStatisticsDataBaseStatistics extends $dara.Model {
  /**
   * @remarks
   * The number of active sessions.
   * 
   * @example
   * 25
   */
  activeCount?: number;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * test_database
   */
  metricValue?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 30
   */
  totalCount?: number;
  /**
   * @remarks
   * The dimension. This value is fixed to database.
   * 
   * @example
   * database
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      activeCount: 'ActiveCount',
      metricValue: 'MetricValue',
      totalCount: 'TotalCount',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeCount: 'number',
      metricValue: 'string',
      totalCount: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

