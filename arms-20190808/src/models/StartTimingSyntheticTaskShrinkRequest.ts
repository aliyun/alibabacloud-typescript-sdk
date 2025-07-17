// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartTimingSyntheticTaskShrinkRequest extends $dara.Model {
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
   * The task IDs.
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

