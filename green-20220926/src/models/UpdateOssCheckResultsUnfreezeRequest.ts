// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateOssCheckResultsUnfreezeRequest extends $dara.Model {
  /**
   * @example
   * 2023-10-21 16:08:38
   */
  endDate?: string;
  /**
   * @example
   * []
   */
  freezeItems?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * 2023-08-21 16:08:38
   */
  startDate?: string;
  /**
   * @example
   * P_B6YRVD
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      freezeItems: 'FreezeItems',
      regionId: 'RegionId',
      startDate: 'StartDate',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      freezeItems: 'string',
      regionId: 'string',
      startDate: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

