// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLivePullToPushRequest extends $dara.Model {
  ownerId?: number;
  /**
   * @remarks
   * The region where the task is started. Valid values:
   * - ap-southeast-1 (Singapore)
   * - ap-southeast-5 (Indonesia)
   * - cn-beijing (Beijing)
   * - cn-shanghai (Shanghai)
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
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
   * fd245384-4067-4f91-9d75-9666a6bc****
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

