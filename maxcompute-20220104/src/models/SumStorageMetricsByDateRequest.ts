// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SumStorageMetricsByDateRequest extends $dara.Model {
  /**
   * @example
   * 1718590596556
   */
  endDate?: number;
  projectNames?: string[];
  /**
   * @example
   * cn-hangzhou
   */
  region?: string;
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

