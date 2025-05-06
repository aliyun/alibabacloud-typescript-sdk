// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AnalyzeConversationRequestDialogueSentences extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * user
   */
  role?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      role: 'role',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      role: 'string',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

