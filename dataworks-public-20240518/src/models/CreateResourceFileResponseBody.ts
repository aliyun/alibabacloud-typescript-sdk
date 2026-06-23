// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateResourceFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the file after successful creation.
   * 
   * @example
   * 1000001
   */
  data?: number;
  /**
   * @remarks
   * The unique ID of this request. If an error occurs, you can use this ID to troubleshoot the issue.
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

