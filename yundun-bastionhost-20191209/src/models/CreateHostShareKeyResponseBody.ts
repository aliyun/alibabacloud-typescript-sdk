// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHostShareKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the host shared key.
   * 
   * @example
   * 10235
   */
  hostShareKeyId?: number;
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique ID for each request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * EC9BF0F4-8983-491A-BC8C-1B4DD94976DE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      hostShareKeyId: 'HostShareKeyId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostShareKeyId: 'number',
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

