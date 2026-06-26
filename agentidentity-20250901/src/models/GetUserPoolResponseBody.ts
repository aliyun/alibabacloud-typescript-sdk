// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserPoolResponseBodyUserPool extends $dara.Model {
  createTime?: string;
  description?: string;
  sourcePlatform?: string;
  updateTime?: string;
  userPoolId?: string;
  userPoolName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      sourcePlatform: 'SourcePlatform',
      updateTime: 'UpdateTime',
      userPoolId: 'UserPoolId',
      userPoolName: 'UserPoolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      sourcePlatform: 'string',
      updateTime: 'string',
      userPoolId: 'string',
      userPoolName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserPoolResponseBody extends $dara.Model {
  requestId?: string;
  userPool?: GetUserPoolResponseBodyUserPool;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userPool: 'UserPool',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userPool: GetUserPoolResponseBodyUserPool,
    };
  }

  validate() {
    if(this.userPool && typeof (this.userPool as any).validate === 'function') {
      (this.userPool as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

