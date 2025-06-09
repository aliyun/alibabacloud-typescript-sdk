// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAiToolsResponseBodyFields extends $dara.Model {
  name?: string;
  option?: string[];
  required?: boolean;
  type?: string;
  example?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      option: 'option',
      required: 'required',
      type: 'type',
      example: 'example',
      description: 'description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      option: { 'type': 'array', 'itemType': 'string' },
      required: 'boolean',
      type: 'string',
      example: 'string',
      description: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.option)) {
      $dara.Model.validateArray(this.option);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

