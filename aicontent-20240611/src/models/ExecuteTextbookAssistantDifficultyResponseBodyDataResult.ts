// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteTextbookAssistantDifficultyResponseBodyDataResult extends $dara.Model {
  /**
   * @example
   * Let\\"s look at the text again. Mike says, \\"I\\"m Mike Black.\\" Can you try saying it like Mike?
   */
  result?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

