// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadFileResponseBody extends $dara.Model {
  /**
   * @example
   * f-1671330gr7934d4771813f7141d28db2f7
   */
  fileId?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
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

