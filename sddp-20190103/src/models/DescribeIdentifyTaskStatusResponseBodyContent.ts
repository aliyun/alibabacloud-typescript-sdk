// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIdentifyTaskStatusResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * 任务运行状态。
   * - 0：未开始
   * - 1：运行中
   * - 2：已暂停
   * - 3：已终止
   * - 200：已完成
   * 
   * @example
   * 200
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

