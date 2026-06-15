// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetValidateFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The download URL of the result file.
   * 
   * @example
   * https://xxxxxx/yyy
   */
  fileUrl?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
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

