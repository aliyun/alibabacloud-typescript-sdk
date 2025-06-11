// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProcessStatsCompositionResponseBodyDataSessionStatisticsUserStatistics extends $dara.Model {
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
   * The username.
   * 
   * @example
   * test_user
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
   * The dimension. This value is fixed to user.
   * 
   * @example
   * user
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

