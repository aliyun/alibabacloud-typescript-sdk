// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProductNewResponseBody extends $dara.Model {
  openResult?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      openResult: 'OpenResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openResult: 'boolean',
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

