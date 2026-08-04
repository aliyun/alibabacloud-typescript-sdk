// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAgSecurityMobileResponseBody extends $dara.Model {
  code?: string;
  message?: string;
  requestId?: string;
  securityMobile?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      securityMobile: 'SecurityMobile',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      securityMobile: 'string',
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

