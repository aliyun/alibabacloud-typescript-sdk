// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateHcWarningsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique ID for each request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 722C4F88-7867-4E7B-8ADE-7451053
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

