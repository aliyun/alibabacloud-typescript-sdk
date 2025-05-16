// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ExecuteTextbookAssistantDifficultyResponseBodyDataResult } from "./ExecuteTextbookAssistantDifficultyResponseBodyDataResult";


export class ExecuteTextbookAssistantDifficultyResponseBodyData extends $dara.Model {
  result?: ExecuteTextbookAssistantDifficultyResponseBodyDataResult;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: ExecuteTextbookAssistantDifficultyResponseBodyDataResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

