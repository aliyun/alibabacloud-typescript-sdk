// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushPromptRequest extends $dara.Model {
  /**
   * @example
   * chat
   */
  groupId?: string;
  /**
   * @example
   * {}
   */
  promptContent?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'groupId',
      promptContent: 'promptContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      promptContent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

