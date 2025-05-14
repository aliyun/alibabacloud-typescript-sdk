// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetFeatureViewResponseBodyFieldsTransformInput } from "./GetFeatureViewResponseBodyFieldsTransformInput";


export class GetFeatureViewResponseBodyFieldsTransform extends $dara.Model {
  input?: GetFeatureViewResponseBodyFieldsTransformInput[];
  /**
   * @example
   * 1
   */
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
      input: { 'type': 'array', 'itemType': GetFeatureViewResponseBodyFieldsTransformInput },
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

