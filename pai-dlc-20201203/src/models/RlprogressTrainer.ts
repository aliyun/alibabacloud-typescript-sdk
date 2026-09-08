// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RLProgressMicro } from "./RlprogressMicro";
import { RLProgressSync } from "./RlprogressSync";


export class RLProgressTrainer extends $dara.Model {
  /**
   * @remarks
   * micro-batch 进度
   * 
   * **if can be null:**
   * true
   */
  micro?: RLProgressMicro;
  /**
   * @remarks
   * 当前 mini batch 序号
   * 
   * @example
   * 1
   */
  miniIdx?: number;
  /**
   * @remarks
   * mini-batch 总数
   * 
   * @example
   * 4
   */
  numMinibatches?: number;
  /**
   * @remarks
   * 参数同步状态
   * 
   * **if can be null:**
   * true
   */
  sync?: RLProgressSync;
  static names(): { [key: string]: string } {
    return {
      micro: 'Micro',
      miniIdx: 'MiniIdx',
      numMinibatches: 'NumMinibatches',
      sync: 'Sync',
    };
  }

  static types(): { [key: string]: any } {
    return {
      micro: RLProgressMicro,
      miniIdx: 'number',
      numMinibatches: 'number',
      sync: RLProgressSync,
    };
  }

  validate() {
    if(this.micro && typeof (this.micro as any).validate === 'function') {
      (this.micro as any).validate();
    }
    if(this.sync && typeof (this.sync as any).validate === 'function') {
      (this.sync as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

