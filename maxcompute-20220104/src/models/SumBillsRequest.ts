// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SumBillsRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the billing cycle.
   * 
   * @example
   * 1776232895313
   */
  endDate?: number;
  /**
   * @remarks
   * A list of instance names. This parameter is not required if `statsType` is set to `FEE_ITEM`.
   */
  projectNames?: string[];
  /**
   * @remarks
   * The start time of the billing cycle.
   * 
   * @example
   * 1715393576201
   */
  startDate?: number;
  /**
   * @remarks
   * The dimension by which to summarize costs. Valid values: `PROJECT` (by instance) and `FEE_ITEM` (by billable item).
   * 
   * @example
   * PROJECT
   */
  statsType?: string;
  /**
   * @remarks
   * The number of top results to return after sorting by cost.
   * 
   * @example
   * 5
   */
  topN?: number;
  static names(): { [key: string]: string } {
    return {
      endDate: 'endDate',
      projectNames: 'projectNames',
      startDate: 'startDate',
      statsType: 'statsType',
      topN: 'topN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'number',
      projectNames: { 'type': 'array', 'itemType': 'string' },
      startDate: 'number',
      statsType: 'string',
      topN: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.projectNames)) {
      $dara.Model.validateArray(this.projectNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

