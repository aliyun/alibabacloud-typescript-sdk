// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserRequestBody extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 张三
   */
  displayName?: string;
  /**
   * @example
   * user-01@example.com
   */
  email?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * user-01
   */
  name?: string;
  /**
   * @example
   * 智能体运营组成员
   */
  note?: string;
  /**
   * @example
   * Example@2026
   */
  password?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'displayName',
      email: 'email',
      name: 'name',
      note: 'note',
      password: 'password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      email: 'string',
      name: 'string',
      note: 'string',
      password: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserRequest extends $dara.Model {
  body?: CreateUserRequestBody;
  /**
   * @example
   * 暂不支持
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CreateUserRequestBody,
      clientToken: 'string',
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

