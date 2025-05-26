// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLocationDateClusteringTaskRequestDateOptions extends $dara.Model {
  /**
   * @remarks
   * The maximum number of days allowed in a gap for a single spatiotemporal cluster. Valid values: 0 to 99999.
   * 
   * For example, if travel photos were produced on March 4, 5, and 7, 2024, but not on Marh 6, 2024, and you set the parameter to 1, IMM considers the travel spanning the date range from March 4, 2024 to March 7, 2024 and includes photos within the data range in the same cluster.````
   * 
   * We recommend that you set the parameter to a value within the range from 0 to 3.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  gapDays?: number;
  /**
   * @remarks
   * The maximum number of days that a single spatiotemporal cluster can span. Valid values: 1 to 99999. IMM does not create a cluster that spans more than the maximum number of days.
   * 
   * For example, if you want to create travel photo clusters, you may want to exclude photos that were taken within 15 consecutive days in the same city, because it is likely that these photos were not taken during a travel. In this case, you can set the parameter to 15 to exclude this time range and location from the clustering task.
   * 
   * This parameter is required.
   * 
   * @example
   * 15
   */
  maxDays?: number;
  /**
   * @remarks
   * The minimum number of days that a single spatiotemporal cluster can span. Valid values: 1 to 99999. IMM does not create a cluster that spans less than the minimum number of days.
   * 
   * For example, if you do not want a one-day tour cluster, you can set the parameter to 2.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  minDays?: number;
  static names(): { [key: string]: string } {
    return {
      gapDays: 'GapDays',
      maxDays: 'MaxDays',
      minDays: 'MinDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gapDays: 'number',
      maxDays: 'number',
      minDays: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

