// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUploadLinkResponseBody extends $dara.Model {
  /**
   * @example
   * http://www.aliyuncs.com/test.mp3
   */
  data?: string;
  /**
   * @example
   * E37E2B77-A664-5278-8219-23BBC0EB2A35
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
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

