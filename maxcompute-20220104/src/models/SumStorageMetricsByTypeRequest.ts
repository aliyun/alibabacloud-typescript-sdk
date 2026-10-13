// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SumStorageMetricsByTypeRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the statistical period. This parameter is required. Unit: milliseconds (UNIX timestamp).
   * 
   * @example
   * 1718590596556
   */
  endDate?: number;
  /**
   * @remarks
   * The instance name.
   */
  projectNames?: string[];
  /**
   * @remarks
   * The start time of the statistical period. This parameter is required. Unit: milliseconds (UNIX timestamp).
   * 
   * @example
   * 1715393576201
   */
  startDate?: number;
  /**
   * @remarks
   * The statistics type. Valid values:
   * - PROJECT: instance.
   * - STORAGE_TYPE: storage type.
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

