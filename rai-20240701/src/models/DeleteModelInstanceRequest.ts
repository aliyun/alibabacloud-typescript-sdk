// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteModelInstanceRequest extends $dara.Model {
  modelInstanceIdList?: number[];
  static names(): { [key: string]: string } {
    return {
      modelInstanceIdList: 'ModelInstanceIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelInstanceIdList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.modelInstanceIdList)) {
      $dara.Model.validateArray(this.modelInstanceIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

