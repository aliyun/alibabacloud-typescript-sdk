// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteModelInstanceShrinkRequest extends $dara.Model {
  modelInstanceIdListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      modelInstanceIdListShrink: 'ModelInstanceIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelInstanceIdListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

