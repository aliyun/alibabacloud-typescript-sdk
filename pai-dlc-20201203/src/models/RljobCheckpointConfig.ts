// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RLJobCheckpointConfig extends $dara.Model {
  /**
   * @remarks
   * 工作容器内的绝对路径，必须位于可读写的数据源挂载目录内。
   * 
   * This parameter is required.
   * 
   * @example
   * /mnt/output
   */
  path?: string;
  /**
   * @remarks
   * Checkpoint 保存间隔。-1 表示关闭，正整数表示每 N 个训练步保存
   * 
   * @example
   * 10
   */
  saveIntervalSteps?: number;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      saveIntervalSteps: 'SaveIntervalSteps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      saveIntervalSteps: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

