// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SumBillsRequest extends $dara.Model {
  /**
   * @example
   * 1776232895313
   */
  endDate?: number;
  projectNames?: string[];
  /**
   * @example
   * 1715393576201
   */
  startDate?: number;
  /**
   * @example
   * PROJECT
   */
  statsType?: string;
  /**
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

