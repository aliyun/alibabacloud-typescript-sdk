// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckInstanceExistResponseBody extends $dara.Model {
  isExistInstance?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isExistInstance: 'IsExistInstance',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isExistInstance: 'boolean',
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

