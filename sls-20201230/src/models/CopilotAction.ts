// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CopilotActionParameters } from "./CopilotActionParameters";
import { CopilotActionQueryTemplateParameters } from "./CopilotActionQueryTemplateParameters";


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

