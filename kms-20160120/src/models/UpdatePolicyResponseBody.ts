// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * f455324b-e229-4066-9f58-9c1cf3fe83a8
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

