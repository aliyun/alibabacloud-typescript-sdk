// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopTimingSyntheticTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The task IDs.
   * 
   * This parameter is required.
   */
  taskIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      taskIdsShrink: 'TaskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      taskIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

