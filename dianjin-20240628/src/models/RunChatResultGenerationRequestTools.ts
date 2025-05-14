// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunChatResultGenerationRequestToolsFunction } from "./RunChatResultGenerationRequestToolsFunction";


export class RunChatResultGenerationRequestTools extends $dara.Model {
  function?: RunChatResultGenerationRequestToolsFunction;
  /**
   * @example
   * function
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      function: 'function',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      function: RunChatResultGenerationRequestToolsFunction,
      type: 'string',
    };
  }

  validate() {
    if(this.function && typeof (this.function as any).validate === 'function') {
      (this.function as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

