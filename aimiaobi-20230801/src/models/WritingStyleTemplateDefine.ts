// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WritingStyleTemplateDefineExample } from "./WritingStyleTemplateDefineExample";
import { WritingStyleTemplateField } from "./WritingStyleTemplateField";


export class WritingStyleTemplateDefine extends $dara.Model {
  example?: WritingStyleTemplateDefineExample[];
  fields?: WritingStyleTemplateField[];
  static names(): { [key: string]: string } {
    return {
      example: 'Example',
      fields: 'Fields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      example: { 'type': 'array', 'itemType': WritingStyleTemplateDefineExample },
      fields: { 'type': 'array', 'itemType': WritingStyleTemplateField },
    };
  }

  validate() {
    if(Array.isArray(this.example)) {
      $dara.Model.validateArray(this.example);
    }
    if(Array.isArray(this.fields)) {
      $dara.Model.validateArray(this.fields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

