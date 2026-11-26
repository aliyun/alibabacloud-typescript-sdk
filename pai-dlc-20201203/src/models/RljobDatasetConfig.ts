// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RLJobDatasetConfig extends $dara.Model {
  /**
   * @remarks
   * 数据集名称，在 Datasets 列表内唯一
   * 
   * This parameter is required.
   * 
   * @example
   * gsm8k
   */
  name?: string;
  /**
   * @remarks
   * 工作容器内的数据集绝对路径；可指向目录或文件，可位于 DataSources 挂载目录内，也可由镜像预置
   * 
   * This parameter is required.
   * 
   * @example
   * /mnt/input/gsm8k
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      path: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

