// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateResourceFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the file after it is created.
   * 
   * @example
   * 1000001
   */
  data?: number;
  /**
   * @remarks
   * The ID of the request. You can use the ID to locate logs and troubleshoot issues.
   * 
   * @example
   * 0000-ABCD-EFG
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
      data: 'number',
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

