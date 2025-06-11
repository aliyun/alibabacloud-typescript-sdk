// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTagValueResponseBody extends $dara.Model {
  /**
   * @remarks
   * The tag creation result.
   * 
   * @example
   * create tag value success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4C91F7BA-xxxx-xxxx-xxxx-846ECA1A9908
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
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

