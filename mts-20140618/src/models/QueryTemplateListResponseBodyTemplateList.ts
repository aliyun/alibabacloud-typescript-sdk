// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryTemplateListResponseBodyTemplateListTemplate } from "./QueryTemplateListResponseBodyTemplateListTemplate";


export class QueryTemplateListResponseBodyTemplateList extends $dara.Model {
  template?: QueryTemplateListResponseBodyTemplateListTemplate[];
  static names(): { [key: string]: string } {
    return {
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      template: { 'type': 'array', 'itemType': QueryTemplateListResponseBodyTemplateListTemplate },
    };
  }

  validate() {
    if(Array.isArray(this.template)) {
      $dara.Model.validateArray(this.template);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

