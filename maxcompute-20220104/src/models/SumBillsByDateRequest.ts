// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SumBillsByDateRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the cost statistics period.
   * 
   * @example
   * 1718590596556
   */
  endDate?: number;
  /**
   * @remarks
   * A list of instance names. In this context, an instance is a MaxCompute project.
   */
  projectNames?: string[];
  /**
   * @remarks
   * The start time of the cost statistics period.
   * 
   * @example
   * 1715393576201
   */
  startDate?: number;
  /**
   * @remarks
   * The statistics type. Valid values: `PROJECT` (by instance) and `FEE_ITEM` (by billable item).
   * 
   * @example
   * PROJECT
   */
  statsType?: string;
  /**
   * @remarks
   * The number of top results to return, sorted by cost.
   * 
   * @example
   * 8
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

