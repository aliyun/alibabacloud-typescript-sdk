// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssignProductAccountIdResponseBody extends $dara.Model {
  productAccountId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      productAccountId: 'ProductAccountId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productAccountId: 'number',
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

