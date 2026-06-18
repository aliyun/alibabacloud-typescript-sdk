// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckAssumeSlrRoleResponseBody extends $dara.Model {
  errorMsg?: string;
  isExist?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      isExist: 'IsExist',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      isExist: 'string',
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

