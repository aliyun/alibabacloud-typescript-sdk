// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSmsTemplateNewResponseBodyFailList extends $dara.Model {
  fail?: string[];
  static names(): { [key: string]: string } {
    return {
      fail: 'Fail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fail: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.fail)) {
      $dara.Model.validateArray(this.fail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

