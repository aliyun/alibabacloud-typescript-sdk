// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteChatConfigurationResponseBody extends $dara.Model {
  /**
   * @example
   * Chat configuration deleted successfully.
   */
  content?: string;
  /**
   * @example
   * 4DB0****1234
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

