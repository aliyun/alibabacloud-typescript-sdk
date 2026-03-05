// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDayAmountRequest extends $dara.Model {
  endTime?: string;
  /**
   * @example
   * sales_pick
   */
  sceneType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      sceneType: 'SceneType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      sceneType: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

