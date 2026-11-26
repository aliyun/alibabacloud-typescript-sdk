// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteScriptHotWordRequest extends $dara.Model {
  hotWordId?: string;
  static names(): { [key: string]: string } {
    return {
      hotWordId: 'hotWordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotWordId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

