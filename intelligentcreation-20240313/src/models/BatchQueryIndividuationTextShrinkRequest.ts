// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchQueryIndividuationTextShrinkRequest extends $dara.Model {
  textIdListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      textIdListShrink: 'textIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      textIdListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

