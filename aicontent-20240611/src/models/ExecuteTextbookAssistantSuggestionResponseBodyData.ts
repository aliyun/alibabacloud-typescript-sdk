// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ExecuteTextbookAssistantSuggestionResponseBodyDataResult } from "./ExecuteTextbookAssistantSuggestionResponseBodyDataResult";


export class ExecuteTextbookAssistantSuggestionResponseBodyData extends $dara.Model {
  result?: ExecuteTextbookAssistantSuggestionResponseBodyDataResult;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: ExecuteTextbookAssistantSuggestionResponseBodyDataResult,
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

