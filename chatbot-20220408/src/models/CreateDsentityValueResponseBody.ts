// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDSEntityValueResponseBody extends $dara.Model {
  /**
   * @remarks
   * The entity member ID.
   * 
   * @example
   * 2434543453
   */
  entityValueId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * g763hg48j3f3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      entityValueId: 'EntityValueId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityValueId: 'number',
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

