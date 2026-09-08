// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RLProgressStage extends $dara.Model {
  /**
   * @remarks
   * 阶段耗时（秒，保留 3 位小数）；一个 step 常整体落在同一秒内，故不取整
   * 
   * @example
   * 0.483
   */
  duration?: number;
  /**
   * @remarks
   * 阶段结束时间（unix 秒）
   * 
   * @example
   * 1787474487
   */
  endTime?: number;
  /**
   * @remarks
   * 阶段标识
   * 
   * @example
   * traj
   */
  key?: string;
  /**
   * @remarks
   * 阶段中文名
   * 
   * @example
   * 生成轨迹
   */
  label?: string;
  /**
   * @remarks
   * 匹配该阶段的日志标记文案
   * 
   * @example
   * start/end generation
   */
  marker?: string;
  /**
   * @remarks
   * 是否为可选阶段；可选阶段未出现时状态记为 skipped
   * 
   * @example
   * false
   */
  optional?: boolean;
  /**
   * @remarks
   * 阶段开始时间（unix 秒）
   * 
   * @example
   * 1787474487
   */
  startTime?: number;
  /**
   * @remarks
   * done / running / waiting / pending / skipped
   * 
   * @example
   * done
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      endTime: 'EndTime',
      key: 'Key',
      label: 'Label',
      marker: 'Marker',
      optional: 'Optional',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      endTime: 'number',
      key: 'string',
      label: 'string',
      marker: 'string',
      optional: 'boolean',
      startTime: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

