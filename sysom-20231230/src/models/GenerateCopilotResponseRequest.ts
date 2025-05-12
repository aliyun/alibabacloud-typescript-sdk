// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateCopilotResponseRequest extends $dara.Model {
  llmParamString?: string;
  static names(): { [key: string]: string } {
    return {
      llmParamString: 'llmParamString',
    };
  }

  static types(): { [key: string]: any } {
    return {
      llmParamString: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

