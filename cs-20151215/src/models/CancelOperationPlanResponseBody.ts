// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelOperationPlanResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * db82195b-75a8-40e5-9be4-16f1829dc624
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'request_id',
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

