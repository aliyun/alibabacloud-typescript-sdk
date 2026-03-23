// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckCloudResourceAuthorizedResponseBody extends $dara.Model {
  authorizationState?: number;
  requestId?: string;
  roleArn?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationState: 'AuthorizationState',
      requestId: 'RequestId',
      roleArn: 'RoleArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationState: 'number',
      requestId: 'string',
      roleArn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

