// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPipelinesRequest extends $dara.Model {
  labelSelector?: string[];
  static names(): { [key: string]: string } {
    return {
      labelSelector: 'labelSelector',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelSelector: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.labelSelector)) {
      $dara.Model.validateArray(this.labelSelector);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

