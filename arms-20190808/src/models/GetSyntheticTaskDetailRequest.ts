// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSyntheticTaskDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID. Default value: cn-hangzhou.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the synthetic monitoring task.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

