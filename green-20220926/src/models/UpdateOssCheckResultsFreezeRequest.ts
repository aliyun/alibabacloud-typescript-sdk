// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateOssCheckResultsFreezeRequest extends $dara.Model {
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
   * The items to freeze.
   * 
   * @example
   * []
   */
  freezeItems?: string;
  /**
   * @remarks
   * The directory to which the frozen files are moved.
   * 
   * @example
   * uploadTest/
   */
  freezeRestorePath?: string;
  /**
   * @remarks
   * The freeze type.
   * 
   * @example
   * ACL
   */
  freezeType?: string;
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
   * P_15BU42
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      freezeItems: 'FreezeItems',
      freezeRestorePath: 'FreezeRestorePath',
      freezeType: 'FreezeType',
      regionId: 'RegionId',
      startDate: 'StartDate',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      freezeItems: 'string',
      freezeRestorePath: 'string',
      freezeType: 'string',
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

