// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChatRequest extends $dara.Model {
  /**
   * @example
   * QuestionAndAnswer
   */
  verbose?: string;
  static names(): { [key: string]: string } {
    return {
      verbose: 'Verbose',
    };
  }

  static types(): { [key: string]: any } {
    return {
      verbose: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

