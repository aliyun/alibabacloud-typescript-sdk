// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAICoachScriptPageResponseBodyListSampleDialogueList extends $dara.Model {
  message?: string;
  /**
   * @example
   * student
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'message',
      role: 'role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      role: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

