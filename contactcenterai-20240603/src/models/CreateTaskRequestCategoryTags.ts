// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTaskRequestCategoryTags extends $dara.Model {
  tagDesc?: string;
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      tagDesc: 'tagDesc',
      tagName: 'tagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagDesc: 'string',
      tagName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

