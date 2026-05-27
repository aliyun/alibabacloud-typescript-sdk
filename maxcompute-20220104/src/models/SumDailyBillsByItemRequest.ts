// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SumDailyBillsByItemRequest extends $dara.Model {
  /**
   * @example
   * 1718590596556
   */
  endDate?: number;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
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
  types?: string[];
  static names(): { [key: string]: string } {
    return {
      endDate: 'endDate',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      projectNames: 'projectNames',
      startDate: 'startDate',
      statsType: 'statsType',
      types: 'types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      projectNames: { 'type': 'array', 'itemType': 'string' },
      startDate: 'number',
      statsType: 'string',
      types: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.projectNames)) {
      $dara.Model.validateArray(this.projectNames);
    }
    if(Array.isArray(this.types)) {
      $dara.Model.validateArray(this.types);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

