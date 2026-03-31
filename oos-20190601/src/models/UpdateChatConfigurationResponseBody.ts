// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateChatConfigurationResponseBodyChatConfiguration extends $dara.Model {
  /**
   * @example
   * 2025-12-23T10:14:28+00:00
   */
  createdDate?: string;
  /**
   * @example
   * dingtalk
   */
  name?: string;
  /**
   * @example
   * 2025-12-23T10:16:37.178097
   */
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      createdDate: 'CreatedDate',
      name: 'Name',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdDate: 'string',
      name: 'string',
      updatedDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateChatConfigurationResponseBody extends $dara.Model {
  /**
   * @example
   * {"Name": "dingtalk", "CreatedDate": "2025-12-23T10:14:28+00:00", "UpdatedDate": "2025-12-23T10:16:37.178097"}
   */
  chatConfiguration?: UpdateChatConfigurationResponseBodyChatConfiguration;
  /**
   * @example
   * 4DB0****1234
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      chatConfiguration: 'ChatConfiguration',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chatConfiguration: UpdateChatConfigurationResponseBodyChatConfiguration,
      requestId: 'string',
    };
  }

  validate() {
    if(this.chatConfiguration && typeof (this.chatConfiguration as any).validate === 'function') {
      (this.chatConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

