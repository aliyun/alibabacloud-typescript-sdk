// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFileDetectResponseBody extends $dara.Model {
  /**
   * @remarks
   * The identifier of the file.
   * 
   * @example
   * 0a212417e65c26ff133cfff28f6c****
   */
  hashKey?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 7E0618A9-D5EF-4220-9471-C42B5E92719F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      hashKey: 'HashKey',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hashKey: 'string',
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

