// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAiToolsResponseBodyFields } from "./ListAiToolsResponseBodyFields";


export class ListAiToolsResponseBody extends $dara.Model {
  fields?: ListAiToolsResponseBodyFields[];
  name?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      fields: 'fields',
      name: 'name',
      description: 'description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fields: { 'type': 'array', 'itemType': ListAiToolsResponseBodyFields },
      name: 'string',
      description: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fields)) {
      $dara.Model.validateArray(this.fields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

