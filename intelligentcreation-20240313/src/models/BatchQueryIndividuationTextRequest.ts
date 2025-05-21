// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchQueryIndividuationTextRequest extends $dara.Model {
  textIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      textIdList: 'textIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      textIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.textIdList)) {
      $dara.Model.validateArray(this.textIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

