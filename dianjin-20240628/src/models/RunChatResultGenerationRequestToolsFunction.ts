// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunChatResultGenerationRequestToolsFunctionParameters } from "./RunChatResultGenerationRequestToolsFunctionParameters";


export class RunChatResultGenerationRequestToolsFunction extends $dara.Model {
  description?: string;
  /**
   * @example
   * get_time
   */
  name?: string;
  parameters?: RunChatResultGenerationRequestToolsFunctionParameters;
  required?: string[];
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      name: 'name',
      parameters: 'parameters',
      required: 'required',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      parameters: RunChatResultGenerationRequestToolsFunctionParameters,
      required: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.parameters && typeof (this.parameters as any).validate === 'function') {
      (this.parameters as any).validate();
    }
    if(Array.isArray(this.required)) {
      $dara.Model.validateArray(this.required);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

