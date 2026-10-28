// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RLProgressMicro } from "./RlprogressMicro";
import { RLProgressSync } from "./RlprogressSync";


export class RLProgressTrainer extends $dara.Model {
  /**
   * @remarks
   * The micro-batch progress.
   * 
   * **if can be null:**
   * true
   */
  micro?: RLProgressMicro;
  /**
   * @remarks
   * The current mini-batch ordinal number.
   * 
   * @example
   * 1
   */
  miniIdx?: number;
  /**
   * @remarks
   * The total number of mini-batches.
   * 
   * @example
   * 4
   */
  numMinibatches?: number;
  /**
   * @remarks
   * The parameter synchronization status.
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

