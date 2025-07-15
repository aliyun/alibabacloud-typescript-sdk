// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestartLivePullToPushRequest extends $dara.Model {
  ownerId?: number;
  /**
   * @remarks
   * The region of the live center. Valid values:
   * 
   * *   ap-southeast-1: Singapore
   * *   ap-southeast-5: Indonesia (Jakarta)
   * *   cn-beijing: China (Beijing)
   * *   cn-shanghai: China (Shanghai)
   * 
   * This parameter is required.
   * 
   * @example
   * preregion
   */
  region?: string;
  regionId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 6f869419-0692-4fd5-8cf0-66cab659****
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

