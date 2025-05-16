// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteTextbookAssistantSseDialogueResponseBodyData extends $dara.Model {
  /**
   * @example
   * Thanks, Lily. Do you like meat, Lily?
   */
  englishResult?: string;
  /**
   * @example
   * true
   */
  isFinish?: boolean;
  static names(): { [key: string]: string } {
    return {
      englishResult: 'englishResult',
      isFinish: 'isFinish',
    };
  }

  static types(): { [key: string]: any } {
    return {
      englishResult: 'string',
      isFinish: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

