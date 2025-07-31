// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateOssCheckResultsFreezeRequest extends $dara.Model {
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
  freezeRestorePath?: string;
  /**
   * @example
   * ACL
   */
  freezeType?: string;
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

