// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateFeatureViewRequestFieldsTransformInput } from "./CreateFeatureViewRequestFieldsTransformInput";


export class CreateFeatureViewRequestFieldsTransform extends $dara.Model {
  input?: CreateFeatureViewRequestFieldsTransformInput[];
  LLMConfigId?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      input: 'Input',
      LLMConfigId: 'LLMConfigId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: { 'type': 'array', 'itemType': CreateFeatureViewRequestFieldsTransformInput },
      LLMConfigId: 'number',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.input)) {
      $dara.Model.validateArray(this.input);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

