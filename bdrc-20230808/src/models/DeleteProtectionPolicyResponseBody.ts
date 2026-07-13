// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteProtectionPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the request.
   * 
   * @example
   * 5B2F09BF-CEBD-5A7E-AC01-E7F86169A5E5
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

