// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchApplyAdviceByIdListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 86F92D26-B774-5FA1-8E53-82CBEEEBB012
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

