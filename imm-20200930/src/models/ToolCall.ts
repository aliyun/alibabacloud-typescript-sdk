// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FunctionCall } from "./FunctionCall";


export class ToolCall extends $dara.Model {
  /**
   * @remarks
   * The definition of the function that can be called by the AI assistant.
   */
  function?: FunctionCall;
  /**
   * @remarks
   * The type of the tool.
   * 
   * @example
   * function
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      function: 'Function',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      function: FunctionCall,
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

