// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendValidateFileResponseBody extends $dara.Model {
  /**
   * @example
   * yyyy-yyyy-yyyy-yyyy
   */
  fileId?: string;
  /**
   * @example
   * xxxx-xxxx-xxxx-xxxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
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

