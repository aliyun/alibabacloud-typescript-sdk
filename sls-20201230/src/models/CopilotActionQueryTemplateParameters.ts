// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CopilotActionQueryTemplateParameters extends $dara.Model {
  name?: string;
  prompt?: string;
  required?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      prompt: 'prompt',
      required: 'required',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      prompt: 'string',
      required: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

