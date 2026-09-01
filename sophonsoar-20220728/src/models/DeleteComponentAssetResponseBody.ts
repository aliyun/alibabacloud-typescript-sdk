// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteComponentAssetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request. Alibaba Cloud generates a unique ID for each request. You can use the request ID to troubleshoot issues.
   * 
   * @example
   * 39C38A34-8532-5D44-B88A-7263B435C316
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

