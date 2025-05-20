// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQueryOptimizeDataTrendResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The name of the metric. Valid values:
   * 
   * * **sqlExecuteCount**: the number of executions of slow SQL queries.
   * * **sqlExecuteCountDiff**: the difference in the number of executions of slow SQL queries compared to the previous day.
   * * **sqlCount**: the number of slow SQL templates.
   * * **sqlCountDiff**: the difference in the number of slow SQL templates compared to the previous day.
   * * **optimizedSqlExecuteCount**: the number of optimizable executions of slow SQL queries.
   * * **optimizedSqlExecuteCountDiff**: the difference in the number of optimizable executions of slow SQL queries compared to the previous day.
   * * **optimizedSqlCount**: the number of optimizable slow SQL templates.
   * * **optimizedSqlCountDiff**: the difference in the number of optimizable slow SQL templates compared to the previous day.
   * 
   * @example
   * sqlExecuteCount
   */
  kpi?: string;
  /**
   * @remarks
   * The data timestamp. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1643040000000
   */
  timestamp?: number;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 1000
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      kpi: 'Kpi',
      timestamp: 'Timestamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kpi: 'string',
      timestamp: 'number',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

