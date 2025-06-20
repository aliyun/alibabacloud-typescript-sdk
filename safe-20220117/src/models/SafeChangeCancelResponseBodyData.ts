// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SafeChangeCancelResponseBodyData extends $dara.Model {
  sourceOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceOrderId: 'SourceOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceOrderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

