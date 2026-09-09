// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SumComputeMetricsByUsageRequest extends $dara.Model {
  /**
   * @remarks
   * The end timestamp for the query, in milliseconds.
   * 
   * @example
   * 1718590596556
   */
  endDate?: number;
  /**
   * @remarks
   * The project names.
   */
  projectNames?: string[];
  /**
   * @remarks
   * The start timestamp for the query, in milliseconds.
   * 
   * @example
   * 1715393576201
   */
  startDate?: number;
  /**
   * @remarks
   * The usage type. Valid values: `CU` (CU usage) and `SCAN` (scanned data volume).
   * 
   * @example
   * SCAN
   */
  usageType?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'endDate',
      projectNames: 'projectNames',
      startDate: 'startDate',
      usageType: 'usageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'number',
      projectNames: { 'type': 'array', 'itemType': 'string' },
      startDate: 'number',
      usageType: 'string',
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

