// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDSEntityValueResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the deleted entity value.
   * 
   * @example
   * 3453453452
   */
  entityValueId?: number;
  /**
   * @remarks
   * The unique identifier of the request.
   * 
   * @example
   * dfdf2t3rfvb45y
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

