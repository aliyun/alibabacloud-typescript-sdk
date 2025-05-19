// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLogColumnTranslateResultResponseBody extends $dara.Model {
  code?: number;
  errorCode?: number;
  errorMessage?: string;
  message?: string;
  requestId?: string;
  resource?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      message: 'Message',
      requestId: 'RequestId',
      resource: 'Resource',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errorCode: 'number',
      errorMessage: 'string',
      message: 'string',
      requestId: 'string',
      resource: 'string',
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

