// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserPoolResponseBodyUserPool extends $dara.Model {
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

export class CreateUserPoolResponseBody extends $dara.Model {
  requestId?: string;
  userPool?: CreateUserPoolResponseBodyUserPool;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userPool: 'UserPool',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userPool: CreateUserPoolResponseBodyUserPool,
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

