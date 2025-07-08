// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSmsTemplateNewResponseBodySuccessList extends $dara.Model {
  succes?: string[];
  static names(): { [key: string]: string } {
    return {
      succes: 'Succes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      succes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.succes)) {
      $dara.Model.validateArray(this.succes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

