// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteModelOutput extends $dara.Model {
  errCode?: string;
  errMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errCode: 'errCode',
      errMsg: 'errMsg',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

