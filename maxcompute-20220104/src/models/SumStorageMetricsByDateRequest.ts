// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SumStorageMetricsByDateRequest extends $dara.Model {
  /**
   * @remarks
   * The end date. The value is a millisecond-level timestamp. This parameter is required.
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
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The start date. The value is a millisecond-level timestamp. This parameter is required.
   * 
   * @example
   * 1715393576201
   */
  startDate?: number;
  /**
   * @remarks
   * The type of storage usage statistics. This parameter is required. Valid values:
   * 
   * - PROJECT
   * - STORAGE_TYPE
   * 
   * @example
   * PROJECT
   */
  statsType?: string;
  /**
   * @remarks
   * The user UID.
   * 
   * @example
   * 12345
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'endDate',
      projectNames: 'projectNames',
      region: 'region',
      startDate: 'startDate',
      statsType: 'statsType',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'number',
      projectNames: { 'type': 'array', 'itemType': 'string' },
      region: 'string',
      startDate: 'number',
      statsType: 'string',
      userId: 'string',
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

