// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SumStorageMetricsByTypeRequest extends $dara.Model {
  /**
   * @remarks
   * Required. The query end time, specified as a Unix timestamp in milliseconds.
   * 
   * @example
   * 1718590596556
   */
  endDate?: number;
  /**
   * @remarks
   * An array of project names.
   */
  projectNames?: string[];
  /**
   * @remarks
   * Required. The query start time, specified as a Unix timestamp in milliseconds.
   * 
   * @example
   * 1715393576201
   */
  startDate?: number;
  /**
   * @remarks
   * The dimension for aggregating statistics. Valid values: `PROJECT` (by project) and `STORAGE_TYPE` (by storage type).
   * 
   * @example
   * PROJECT
   */
  statsType?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'endDate',
      projectNames: 'projectNames',
      startDate: 'startDate',
      statsType: 'statsType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'number',
      projectNames: { 'type': 'array', 'itemType': 'string' },
      startDate: 'number',
      statsType: 'string',
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

