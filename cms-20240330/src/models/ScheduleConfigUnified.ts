// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScheduleConfigUnified extends $dara.Model {
  /**
   * @remarks
   * 调度间隔（秒），type=FIXED 时使用
   */
  intervalSecs?: number;
  /**
   * @remarks
   * 调度类型
   * 
   * This parameter is required.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      intervalSecs: 'intervalSecs',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intervalSecs: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

