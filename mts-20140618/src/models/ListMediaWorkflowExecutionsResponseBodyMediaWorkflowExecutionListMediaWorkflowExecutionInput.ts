// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionInputInputFile } from "./ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionInputInputFile";


export class ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionInput extends $dara.Model {
  /**
   * @remarks
   * The information about the storage location of the input file of the media workflow in OSS.
   */
  inputFile?: ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionInputInputFile;
  /**
   * @remarks
   * The custom data.
   * 
   * @example
   * example data
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
      inputFile: ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionInputInputFile,
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

