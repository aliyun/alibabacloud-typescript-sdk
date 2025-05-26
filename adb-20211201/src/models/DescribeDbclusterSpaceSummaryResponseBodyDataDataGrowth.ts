// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterSpaceSummaryResponseBodyDataDataGrowth extends $dara.Model {
  /**
   * @remarks
   * The data growth within the last day. Unit: bytes.
   * 
   * >  Formula: Data growth within the last day = Current data size - Data size one day ago.
   * 
   * @example
   * 1048576
   */
  dayGrowth?: number;
  /**
   * @remarks
   * The daily data growth within the last seven days. Unit: bytes.
   * 
   * >  Formula: Daily data growth within the last seven days = (Current data size - Data size seven days ago)/7.
   * 
   * @example
   * 1048576
   */
  weekGrowth?: number;
  static names(): { [key: string]: string } {
    return {
      dayGrowth: 'DayGrowth',
      weekGrowth: 'WeekGrowth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dayGrowth: 'number',
      weekGrowth: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

