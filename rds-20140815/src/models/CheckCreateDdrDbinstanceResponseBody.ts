// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckCreateDdrDBInstanceResponseBody extends $dara.Model {
  isValid?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isValid: 'IsValid',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isValid: 'string',
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

