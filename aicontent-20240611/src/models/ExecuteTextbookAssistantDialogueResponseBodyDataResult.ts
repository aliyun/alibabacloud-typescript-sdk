// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteTextbookAssistantDialogueResponseBodyDataResult extends $dara.Model {
  chineseResult?: string;
  englishResult?: string;
  isFinish?: boolean;
  isTaskCompleted?: boolean;
  static names(): { [key: string]: string } {
    return {
      chineseResult: 'chineseResult',
      englishResult: 'englishResult',
      isFinish: 'isFinish',
      isTaskCompleted: 'isTaskCompleted',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chineseResult: 'string',
      englishResult: 'string',
      isFinish: 'boolean',
      isTaskCompleted: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

