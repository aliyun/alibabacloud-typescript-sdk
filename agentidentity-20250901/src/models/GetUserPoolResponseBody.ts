// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserPoolResponseBodyUserPool extends $dara.Model {
  /**
   * @example
   * 2026-05-07T06:19:17Z
   */
  createTime?: string;
  description?: string;
  /**
   * @example
   * 2026-05-07T06:19:17Z
   */
  updateTime?: string;
  /**
   * @example
   * up_xxxxxxxxxxxxxxxxxxxx
   */
  userPoolId?: string;
  /**
   * @example
   * my-agent-userpool
   */
  userPoolName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      updateTime: 'UpdateTime',
      userPoolId: 'UserPoolId',
      userPoolName: 'UserPoolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
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
  /**
   * @example
   * AABD6E03-4B3A-5687-88FF-72232670ED0C
   */
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

