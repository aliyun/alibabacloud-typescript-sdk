// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { StartAIDiffAnalysisRequestTask1 } from "./StartAidiffAnalysisRequestTask1";
import { StartAIDiffAnalysisRequestTask2 } from "./StartAidiffAnalysisRequestTask2";


export class StartAIDiffAnalysisRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  task1?: StartAIDiffAnalysisRequestTask1;
  /**
   * @remarks
   * This parameter is required.
   */
  task2?: StartAIDiffAnalysisRequestTask2;
  static names(): { [key: string]: string } {
    return {
      task1: 'task1',
      task2: 'task2',
    };
  }

  static types(): { [key: string]: any } {
    return {
      task1: StartAIDiffAnalysisRequestTask1,
      task2: StartAIDiffAnalysisRequestTask2,
    };
  }

  validate() {
    if(this.task1 && typeof (this.task1 as any).validate === 'function') {
      (this.task1 as any).validate();
    }
    if(this.task2 && typeof (this.task2 as any).validate === 'function') {
      (this.task2 as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

