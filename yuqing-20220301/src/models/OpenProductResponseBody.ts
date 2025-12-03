// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenProductResponseBody extends $dara.Model {
  id?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
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

