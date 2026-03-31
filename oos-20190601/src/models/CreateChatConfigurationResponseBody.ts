// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateChatConfigurationResponseBodyChatConfiguration extends $dara.Model {
  /**
   * @example
   * 2025-12-11T13:49:10+00:00
   */
  createdDate?: string;
  /**
   * @example
   * TestChatConfig-9be97b40
   */
  name?: string;
  /**
   * @example
   * 2025-12-11T13:59:02+00:00
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

export class CreateChatConfigurationResponseBody extends $dara.Model {
  /**
   * @example
   * {"Name": "TestChatConfig-9be97b40", "CreatedDate": "2025-12-11T13:49:10+00:00", "UpdatedDate": "2025-12-11T13:59:02+00:00"}
   */
  chatConfiguration?: CreateChatConfigurationResponseBodyChatConfiguration;
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
      chatConfiguration: CreateChatConfigurationResponseBodyChatConfiguration,
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

