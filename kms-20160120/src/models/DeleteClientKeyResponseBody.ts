// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteClientKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID. This is a unique identifier that Alibaba Cloud generates for the request. Use this ID to troubleshoot and locate issues.
   * 
   * @example
   * 2312e45f-b2fa-4c34-ad94-3eca50932916
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

