// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopLivePullToPushRequest extends $dara.Model {
  ownerId?: number;
  /**
   * @remarks
   * The live center to query. Valid values:
   * - ap-southeast-1 (Singapore)
   * - ap-southeast-5 (Indonesia)
   * - cn-beijing (Beijing)
   * - cn-shanghai (Shanghai).
   * 
   * This parameter is required.
   * 
   * @example
   * preregion
   */
  region?: string;
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
   * The task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 3bb44350-0c34-49c7-8c5e-cba5e6c0****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      region: 'Region',
      regionId: 'RegionId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      region: 'string',
      regionId: 'string',
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

