// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteEventSubRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * 9qb1****
   */
  appId?: string;
  /**
   * @remarks
   * The subscription ID. You can obtain the ID from the response to the [CreateEventSub](https://help.aliyun.com/document_detail/2848209.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * ad53276431c****
   */
  subscribeId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      subscribeId: 'SubscribeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      subscribeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

