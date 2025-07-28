// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSystemPropertyTemplatesRequest extends $dara.Model {
  templateIds?: string[];
  static names(): { [key: string]: string } {
    return {
      templateIds: 'TemplateIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.templateIds)) {
      $dara.Model.validateArray(this.templateIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

