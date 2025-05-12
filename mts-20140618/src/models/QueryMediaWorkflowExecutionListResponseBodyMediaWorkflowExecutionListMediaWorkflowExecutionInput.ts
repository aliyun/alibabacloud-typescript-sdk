// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionInputInputFile } from "./QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionInputInputFile";


export class QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionInput extends $dara.Model {
  /**
   * @remarks
   * The input file of the media workflow.
   */
  inputFile?: QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionInputInputFile;
  /**
   * @remarks
   * The user-defined data.
   * 
   * @example
   * example data ****
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      inputFile: 'InputFile',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputFile: QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionInputInputFile,
      userData: 'string',
    };
  }

  validate() {
    if(this.inputFile && typeof (this.inputFile as any).validate === 'function') {
      (this.inputFile as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

