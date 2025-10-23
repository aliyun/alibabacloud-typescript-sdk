// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetValidateFileResponseBody extends $dara.Model {
  /**
   * @example
   * https://xxxxxx/yyy
   */
  fileUrl?: string;
  /**
   * @example
   * yyyy-yyyy-yyyy-yyyy
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fileUrl: 'FileUrl',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUrl: 'string',
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

