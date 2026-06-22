// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFileUploadLimitResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request, which is a unique identifier that Alibaba Cloud generates for the request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * 09969D2C-4FAD-429E-BFBF-9A60DEF8BF6F
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

