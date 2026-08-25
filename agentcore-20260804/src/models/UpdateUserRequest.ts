// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserRequestBody extends $dara.Model {
  /**
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
   * @example
   * 智能体运营组成员
   */
  note?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'displayName',
      email: 'email',
      note: 'note',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      email: 'string',
      note: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserRequest extends $dara.Model {
  body?: UpdateUserRequestBody;
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
      body: UpdateUserRequestBody,
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

