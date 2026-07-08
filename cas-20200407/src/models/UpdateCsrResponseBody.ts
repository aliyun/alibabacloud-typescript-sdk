// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCsrResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the request. Alibaba Cloud generates this ID for each request. Use this ID to troubleshoot issues.
   * 
   * @example
   * 082FAB35-6AB9-4FD5-8750-D36673548E76
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

