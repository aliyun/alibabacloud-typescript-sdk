// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteVerifyResultRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the deletion depends on the query operation.
   * 
   * @example
   * Y / N
   */
  deleteAfterQuery?: string;
  /**
   * @remarks
   * The type of data to delete.
   * 
   * @example
   * Img / Text / All
   */
  deleteType?: string;
  /**
   * @remarks
   * The unique identifier of the authentication request.
   * 
   * @example
   * 4ab0b***cbde97
   */
  transactionId?: string;
  static names(): { [key: string]: string } {
    return {
      deleteAfterQuery: 'DeleteAfterQuery',
      deleteType: 'DeleteType',
      transactionId: 'TransactionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteAfterQuery: 'string',
      deleteType: 'string',
      transactionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

