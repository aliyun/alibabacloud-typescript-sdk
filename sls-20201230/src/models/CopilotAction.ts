// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CopilotActionParameters extends $dara.Model {
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

export class CopilotAction extends $dara.Model {
  action?: string;
  description?: string;
  name?: string;
  parameters?: CopilotActionParameters[];
  queryMaxLength?: number;
  queryTemplate?: string;
  queryTemplateParameters?: CopilotActionQueryTemplateParameters[];
  scene?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      description: 'description',
      name: 'name',
      parameters: 'parameters',
      queryMaxLength: 'queryMaxLength',
      queryTemplate: 'queryTemplate',
      queryTemplateParameters: 'queryTemplateParameters',
      scene: 'scene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      description: 'string',
      name: 'string',
      parameters: { 'type': 'array', 'itemType': CopilotActionParameters },
      queryMaxLength: 'number',
      queryTemplate: 'string',
      queryTemplateParameters: { 'type': 'array', 'itemType': CopilotActionQueryTemplateParameters },
      scene: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    if(Array.isArray(this.queryTemplateParameters)) {
      $dara.Model.validateArray(this.queryTemplateParameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

