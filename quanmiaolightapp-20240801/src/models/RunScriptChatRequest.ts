// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunScriptChatRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  prompt?: string;
  /**
   * @example
   * a3d1c2ac-f086-4a21-9069-f5631542f5a2
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      prompt: 'prompt',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prompt: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

