// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddScriptHotWordResponseBody extends $dara.Model {
  hotWordId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      hotWordId: 'hotWordId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotWordId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

