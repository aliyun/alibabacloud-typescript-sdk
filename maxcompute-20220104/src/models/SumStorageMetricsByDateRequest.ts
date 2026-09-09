// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SumStorageMetricsByDateRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. The value must be a timestamp in milliseconds. This parameter is required.
   * 
   * @example
   * 1718590596556
   */
  endDate?: number;
  /**
   * @remarks
   * The project names. If this parameter is not specified, the data of all projects is returned.
   */
  projectNames?: string[];
  /**
   * @remarks
   * The beginning of the time range to query. The value must be a timestamp in milliseconds. This parameter is required.
   * 
   * @example
   * 1715393576201
   */
  startDate?: number;
  /**
   * @remarks
   * The dimension for aggregating storage metrics. This parameter is required. Valid values:
   * 
   * - `PROJECT`
   * 
   * - `STORAGE_TYPE`
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

