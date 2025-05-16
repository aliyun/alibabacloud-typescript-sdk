// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AITeacherExpansionPracticeTaskGenerateResponseBodyDataRoleSet extends $dara.Model {
  /**
   * @example
   * Alex
   */
  assistant?: string;
  /**
   * @example
   * Jamie
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      assistant: 'assistant',
      user: 'user',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistant: 'string',
      user: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

