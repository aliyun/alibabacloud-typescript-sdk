// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScalingAnalyzeTimeRange extends $dara.Model {
  /**
   * @remarks
   * 结束时间。
   * 
   * @example
   * 1676441972000
   */
  endTime?: number;
  /**
   * @remarks
   * 起始时间。
   * 
   * @example
   * 1676441971000
   */
  startTime?: number;
  /**
   * @remarks
   * 峰谷类型。 peak/valley
   * 
   * @example
   * peak
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
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

