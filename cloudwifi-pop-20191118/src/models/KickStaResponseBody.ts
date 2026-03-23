// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class KickStaResponseBody extends $dara.Model {
  data?: string;
  errorCode?: number;
  errorMessage?: string;
  isSuccess?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      isSuccess: 'IsSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      errorCode: 'number',
      errorMessage: 'string',
      isSuccess: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

