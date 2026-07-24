// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateOssCheckResultsUnfreezeRequest extends $dara.Model {
  /**
   * @remarks
   * The end time. Format: YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2023-10-21 16:08:38
   */
  endDate?: string;
  /**
   * @remarks
   * The frozen items.
   * 
   * @example
   * []
   */
  freezeItems?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The start time. Format: YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2023-08-21 16:08:38
   */
  startDate?: string;
  /**
   * @remarks
   * The task ID.
   * 
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

