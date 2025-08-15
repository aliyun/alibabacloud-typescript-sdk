// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteVerifyResultRequest extends $dara.Model {
  /**
   * @remarks
   * Whether to depend on the query interface when deleting data
   * 
   * @example
   * Y / N
   */
  deleteAfterQuery?: string;
  /**
   * @remarks
   * Type of data to be deleted
   * 
   * @example
   * Img / Text / All
   */
  deleteType?: string;
  /**
   * @remarks
   * Unique identifier of the authentication request
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

