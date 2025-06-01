// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachPolicy2ApprovalProcessResponseBody extends $dara.Model {
  /**
   * @example
   * C51D9340-4604-5331-AE62-407F3B408F86
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

