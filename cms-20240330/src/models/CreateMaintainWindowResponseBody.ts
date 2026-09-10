// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMaintainWindowResponseBody extends $dara.Model {
  maintainWindowId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      maintainWindowId: 'maintainWindowId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maintainWindowId: 'string',
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

