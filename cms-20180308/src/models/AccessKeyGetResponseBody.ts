// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AccessKeyGetResponseBody extends $dara.Model {
  accessKey?: string;
  errorCode?: number;
  errorMessage?: string;
  requestId?: string;
  secretKey?: string;
  success?: boolean;
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      secretKey: 'SecretKey',
      success: 'Success',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      errorCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
      secretKey: 'string',
      success: 'boolean',
      userId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

