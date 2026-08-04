// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAgAccountLoginPermissionResponseBody extends $dara.Model {
  code?: string;
  hasLoginPermission?: boolean;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      hasLoginPermission: 'HasLoginPermission',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hasLoginPermission: 'boolean',
      message: 'string',
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

