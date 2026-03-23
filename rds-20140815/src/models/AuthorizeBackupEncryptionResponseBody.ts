// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuthorizeBackupEncryptionResponseBody extends $dara.Model {
  authorizationState?: number;
  message?: string;
  requestId?: string;
  roleARN?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationState: 'AuthorizationState',
      message: 'Message',
      requestId: 'RequestId',
      roleARN: 'RoleARN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationState: 'number',
      message: 'string',
      requestId: 'string',
      roleARN: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

