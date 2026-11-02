// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID. This is a common parameter. The ID of each request is unique and can be used to troubleshoot and locate issues.
   * 
   * @example
   * 86A6D421-A0C7-4C01-8648-47377CA6A2CE
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

